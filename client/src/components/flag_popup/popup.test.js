import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import Popup from './popup';
import fakeData from '../../fakeData';

describe('Popup', () => {

  const props = { data: fakeData };
  const wrap = shallow(<Popup />).setState({ selected: '', submit: false });

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should exists', () => {
    expect(
      wrap.containsMatchingElement(
          <h2>
          Do you want to anonymously report this review?
          </h2>
      )
    ).toBeTruthy();
  });
});