var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);//properties
  this.top = top;
  this.left = left;
  this.$node.addClass('sDancer');
};

ShakyDancer.prototype = Object.create(Dancer.prototype);//methods

ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

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
};



