import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import ClosingPopup from './closing_popup';
import fakeData from '../../fakeData';

describe('ClosingPopup', () => {

  const props = { data: fakeData };
  const wrap = shallow(<ClosingPopup {...props} />);

  it('should exists', () => {
    expect(wrap.exists()).toBeTruthy();
  });
  it('should exists', () => {
    expect(
      wrap.containsMatchingElement(
        <div>
          <div>
            <button />
            <h2>
            Thank You
            </h2>
            <div>
            These reports help make Airbnb better for everyone, so we take them seriously. We’ll reach out if we have questions about your report.
            </div>
          </div>
        </div>
      )
    ).toBeTruthy();
  });
});