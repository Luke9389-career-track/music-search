import React, { useState, useEffect } from 'react';
import Lyrics from '../lyrics/Lyrics';
import { getLyrics } from '../../services/lyricsApi';
import PropTypes from 'prop-types';

export default function LyricPage({ match }) {

  LyricPage.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
      })
    })
  };


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

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;
  return (
    <>
      <Lyrics title={match.params.title} lyrics={lyrics} artist={match.params.artist} />
    </>
  );



}
