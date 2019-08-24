
import React from 'react';
import { shallow, mount } from 'enzyme';
import AppHeader  from './header';

describe('AppHeader', () => {
  const getComponent = (args) => {
    const props = Object.assign({
      username: null,
    }, args);
    return <AppHeader {...props}/>;
  }
  it('should render', () => {
    const component = getComponent();
    const wrapper = shallow(component);
    expect(wrapper.children.length).toBe(1);
  })
})