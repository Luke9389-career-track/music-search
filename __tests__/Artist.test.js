import React from 'react';
import { shallow } from 'enzyme';
import Artist from '../src/components/Artist/Artist';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist name='John' id='2' disamb='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
