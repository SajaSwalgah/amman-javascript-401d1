'use strict';

require('@code-fellows/supergoose');

const Food = require('../models/food-model.js');
const food = new Food();

describe('Food Model', () => {
  it('can create() a new food item', () => {
    let obj = { name: 'test food 1', calories: 999, type: 'FRUIT' };
    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        })
      });
  });

  it('can get() a food item', () => {
    let obj = { name: 'test food 2', calories: 555, type: 'VEGETABLE'};
    
    return food.create(obj)
      .then(record => {
        return food.get(record._id)
          .then(foodItem => {
            Object.keys(obj).forEach(key => {
              expect(foodItem[key]).toEqual(obj[key]);
            })
          })
      })
  })
});