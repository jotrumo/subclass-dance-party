describe('shakeyDancer', function() {

  var shakeyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakeyDancer = new sDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shakeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node shake', function() {
    sinon.spy(shakeyDancer.$node, 'animate');
    shakeyDancer.step();
    expect(shakeyDancer.$node.animate.called).to.be.true;
  });

  it('should call step at least once per second', function() {
    sinon.spy(shakeyDancer, 'step');
    //console.log(blinkyDancer, blinkyDancer.step.callCount)
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    clock.tick(timeBetweenSteps);


    expect(shakeyDancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(shakeyDancer.step.callCount).to.be.equal(2);
  });
});
