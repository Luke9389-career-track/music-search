import React from 'react';
import SongList from '../ReleaseDetail/SongList';
import PropTypes from 'prop-types';
import useRecordings from '../custom-hooks/useRecordings';

export default function SongPage({ match }) {
  
  const { loading, songs } = useRecordings(match.params.id);
  
  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;
  
  return (
    <>
      <SongList songs={songs} artist={match.params.artist} />;
    </>
  );
  
}

SongPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      artist: PropTypes.string,
    })
  })
};
