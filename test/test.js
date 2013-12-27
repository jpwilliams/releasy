// Generated by CoffeeScript 1.6.3
(function() {
  var expect, releasy, steps;

  expect = require('expect.js');

  releasy = require('../releasy.js');

  steps = require('../libs/steps.js');

  describe('exist', function() {
    it('should exist', function(done) {
      expect(releasy).to.be.ok();
      return done();
    });
    return it('should exist', function(done) {
      expect(steps).to.be.ok();
      return done();
    });
  });

  describe('setup', function() {
    return it('should be a function', function(done) {
      expect(steps.setup).to.be.a('function');
      return done();
    });
  });

  describe('run', function() {
    return it('should be a function', function(done) {
      expect(steps.run).to.be.a('function');
      return done();
    });
  });

  describe('bump', function() {
    return it('should be a function', function(done) {
      expect(steps.bump).to.be.a('function');
      return done();
    });
  });

  describe('add', function() {
    return it('should be a function', function(done) {
      expect(steps.add).to.be.a('function');
      return done();
    });
  });

  describe('commit', function() {
    return it('should be a function', function(done) {
      expect(steps.commit).to.be.a('function');
      return done();
    });
  });

  describe('tag', function() {
    return it('should be a function', function(done) {
      expect(steps.tag).to.be.a('function');
      return done();
    });
  });

  describe('push', function() {
    return it('should be a function', function(done) {
      expect(steps.push).to.be.a('function');
      return done();
    });
  });

  describe('publish', function() {
    return it('should be a function', function(done) {
      expect(steps.publish).to.be.a('function');
      return done();
    });
  });

}).call(this);

/*
//@ sourceMappingURL=test.map
*/
