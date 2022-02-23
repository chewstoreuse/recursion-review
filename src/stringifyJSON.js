// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  // input = num, null, boolean, obj
  // output = string
  // edge case = empty obj, function, falsy values

  var output = '';
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      return '[]';
    }

    output += '[';

    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]) + ',';
    }

    output = output.slice(0, -1);
    output += ']';
  }
  if (typeof obj === 'object' && !Array.isArray(obj)) {

    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    output += '{';

    for (var key in obj) {
      console.log(typeof obj[key]);
      if (obj[key] !== undefined && key !== undefined && typeof obj[key] !== 'function') {
        output += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (output.length < 2) {
      output += '}';
    } else {
      output = output.slice(0, -1);
      output += '}';
    }
  }
  return output;
};