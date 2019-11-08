import React from 'react';
import Lyrics from '../lyrics/Lyrics';
import PropTypes from 'prop-types';
import useLyrics from '../custom-hooks/useLyrics';

export default function LyricPage({ match }) {

  const { lyrics, loading } = useLyrics(match.params.title, match.params.artist);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;
  return (
    <>
      <Lyrics title={match.params.title} lyrics={lyrics} artist={match.params.artist} />
    </>
  );
}
LyricPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  })
};



