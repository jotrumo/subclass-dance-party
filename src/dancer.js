// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, image) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>'); //property

  this.timer = timeBetweenSteps;//stores the value because the value dissapears after every timeout


  this.step();


  this.setPosition(top, left);

};

makeDancer.prototype.step = function(){
  //console.log(timeBetweenSteps)
  setTimeout(this.step.bind(this), this.timer);
  // console.log(this.step.bind(this));
};

makeDancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left){
  makeDancer.prototype.setPosition.call(this, top, left);

}


// let newDancer = new makeDancer(10, 20, 2000);
// console.log(newDancer.__proto__);