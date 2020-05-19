var sDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);//properties
  this.top = top;
  this.left = left;
}
sDancer.prototype = Object.create(makeDancer.prototype);//methods
sDancer.prototype.constructor = sDancer;

sDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);

  var shiftTop = this.top + 10;
  var shiftLeft = this.left + 10;
  var shiftTop2 = this.top - 10;
  var shiftLeft2 = this.left - 10;

  this.$node
  .animate({
    "top":`${shiftTop}`,
    "left":`${shiftLeft}`
  })
  .animate({
    "top":`${shiftTop2}`,
    "left":`${shiftLeft2}`
  })
  console.log(this.top);
};

//this.$node = $('<span class="dancer"></span>');