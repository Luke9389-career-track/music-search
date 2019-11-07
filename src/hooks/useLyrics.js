import { useState, useEffect } from 'react';
import { getLyrics } from '../services/lyricsApi';

const useLyrics = (title, artist) => {

  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    getLyrics(title, artist)
      .then((res) => {
        if(res.lyrics) setLyrics(res.lyrics);
        else setLyrics('No Lyrics Found');
        setLoading(false);
      });
  }, []);
  return { lyrics, loading };
  
};

export default useLyrics;
