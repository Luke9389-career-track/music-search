import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

export default function ReleaseList({ releases }) {

  const releaseElements = releases.map(release => (
    <li key={release.id}>
      <Release title={release.title} imageUrl={release.imageUrl} />
    </li>
  ));

  return (
    <ul>
      {releaseElements}
    </ul>
  );
}
ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired
};
