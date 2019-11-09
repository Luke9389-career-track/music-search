import { useState, useEffect } from 'react';
import { getSongsApi } from '../services/musicBrainzApi';

const useLyrics = (title, artist) => {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);
  console.log('getting lyrics');
  useEffect(() => {
    setLoading(true);
    getSongsApi(title, artist)
      .then((res) => {
        setLyrics(res.lyrics);
        setLoading(false);
      });
  }, []);

  return { lyrics, loading };
};

export default useLyrics;
