import React from 'react';
import { shallow } from 'enzyme';
import Form from '../src/components/Form/Form';

describe('Form component', () => {
  it('renders Form', () => {
    const handleSubmit = jest.fn();
    const handleChange = jest.fn();
    const searchQuery = 'string';
    const wrapper = shallow(<Form 
      handleChange={handleChange} 
      handleSubmit={handleSubmit}
      searchQuery={searchQuery} />);
    expect(wrapper).toMatchSnapshot();
  });
});
