import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import TotalNumberReviews from './total_number_reviews.jsx';

describe('TotalNumberReviews', () => {

  const wrap = shallow(<TotalNumberReviews />);
  wrap.setProps({ numberOfReviews: 235 });

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should render number of reviews', () => {
    expect(wrap.text()).toEqual('235 Reviews');
  });
})