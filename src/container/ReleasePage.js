import React from 'react';
import ReleaseList from '../components/Release/ReleaseList';
import PropTypes from 'prop-types';
import usePaging from '../hooks/usePaging';
import useReleases from '../hooks/useReleases';

const ReleasePage = ({ match: { params: { id, artist } } }) => {

  const { page, handlePageBackward, handlePageForward } = usePaging();
  const { releases, loading } = useReleases(id, page);


  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

  return (
    <>
      <h1>Artist Releases</h1>
      <button onClick={handlePageBackward}>Previous</button>
      <button onClick={handlePageForward}>Next</button>
      <ReleaseList releases={releases} artist={artist} />
    </>
  );

};

ReleasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      artist: PropTypes.string
    })
  })
};

export default ReleasePage;
