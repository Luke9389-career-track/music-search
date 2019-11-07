import React, { useState, useEffect } from 'react';
import ArtistList from '../components/Artist/ArtistList';
import Form from '../components/Form/Form';
import { callApi } from '../services/musicBrainzApi';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

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

  const handleSubmit = event => {
    event.preventDefault();
    if(searchQuery === '') return;
    getArtists();
  };

  useEffect(() => {
    if(searchQuery === '') return;
    getArtists();
  }, [page]);
 
  const handlePageBackward = () => {
    if(page > 0) setPage(page - 1);
  };

  const handlePageForward = () => {
    setPage(page + 1);
  };


  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

  return (
    <>
      <Form
        handleChange={handleSearchQuery}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery} />
      <ArtistList
        artists={artists}
        handlePageForward={handlePageForward}
        handlePageBackward={handlePageBackward} />
    </>

  );
};

export default SearchPage;
