/**
 * User: zhecky
 * Date: 10/18/13
 * Time: 1:32 AM
 */



function fromJSON(string) {
    var data = {};
    try {
        data = eval('(' + string + ')');
    } catch(e) {
        console.log(e);
        return false;
    }
    return data;
}

/**
 *
 * @param id
 * @return Element
 */
function ge(id) {
    return document.getElementById(id);
}

/**
 *
 * @param element Element
 * @param id string
 */
function searchById(element, id) {
    for (var key in element.childNodes) {
        var node = element.childNodes[key];
        if (node['id'] == id) {
            return node;
        }
        var result = searchById(node, id);
        if (result != null) {
            return result;
        }
    }
    return null;
}

/**
 *
 * @param id
 *
 * @return Element
 */
function ce(id) {
    return document.createElement(id);
}

function isNotEmpty(value) {
    if (typeof value !== 'undefined' && value != null) {
        if (typeof value === 'string') {
            return value != '';
        } if(typeof value === 'object'){
            return Object.size(value) > 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function isEmpty(value) {
    return !isNotEmpty(value);
}

function isDefined(value) {
    return (typeof value !== 'undefined');
}

function isFunction(value){
    return isDefined(value) && typeof(value) == "function";
}

function isArray(value) {
    return (isDefined(value['length']));
}

/**
 * create dom object from map.
 * Used keys: tag, className, src, html, value, selected, href, children, otherProperties
 * Events keys: onClick, onMouseDown, onMouseOver
 * @param map
 * @return Element
 */
function createDOM(map) {
    var result;
    if (isArray(map)) {
        result = [];
        for (var ind in map) {
            var mapElem = map[ind];
            var domElem = ce(mapElem['tag']);
            if (isDefined(mapElem['otherProperties'])){
                for(var propKey in mapElem['otherProperties']){
                    domElem.setAttribute(propKey, mapElem['otherProperties'][propKey]);
                }
            }
            if (isDefined(mapElem['id'])) {
                domElem.id = mapElem['id'];
            }
            if (isDefined(mapElem['className'])) {
                domElem.className = mapElem['className'];
            }
            if (isDefined(mapElem['src'])) {
                domElem.src = mapElem['src'];
            }
            if (isDefined(mapElem['html'])) {
                domElem.innerHTML = mapElem['html'];
            }
            if (isDefined(mapElem['value'])) {
                domElem.value = mapElem['value'];
            }
            if (isDefined(mapElem['selected'])) {
                domElem.selected = mapElem['selected'];
            }
            if (isDefined(mapElem['href'])) {
                domElem.href = mapElem['href'];
            }
            if (isDefined(mapElem['title'])) {
                domElem.title = mapElem['title'];
            }
            if (isDefined(mapElem['target'])) {
                domElem.target = mapElem['target'];
            }
            if (isDefined(mapElem['onClick'])) {
                domElem.onclick = mapElem['onClick'];
            }
            if (isDefined(mapElem['onMouseDown'])) {
                domElem.onmousedown = mapElem['onMouseDown'];
            }
            if (isDefined(mapElem['onMouseOver'])) {
                domElem.onmouseover = mapElem['onMouseOver'];
            }
            if (isDefined(mapElem['children'])) {
                if (isArray(mapElem['children'])) {
                    for (var i in mapElem['children']) {
                        domElem.appendChild(createDOM(mapElem['children'][i]));
                    }
                } else {
                    domElem.appendChild(createDOM(mapElem['children']));
                }
            }
            result.push(domElem);
        }
    } else {
        var mapElem = map;
        var domElem = ce(mapElem['tag']);
        if (isDefined(mapElem['otherProperties'])){
            for(var propKey in mapElem['otherProperties']){
                domElem.setAttribute(propKey, mapElem['otherProperties'][propKey]);
            }
        }
        if (isDefined(mapElem['id'])) {
            domElem.id = mapElem['id'];
        }
        if (isDefined(mapElem['className'])) {
            domElem.className = mapElem['className'];
        }
        if (isDefined(mapElem['src'])) {
            domElem.src = mapElem['src'];
        }
        if (isDefined(mapElem['html'])) {
            domElem.innerHTML = mapElem['html'];
        }
        if (isDefined(mapElem['value'])) {
            domElem.value = mapElem['value'];
        }
        if (isDefined(mapElem['selected'])) {
            domElem.selected = mapElem['selected'];
        }
        if (isDefined(mapElem['href'])) {
            domElem.href = mapElem['href'];
        }
        if (isDefined(mapElem['title'])) {
            domElem.title = mapElem['title'];
        }
        if (isDefined(mapElem['target'])) {
            domElem.target = mapElem['target'];
        }
        if (isDefined(mapElem['onClick'])) {
            domElem.onclick = mapElem['onClick'];
        }
        if (isDefined(mapElem['onMouseDown'])) {
            domElem.onmousedown = mapElem['onMouseDown'];
        }
        if (isDefined(mapElem['onMouseOver'])) {
            domElem.onmouseover = mapElem['onMouseOver'];
        }
        if (isDefined(mapElem['children'])) {
            if (isArray(mapElem['children'])) {
                for (var i in mapElem['children']) {
                    domElem.appendChild(createDOM(mapElem['children'][i]));
                }
            } else {
                domElem.appendChild(createDOM(mapElem['children']));
            }
        }
        result = domElem;
    }
    return result;
}


/**
 * by: James Coglan
 * @param obj object to count
 */
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
