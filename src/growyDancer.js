//grow api https://api.jqueryui.com/scale-effect/

var gDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);//properties


}
gDancer.prototype = Object.create(makeDancer.prototype);//methods
gDancer.prototype.constructor = gDancer;

gDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);

  this.$node.css({"width":"50px","height":"50px"});

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