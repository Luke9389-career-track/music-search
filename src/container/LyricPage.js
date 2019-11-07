import React, { useState, useEffect } from 'react';
import Lyrics from '../components/lyrics/Lyrics';
import { getLyrics } from '../services/lyricsApi';
import PropTypes from 'prop-types';

const LyricPage = ({ match }) => {

  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchLyrics = () => {
    setLoading(true); 
    getLyrics(match.params.title, match.params.artist)
      .then((res) => {
        setLyrics(res.lyrics);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLyrics();
  }, []);


  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;
  return (
    <>
      <Lyrics title={match.params.title} lyrics={lyrics} artist={match.params.artist} />
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
