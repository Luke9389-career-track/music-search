import React from 'react';
import ArtistList from '../components/Artist/ArtistList';
import Form from '../components/Form/Form';
import usePaging from '../hooks/usePaging';
import useArtists from '../hooks/useArtists';

const SearchPage = () => {

  const { page, handlePageBackward, handlePageForward } = usePaging();
  const { artists, loading, searchQuery, handleSearchQuery, handleSubmit } = useArtists(page);


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
