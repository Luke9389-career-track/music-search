import { useEffect, useState } from 'react';
import { getRelease } from '../services/musicBrainzApi';


const useReleaseAndCoverArt = (page, id) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getRelease(id, page)
      .then((res) => {
        const releases = res.releases.map(release => {
          const coverArt = 'cover-art-archive';
          return {
            title: release.title,
            imageUrl: release[coverArt].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://www.thesadsongco.com/media/images/notfound.jpg',
            id: release.id
          };
        });
        setReleases(releases);
        setLoading(false);
      });
  }, [page]);

  return [releases, loading];
};

export default useReleaseAndCoverArt;
