import React, { useState, useEffect } from 'react';
import Lyrics from '../components/lyrics/Lyrics';
import { getLyrics } from '../services/lyricsApi';
import PropTypes from 'prop-types';

const LyricPage = ({ match: { params: { title, artist } } }) => {

  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchLyrics = () => {
    setLoading(true); 
    getLyrics(title, artist)
      .then((res) => {
        if(res.lyrics) setLyrics(res.lyrics);
        else setLyrics('No Lyrics Found');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLyrics();
  }, []);


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
