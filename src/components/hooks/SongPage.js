import React, { useState, useEffect } from 'react';
import SongList from '../ReleaseDetail/SongList';
import { getSongsApi } from '../../services/musicBrainzApi';
import PropTypes from 'prop-types';

export default function SongPage({ match }) {

  SongPage.propTypes = {
    // history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        artist: PropTypes.string,
      })
    })
  };

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSongs = () => {
    setLoading(true);
    getSongsApi(match.params.id)
      .then(({ recordings }) => {
        setSongs(recordings.map(recording => recording.title));
      });
    setLoading(false);
  };

  useEffect(() => {
    getSongs();
  }, []);


  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <SongList songs={songs} artist={match.params.artist} />;
    </>
  );

}
