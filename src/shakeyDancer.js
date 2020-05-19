var sDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);//properties
  this.top = top;
  this.left = left;

  this.$node.addClass('sDancer');
}

sDancer.prototype = Object.create(makeDancer.prototype);//methods

sDancer.prototype.constructor = sDancer;

sDancer.prototype.step = function(){

  makeDancer.prototype.step.call(this);

  let shiftTop = this.top + 10;
  let shiftLeft = this.left + 10;
  let shiftTop2 = this.top - 10;
  let shiftLeft2 = this.left - 10;

  this.$node
  .animate({
    "top":`${shiftTop}`,
    "left":`${shiftLeft}`
  })
  .animate({
    "top":`${shiftTop2}`,
    "left":`${shiftLeft2}`
  })
  // console.log(this.top);
};



