import React, { useState, useEffect } from 'react';
import ArtistList from '../Artist/ArtistList';
import Form from '../Form/Form';
import { fetchArtists } from '../../services/musicBrainzApi';

export default function SearchPage() {

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(0);

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const getArtists = () => {
    setLoading(true);
    return fetchArtists(searchQuery, page)
      .then(res => {
        setArtists(res);
        setLoading(false);
      });
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

  const handlePageBackward = () => {
    if(page > 0) {
      setPage(page - 1);
    }
  };

  const handlePageForward = () => {
    setPage(page + 1);
  };

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery} />
      <ArtistList
        artists={artists}
        handlePageForward={handlePageForward}
        handlePageBackward={handlePageBackward} />
    </>
  );
}
