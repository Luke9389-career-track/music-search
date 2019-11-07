import { useState, useEffect } from 'react';
import { getArtists } from '../services/musicBrainzApi';

const useArtists = (page) => {

  
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchArtists = () => {
    getArtists(searchQuery, page)
      .then(res => {
        const fetchedArtists = res.artists.map(artist => {
          return {
            disamb: artist.disambiguation,
            name: artist.name,
            id: artist.id
          };
        });
        setArtists(fetchedArtists);
        setLoading(false);
      });
  };

  useEffect(() => {
    if(searchQuery === '') return;
    setLoading(true);
    fetchArtists();
  }, [page]);


  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(searchQuery === '') return;
    fetchArtists();
  };
  

  return { artists, loading, searchQuery, handleSearchQuery, handleSubmit };
};


export default useArtists;
