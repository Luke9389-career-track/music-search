import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ handleSubmit, handleChange, searchQuery }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchQuery" value={searchQuery} onChange={handleChange} placeholder="Search Artists"></input>
      <button>Submit</button>
    </form>
  );
}
SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};
