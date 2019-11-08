import { useState, useEffect } from 'react';
import { fetchArtists } from '../../services/musicBrainzApi';


const useArtists = (page) => {
  
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);

  const getArtists = () => {
    setLoading(true);
    return fetchArtists(searchQuery, page)
      .then(res => {
        setArtists(res);
        setLoading(false);
      });
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  useEffect(() => {
    if(searchQuery === '') return;
    setLoading(true);
    getArtists();
  }, [page]);


  const handleSubmit = event => {
    event.preventDefault();
    if(searchQuery === '') return;
    getArtists();
  };

  return { artists, loading, searchQuery, handleChange, handleSubmit };

};

export default useArtists;
