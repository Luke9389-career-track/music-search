import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../src/components/hooks/SearchPage';

jest.mock('../src/services/musicBrainzApi.js', () => ({
  fetchArtists() {
    return Promise.resolve([
      { 
        disamb: 'test',
        name: 'Test', 
        id: '5' 
      }
    ]);
  }
}));

describe('SearchPage', () => {
  it.only('updates state with an array of artists', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();

  });
});
