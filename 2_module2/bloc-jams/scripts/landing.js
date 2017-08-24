 var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function(points) {

     var revealPoint = function(i) {
        console.log("revealPoint is geting called", points[i])
         points[i].style.opacity = 1;
         points[i].style.transform = "scaleX(1) translateY(0)";
         points[i].style.msTransform = "scaleX(1) translateY(0)";
         points[i].style.WebkitTransform = "scaleX(1) translateY(0)";

     }

     var actions =[]

     for (var i = 0; i < points.length; i++) {
        // actions[i] = function(index) {
        //     revealPoint(index);
        // }
        
        // setTimeout(function(){ 
        //     // revealPoint(i); 
        //     console.log(i);
        // }, 3000);
        revealPoint(i);
     }

     // forEach(points, revealPoint)
 
 };

window.onload = function() { // window.onload is an event handler
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener('scroll', function(event) {
         // console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
     // addEventListener has type, listener, useCapture --> what is useCapture?
 }