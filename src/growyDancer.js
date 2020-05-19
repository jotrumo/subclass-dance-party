//grow api https://api.jqueryui.com/scale-effect/

var gDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);//properties

 this.$node.addClass('gDancer');

}
gDancer.prototype = Object.create(makeDancer.prototype);//methods
gDancer.prototype.constructor = gDancer;

gDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);
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

