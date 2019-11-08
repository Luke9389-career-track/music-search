import React from 'react';
import { shallow } from 'enzyme';
import Release from '../src/components/Release/Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release title='Phil' imageUrl='testUrl.com' id='id' artist='artist' />);
    expect(wrapper).toMatchSnapshot();
  });
});
