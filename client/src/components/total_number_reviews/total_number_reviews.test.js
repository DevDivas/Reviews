import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import TotalNumberReviews from './total_number_reviews.jsx';

describe('TotalNumberReviews', () => {
  // const numberOfReviews = 235;
  const wrap = shallow(<TotalNumberReviews />);

  wrap.setProps({ numberOfReviews: 235 });

  it('should exist', () => {
    expect(wrap.exists()).toBeTruthy();
  })
})