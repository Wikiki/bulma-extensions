'use strict';

const {
  bulmaAccordion,
  bulmaCalendar,
  bulmaCarousel,
  bulmaIconpicker,
  bulmaQuickview,
  bulmaSlider,
  bulmaSteps,
  bulmaTagsinput
} = require('../src/js/index').default;

describe('bulmaExtensions', () => {
  test('Should return an array of bulmaAccordion instances', () => {
    var instances = bulmaAccordion.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaAccordion));
  });
  test('Should return an array of bulmaCalendar instances', () => {
    var instances = bulmaCalendar.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaCalendar));
  });
  test('Should return an array of bulmaCarousel instances', () => {
    var instances = bulmaCarousel.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaCarousel));
  });
  test('Should return an array of bulmaIconpicker instances', () => {
    var instances = bulmaIconpicker.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaIconpicker));
  });
  test('Should return an array of bulmaQuickview instances', () => {
    var instances = bulmaQuickview.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaQuickview));
  });
  test('Should return an array of bulmaSlider instances', () => {
    var instances = bulmaSlider.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaSlider));
  });
  test('Should return an array of bulmaSteps instances', () => {
    var instances = bulmaSteps.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaSteps));
  });
  test('Should return an array of bulmaTagsinput instances', () => {
    var instances = bulmaTagsinput.attach();
    instances.every(i => expect(i).toBeInstanceOf(bulmaTagsinput));
  });
});
