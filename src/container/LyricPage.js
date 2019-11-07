import React from 'react';
import Lyrics from '../components/lyrics/Lyrics';
import useLyrics from '../hooks/useLyrics';
import PropTypes from 'prop-types';

const LyricPage = ({ match: { params: { title, artist } } }) => {

  const { lyrics, loading } = useLyrics(title, artist);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;
  return (
    <>
      <Lyrics title={title} lyrics={lyrics} artist={artist} />
    </>
  );

};

LyricPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string,
    }).isRequired
  }).isRequired
};

export default LyricPage;
