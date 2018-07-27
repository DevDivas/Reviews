import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import UserReviews from './user_reviews.jsx';
import fakeData from '../../fakeData';

describe('UserReviews', () => {
  const props = { data: fakeData };
  const wrap = shallow(<UserReviews {...props} />);

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should render user reviews', () => {
    expect(wrap.children().length).toBeGreaterThan(1);
  });
});
