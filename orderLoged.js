/** 
 * What order do these numbers log out in?
 * 
 * hint** Be aware of the window event loop.
 * 
*/





function logNumbers() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers();
