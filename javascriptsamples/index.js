const createCircle = (radius,x,y) => {
  return {
    radius,
    location :{
        x: x,
        y: y
    },
      draw: ()=>{
      console.log("draw circle"+" "+radius +" "+this.location.x);
    },
  };
};

createCircle(1,2,3).draw();