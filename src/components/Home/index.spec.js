import React from 'react';
import { mount, shallow } from 'enzyme';
import HomePage from './index';
import { LightContext } from '../App';

describe('<HomePage />', () => {
  it('should match SnapShot', () => {
    const container = shallow(
      <LightContext.Provider value={{
        status: false,
        toggleFn: () => {}
      }}>
        <HomePage />
      </LightContext.Provider>
      );
    expect(container).toMatchSnapshot();
  });

  it('should handle onChange event', () => {
    const addItem = jest.fn();

    const container = mount(
      <LightContext.Provider value={{
        status: false,
        toggleFn: () => addItem()
      }}>
        <HomePage />
      </LightContext.Provider>
    );

    container.find('input').simulate('change');
    expect(addItem).toHaveBeenCalled();
  });


});
