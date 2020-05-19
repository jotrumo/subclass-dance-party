// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>'); //property

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };

  this.timer = timeBetweenSteps;//stores the value because the value dissapears after every timeout

  //dancer.step();//property
  console.log(this)
  this.step();

  // this.originalStep = this.step;


  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


  // dancer.setPosition(top, left);
  this.setPosition(top, left);

};

makeDancer.prototype.step = function(){
  //console.log(timeBetweenSteps)
  setTimeout(this.step.bind(this), this.timer);
  console.log(this.step.bind(this));
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


// let newDancer = new makeDancer(10, 20, 2000);
// console.log(newDancer.__proto__);