function processCollection(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const newCollection = processCollection(collection)
    for (let i=0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }
    return collection;
}   

function myMap(collection, callback) {
    const newCollection = processCollection(collection)
    let newArray = []
    for (let i=0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = processCollection(collection)

    if (!(Number(acc))) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const newCollection = processCollection(collection)
    let trueCollection = []
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) trueCollection.push(newCollection[i]);
    }
    return trueCollection;
}

function mySize(collection) {
    const newCollection = processCollection(collection)
    return newCollection.length;
}

function myFirst(array, n) {
    if (n != null) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

function myLast(array, n) {
    if (n != null) {
        const index = -1 * n
        return array.slice(index)
    } else {
        return array[array.length -1]
    }
}

function mySortBy(array, callback) {
    const copiedArray = [...array]
    let sortedArray = copiedArray.sort( (param1, param2) => {
        if (callback(param1) > callback(param2)) {
            return 1;
        } else if (callback(param2) > callback(param1)) {
            return -1;
        } else {
            return 0;
        }
    });
}

function myFlatten(array, shallow, newArr=[]) {
    const addElement = function(input, obj) {
        for (let element of obj) {
            input.push(element);
        }
    }

    if (shallow) {
        for (let element of collection) {
            Array.isArray(element) ? addElement(newArr, element) : newArr.push(element);
        }
    } else {
        for (let element of collection) {
            if (Array.isArray(element)) {
                myFlatten(element, false, newArr);
            }
        }
    }
    return newArr;
}

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        keys.push(key);
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (let key in object) {
        values.push(object[key])
    }
    return values;
}