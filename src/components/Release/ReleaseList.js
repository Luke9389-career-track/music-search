import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import styles from './ReleaseList.css';

export default function ReleaseList({ releases, artist }) {

  const releaseElements = releases.map(release => (
    <li key={release.id}>
      <Release artist={artist} title={release.title} id={release.id} imageUrl={release.imageUrl}/>
    </li>
  ));

  return (
    <ul className={styles.ReleaseList}>
      {releaseElements}
    </ul>
  );
}
ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired,
  artist: PropTypes.string.isRequired,

};
