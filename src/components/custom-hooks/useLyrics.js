import { useState, useEffect } from 'react';
import { getLyrics } from '../../services/lyricsApi';

const useLyrics = (title, artist) =>{
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  
  
  const fetchLyrics = () => {
    setLoading(true);
    getLyrics(title, artist)
      .then((res) => {
        setLyrics(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLyrics();
  }, []);

  return { lyrics, loading };
};

export default useLyrics;
