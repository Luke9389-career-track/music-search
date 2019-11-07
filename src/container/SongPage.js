import React from 'react';
import SongList from '../components/ReleaseDetail/SongList';
import PropTypes from 'prop-types';
import useRecordings from '../hooks/useRecordings';

const SongPage = ({ match: { params: { id, artist } } }) => {

  const { songs, loading } = useRecordings(id);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

  return (
    <>
      <SongList songs={songs} artist={artist} />;
    </>
  );
};

SongPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      artist: PropTypes.string,
    })
  })
};

export default SongPage;
