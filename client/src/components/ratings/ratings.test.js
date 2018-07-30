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
  // it('should have 6 childrens of each rating', () => {
  //   expect(wrap.children().length).toEqual(7);
  // });
  it('should have accuracy rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Accuracy
        </td>,
      ),
    ).toBeTruthy();
  });
  it('should render communication rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Communication
        </td>,
      ),
    ).toBeTruthy();
  });
  it('should render cleanliness rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Cleanliness
        </td>,
      ),
    ).toBeTruthy();
  });
  it('should render location rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Location
        </td>,
      ),
    ).toBeTruthy();
  });
  it('should render check_in rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Check-in
        </td>,
      ),
    ).toBeTruthy();
  });
  it('should render value rating', () => {
    expect(
      wrap.containsMatchingElement(
        <td>
        Value
        </td>,
      ),
    ).toBeTruthy();
  });
});
