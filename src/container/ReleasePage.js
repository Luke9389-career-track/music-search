import React, { useState, useEffect } from 'react';
import ReleaseList from '../components/Release/ReleaseList';
import { getRelease } from '../services/musicBrainzApi';
import PropTypes from 'prop-types';

const ReleasePage = ({ match: { params: { id, artist } } }) => {

  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const getReleaseAndCoverArt = () => {
    setLoading(true);
    getRelease(id, page)
      .then((res) => {
        const releases = res.releases.map(release => {
          const coverArt = 'cover-art-archive';
          return {
            title: release.title,
            imageUrl: release[coverArt].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://www.thesadsongco.com/media/images/notfound.jpg',
            id: release.id
          };
        });
        setReleases(releases);
        setLoading(false);
      });
  };

  useEffect(() => {
    getReleaseAndCoverArt();
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
      <h1>Artist Releases</h1>
      <button onClick={handlePageBackward}>Previous</button>
      <button onClick={handlePageForward}>Next</button>
      <ReleaseList releases={releases} artist={artist} />
    </>
  );

};

ReleasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      artist: PropTypes.string
    })
  })
};

export default ReleasePage;
