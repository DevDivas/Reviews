import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import AvgRating from './avg_rating';
import fakeData from '../../fakeData';

describe('AvgRating', () => {

  const props = { data: fakeData };
  const wrap = shallow(<AvgRating {...props} />);

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should render average rating of product', () => {
    expect(wrap.text()).toEqual('4');
  });
});