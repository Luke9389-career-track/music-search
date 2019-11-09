import React from 'react';
import SongList from '../components/ReleaseDetail/SongList';
import PropTypes from 'prop-types';
import useSongs from '../hooks/useSongs';

const SongPage = ({ match }) => {
  const [songs, loading] = useSongs(match.params.id);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <SongList songs={songs} artist={match.params.artist} />;
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
