var recipes = {};

function updateObjectWithKeyAndValue(obj1,key1,val1){
  var newObj = {};
  Object.assign(newObj,obj1,{[key1]:val1})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  delete object[key]
  return object
}