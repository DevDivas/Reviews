import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import UserReviewsEntry from './user_reviews_entry.jsx';
import fakeData from '../../fakeData';

describe('UserReviewsEntry', () => {
  const props = { review: fakeData[0], keywords: '' };
  const wrap = shallow(<UserReviewsEntry {...props} />);

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should render name', () => {
    expect(
      wrap.containsMatchingElement(
        <div>
        Hyuk
        </div>,
      ),
    ).toBeTruthy();
  });
  it('should render date', () => {
    expect(
      wrap.containsMatchingElement(
        <div>
        Jul 1962
        </div>
      ),
    ).toBeTruthy();
  });
  it('should render comment', () => {
    expect(
      wrap.containsMatchingElement(
        <p>
        comment
        </p>,
      ),
    ).toBeTruthy();
  });
});
