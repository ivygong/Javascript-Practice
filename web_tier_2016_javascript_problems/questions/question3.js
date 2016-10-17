/** ================================================================================
 *  Return an object with keys as the elements of the array `arr` and index
 *  as the values
 *
 *  {param} arr - Array
 *
 *  Example:
 *  if `arr = ['dog', 'cat'];` then
 *  questions3(arr); // returns {dog: 0, cat: 1}
 *  ================================================================================ */
 var question3 = function(arr) {

  var dictionary ={
  };

for(var i=0;i<arr.length;i++){
  dictionary[arr[i]]=i
}
return dictionary;

}


/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
var exampleArr = ['dog', 'cat'];
module.exports = question3;

