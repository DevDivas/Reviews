import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Ratings from './ratings.jsx';

describe('Ratings', () => {

  const fakeData = [
    {
      name: 'Hyuk',
      comment: 'comment',
      accuracy: 3,
      communication: 4,
      cleanliness: 5,
      location: 2,
      check_in: 5,
      value: 4,
      average: 4,
    },
    {
      name: 'Allison',
      comment: 'comment',
      accuracy: 1,
      communication: 3,
      cleanliness: 2,
      location: 4,
      check_in: 5,
      value: 2,
      average: 3,
    },
    {
      name: 'Thaki',
      comment: 'comment',
      accuracy: 4,
      communication: 1,
      cleanliness: 5,
      location: 2,
      check_in: 4,
      value: 1,
      average: 3,
    },
    {
      name: 'Brian',
      comment: 'comment',
      accuracy: 5,
      communication: 5,
      cleanliness: 5,
      location: 1,
      check_in: 2,
      value: 4,
      average: 4,
    },
  ];
  const props = { data: fakeData };
  const wrap = shallow(<Ratings {...props} />);
  // wrap.setProps({ data: fakeData });
  // console.log(fakeData)

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should have 6 childrens of each rating', () => {
    expect(wrap.children().length).toEqual(7);
  });
  it('should have 3 as rating for accuracy', () => {
    expect(wrap.childAt(1).text()).toEqual('Accuracy3');
  });
  it('should have 3 as rating for communication', () => {
    expect(wrap.childAt(2).text()).toEqual('Communication3');
  });
  it('should have 4 as rating for cleanliness', () => {
    expect(wrap.childAt(3).text()).toEqual('Cleanliness4');
  });
  it('should have 2 as rating for location', () => {
    expect(wrap.childAt(4).text()).toEqual('Location2');
  });
  it('should have 4 as rating for check_in', () => {
    expect(wrap.childAt(5).text()).toEqual('Check-in4');
  });
  it('should have 3 as rating for value', () => {
    expect(wrap.childAt(6).text()).toEqual('Value3');
  });
});
