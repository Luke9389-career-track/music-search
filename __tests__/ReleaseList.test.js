import React from 'react';
import { shallow } from 'enzyme';
import ReleaseList from '../src/components/Release/ReleaseList';

describe('ReleaseList component', () => {
  it('renders ReleaseList', () => {
    const releases = [{
      title: 'Phil',
      id: '1',
      imageUrl: 'testUrl.com'
    }];
    const wrapper = shallow(<ReleaseList releases={releases} artist='' />);
    expect(wrapper).toMatchSnapshot();
  });
});
