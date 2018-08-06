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
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                Accuracy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                Communication
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                Cleanliness
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                Check-in
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                Value
                </td>
                <td>
                  <div>
                    <div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    ).toBeTruthy();
  });
});
