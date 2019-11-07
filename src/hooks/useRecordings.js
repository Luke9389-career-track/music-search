import { useState, useEffect } from 'react';
import { getRecordings } from '../services/musicBrainzApi';

const useRecordings = (releaseId) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecordings(releaseId)
      .then(({ recordings }) => {
        setSongs(recordings.map(recording => recording.title));
        setLoading(false);
      });
  }, []);

  return { songs, loading };
};

export default useRecordings;
