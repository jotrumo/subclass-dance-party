//grow api https://api.jqueryui.com/scale-effect/

var GrowyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('gDancer');
};

GrowyDancer.prototype = Object.create(Dancer.prototype);

GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //individual dancer properties
  this.$node
  .animate({
    width: '100px',
    height: '100px'
  })
  .animate({
    width: '50px',
    height: '50px'
  });
};

