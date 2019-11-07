import { useState, useEffect } from 'react';
import { getRecordings } from '../services/musicBrainzApi';

const useRecordings = (releaseId) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecordings(releaseId)
      .then(fetchedRecordings => {
        setSongs(fetchedRecordings);
        setLoading(false);
      });
  }, []);

  return { songs, loading };
};

export default useRecordings;
