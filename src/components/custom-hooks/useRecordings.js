import { useState, useEffect } from 'react';
import { getSongsApi } from '../../services/musicBrainzApi';

const useRecordings = (id)=> {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSongs = () => {
    setLoading(true);
    getSongsApi(id)
      .then(({ recordings }) => {
        setSongs(recordings.map(recording => recording.title));
      });
    setLoading(false);
  };

  useEffect(() => {
    getSongs();
  }, []);

  return { loading, songs };
  
};
export default useRecordings;
