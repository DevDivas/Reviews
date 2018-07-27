import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Ratings from './ratings.jsx';
import fakeData from '../../fakeData';

describe('Ratings', () => {

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
