// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  //create doc body variable
  var body = document.body;
  //create empty arr for results
  var arr = [];

  //function to resurse
  var innerFunc = function (element) {
    var children = element.children;

    //if element contains class name
    if (element.classList.contains(className)) {
      //push result to return arr
      arr.push(element);
    }

    // console.log(arr);
    if (children.length > 0) {
      children.forEach((item) => {
        console.log(item);
        innerFunc(item);
      });
    }
  };

  //call function on document body
  innerFunc(body);

  //return result
  return arr;
};
