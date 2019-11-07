import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../src/container/SearchPage';

jest.mock('../src/services/musicBrainzApi.js', () => ({
  callApi() {
    return Promise.resolve({ artists: [
      { name: 'Test', id: '5', disambiguation: 'test' }
    ] });
  }
}));

describe('SearchPage', () => {
  it.only('updates state with an array of artists', () => {
    const wrapper = shallow(<SearchPage />);
    return wrapper.instance().getArtists()
      .then(() => {
        expect(wrapper.state('artists')).toEqual([
          { name: 'Test', id: '5', disamb: 'test' }
        ]);
      });
  });
});
