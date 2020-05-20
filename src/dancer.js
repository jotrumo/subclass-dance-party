// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, image) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this._timer = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timer);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};




