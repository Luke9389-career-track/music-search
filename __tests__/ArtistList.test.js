import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from '../src/components/Artist/ArtistList';

describe('ArtistList component', () => {
  it('renders ArtistList', () => {
    const wrapper = shallow(<ArtistList 
      handlePageForward={()=>{}} 
      handlePageBackward={()=>{}} 
      artists={[{ id: '1', name: 'Luke' }]} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
