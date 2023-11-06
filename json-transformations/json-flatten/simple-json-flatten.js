function flattenJson(obj, parent = '', res = {}) {
    for (let key in obj) {
        let propName = parent + key;
        if (typeof obj[key] === 'object') {
            flattenJson(obj[key], propName + '_', res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}

// Sample Usage
let data = {
    "Name": "John",
    "Location": { "City": "Los Angeles", "State": "CA" },
    "Numbers": [1, 2, 3]
};

let flatData = flattenJson(data);
console.log(flatData);
