// obj question
function manipulateStudentRecord(obj, operation, prop, newValue) {
  if(operation === 'delete') {
    if(obj && obj.hasOwnProperty(prop)){
      delete obj[prop]
    }
    return obj
    
  } else if(operation === 'edit') {
    if(obj && obj.hasOwnProperty(prop)){
      obj[prop] = newValue
      return obj;
    } else {
     return obj
    }
  }
}

const obj = {
  name: 'John',
  lastName: 'Bliss',
  city: 'Florida'
}




// smallest starting number such that the running sum never dips below 1
// input is an array of integers. ()



