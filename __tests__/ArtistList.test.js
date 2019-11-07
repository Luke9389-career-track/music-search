import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from '../src/components/Artist/ArtistList';

describe('ArtistList component', () => {
  it('renders ArtistList', () => {
    const wrapper = shallow(<ArtistList artists={[{ id: '1', name: 'Luke' }]} handlePageBackward={() => { }} handlePageForward={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
