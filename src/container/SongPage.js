import React, { useEffect, useState } from 'react';
import SongList from '../components/ReleaseDetail/SongList';
import { getSongsApi } from '../services/musicBrainzApi';
import PropTypes from 'prop-types';

const SongPage = ({ match: { params: { id, artist } } }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSongs = () => {
    setLoading(true);
    getSongsApi(id)
      .then(({ recordings }) => {
        setSongs(recordings.map(recording => recording.title));
        setLoading(false);
      });
  };

  useEffect(() => {
    getSongs();
  }, []);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

  return (
    <>
      <SongList songs={songs} artist={artist} />;
    </>
  );
};

SongPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      artist: PropTypes.string,
    })
  })
};

export default SongPage;
