function updateObjectWithKeyAndValue(object, key, value) {

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectWithKey(object, key) {
  delete object[key]
  return object
}
