//Object and functions
const createCircle = (radius) => {
  return {
    radius,
     draw: ()=>{
      console.log("draw circle"+" "+radius );
    },
  };
};

createCircle(1).draw();



//function and Objects with constructor parameters
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log("draw circle"+" "+radius );
  }
}

//displays a circle
new Circle(5).draw()
//Assign object to circle
const circle = new Circle(5);
circle.location = { x:1,y:2 };
circle['location'] = {x:10 , y:5};
//Iterate through circle
for (let key in circle){
  if(typeof(circle[key])!=='function'){
  console.log("circle::" + key + "::"+circle[key] + "::" + typeof(circle[key]));
  }
}

//get all the keys in Object
Object.keys(circle).forEach((key) => {console.log("key:"+key)})

//Abstraction of the function and properties

function square(len){
  this.len = len;

 //Abstraction of the function and properties
  let location = { x:3 , y:6 };

  let computeLocation = function(){
    console.log("compute location::" + location.x + ":" + location.y);
  }

  this.draw = function(){

    computeLocation();
    console.log("draw square"+" "+len);
  }
}

const sq = new square(1);
sq.draw();