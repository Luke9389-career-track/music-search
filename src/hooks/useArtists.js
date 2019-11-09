import { useState, useEffect } from 'react';
import { callApi } from '../services/musicBrainzApi';


const useArtists = (page, searchQuery) => {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState([]);

  const getArtists = () => {
    setLoading(true);
    return callApi(searchQuery, page)
      .then(res => {
        const artists = res.artists.map(artist => {
          return {
            disamb: artist.disambiguation,
            name: artist.name,
            id: artist.id
          };
        });
        setArtists(artists);
        setLoading(false);
      });
  };

  useEffect(() => {
    if(searchQuery === '') return;
    getArtists();
  }, [page]);

  const handleSubmit = event => {
    event.preventDefault();
    getArtists();
  };

  return [artists, loading, handleSubmit];

};

export default useArtists;

