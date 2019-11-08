import React from 'react';
import ArtistList from '../Artist/ArtistList';
import Form from '../Form/Form';
import useArtists from '../custom-hooks/useArtists';
import usePaging from '../custom-hooks/usePaging';

export default function SearchPage() {

  const { page, handlePageBackward, handlePageForward } = usePaging();
  const { artists, loading, searchQuery, handleChange, handleSubmit } = useArtists(page);
  
  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery} />
      <ArtistList
        handlePageBackward={handlePageBackward}
        handlePageForward={handlePageForward}
        artists={artists}
      />
    </>
  );
}
