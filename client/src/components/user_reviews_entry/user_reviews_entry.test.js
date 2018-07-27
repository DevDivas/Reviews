import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import UserReviewsEntry from './user_reviews_entry.jsx';
import fakeData from '../../fakeData';

describe('UserReviewsEntry', () => {
  const props = { review: fakeData[0] };
  const wrap = shallow(<UserReviewsEntry {...props} />);
  console.log(wrap.props())

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should render name, picture, date', () => {
    expect(wrap.props().children.includes('pic', 'Hyuk', 'Sat Jul 07 1962 01:30:17 GMT-')).toBeTruthy();
  });
  it('should render comment', () => {
    expect(
      wrap.containsMatchingElement(
        <div>comment</div>
      )
    ).toBeTruthy();
      });
});
