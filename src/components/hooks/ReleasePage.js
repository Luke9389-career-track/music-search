import React from 'react';
import ReleaseList from '../Release/ReleaseList';
import PropTypes from 'prop-types';
import usePaging from '../custom-hooks/usePaging';
import useReleases from '../custom-hooks/useReleases';

export default function ReleasePage({ match }) {

  const { handlePageBackward, handlePageForward, page } = usePaging();
  const { loading, releases } = useReleases(match.params.id, page);
  
  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <h1>Artist Releases</h1>
      <button onClick={handlePageBackward}>Previous</button>
      <button onClick={handlePageForward}>Next</button>
      <ReleaseList releases={releases} artist={match.params.artist} />
    </>
  );
}

ReleasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  })
};

