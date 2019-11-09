import { getSongsApi } from '../services/musicBrainzApi';
import { useEffect, useState } from 'react';

const useSongs = (id) => {
  const [mount, setMount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(!mount) {
      setMount(false);
      return;
    }
    setLoading(true);
    getSongsApi(id)
      .then(({ recordings }) => {
        const songs = recordings.map(recording => {
          return recording.title;
        });
        setSongs(songs);
        setLoading(false);
      });
  }, []);

  return [songs, loading];
};

export default useSongs;
