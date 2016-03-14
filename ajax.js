/**
 * User: zhecky
 * Date: 13.01.13
 * Time: 14:23
 */


var ajax = {
    create : function() {
        var req;
        if (navigator.appName == "Microsoft Internet Explorer") {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            req = new XMLHttpRequest();
        }
        return req;
    },

    generic : function(url, method, paramString, callback, errorCallback) {
        var xhrObject = this.create();
        xhrObject.onreadystatechange = function() {
            if (xhrObject.readyState == 4) {
                if (xhrObject.status == 200) {
                    callback(xhrObject.responseText);
                } else {
                    if(isFunction(errorCallback)){
                        errorCallback(xhrObject.status, xhrObject.statusText);
                    }
                }
            }
        };
        xhrObject.open(method, url, true);
        xhrObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        xhrObject.send(paramString);
    },
    postObject : function(url, obj, callback, errorCallBack) {
        this.generic(url, "POST", this.objectToUrlString(obj), callback, errorCallBack);
    },
    sendGetObject : function(url, obj, callback, errorCallBack) {
        this.generic(url + this.objectToUrlString(obj), "GET", "", callback, errorCallBack);
    },
    objectToUrlString : function(obj) {
        var result = "";
        for (var key in obj) {
            if(typeof obj[key] === "object"){
                for(var objKey in obj[key]){

                    if(typeof obj[key][objKey] === "object") {

                        for(var obj2Key in obj[key][objKey]){
                            result += ((result.length > 0) ? '&' : '') + key + '[' + objKey + '][' + obj2Key + ']' + '=' + encodeURIComponent(obj[key][objKey][obj2Key]);
                        }

                    } else {
                        result += ((result.length > 0) ? '&' : '') + key + '[' + objKey + ']' + '=' + encodeURIComponent(obj[key][objKey]);
                    }

                }
            } else {
                result += ((result.length > 0) ? '&' : '') + key + '=' + encodeURIComponent(obj[key]);
            }
        }
        return result;
    }
};
