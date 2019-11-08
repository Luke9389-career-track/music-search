import React, { useEffect, useState } from 'react';
import SongList from '../components/ReleaseDetail/SongList';
import { getSongsApi } from '../services/musicBrainzApi';
import PropTypes from 'prop-types';

const SongPage = ({ match }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    if(!mount) {
      setMount(false);
      return;
    }
    getSongs();
  }, []);

  const getSongs = () => {
    setLoading(true);
    getSongsApi(match.params.id)
      .then(({ recordings }) => {
        const songs = recordings.map(recording => {
          return recording.title;
        });
        setSongs(songs);
        setLoading(false);
      });
  };

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <SongList songs={songs} artist={match.params.artist} />;
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
