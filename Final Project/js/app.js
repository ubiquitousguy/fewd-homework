// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {

  console.log("If you see this message, jQuery is working.")

// <script type="text/javascript">
//
// var slideimages = new Array() // create new array to preload images
// slideimages[0] = new Image() // create new instance of image object
// slideimages[0].src = "images/about-page.jpg" // set image src property to image path, preloading image in the process
// slideimages[1] = new Image()
// slideimages[1].src = "images/poms2.jpeg"
// slideimages[2] = new Image()
// slideimages[2].src = "images/poms.jpg"
//
// </script>
//
// <script type="text/javascript">
//
// //variable that will increment through the images
// var step=0
//
// function slideit(){
//  //if browser does not support the image object, exit.
//  if (!document.images)
//   return
//  document.getElementById('slide').src = slideimages[step].src
//  if (step<2)
//   step++
//  else
//   step=0
//  //call function "slideit()" every 2.5 seconds
//  setTimeout("slideit()",2500)
// }
//
// slideit()
//
// </script>
//
// });
