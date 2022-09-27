// Write your solution in this file!
const employee = {
    "name": "Alice",
    "streetAddress": "12 Broadway",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
  
    return { ...object, ...{[key]: value}};
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {

    object[key] = value; 
    return object;
}

function deleteFromEmployeeByKey(object, key, value) {
    return { ...object, ...{[key]: value}};
    delete object[key];
    
}

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
   
    delete object[key];
    return object;
}