import { useState, useEffect } from 'react';
import { getLyrics } from '../services/lyricsApi';

const useLyrics = (title, artist) => {

  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    getLyrics(title, artist)
      .then(fetchedLyrics => {
        setLyrics(fetchedLyrics);
        setLoading(false);
      });
  }, []);
  return { lyrics, loading };
  
};

export default useLyrics;
