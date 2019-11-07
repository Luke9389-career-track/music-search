import { useState, useEffect } from 'react';
import { getReleases } from '../services/musicBrainzApi';

const useReleases = (id, page) => {

  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReleases(id, page)
      .then(fetchedReleases => {
        setReleases(fetchedReleases);
        setLoading(false);
      });
  }, [page]);

  return { releases, loading };
};

export default useReleases;
