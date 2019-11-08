/* eslint-disable no-console */


export const fetchArtists = (searchQuery, page) => {

  const url = `http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${page * 25}`;

  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res.artists.map(artist => {
        return {
          disamb: artist.disambiguation,
          name: artist.name,
          id: artist.id
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRelease = (artistId, page) => {

  const url = `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${page * 25}`;

  return fetch(url)
    .then(res => res.json()) 
    .then(({ releases }) => {
      return releases.map(release => {
        const coverArt = 'cover-art-archive';
        return {
          title: release.title,
          imageUrl: release[coverArt].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://www.thesadsongco.com/media/images/notfound.jpg',
          id: release.id
        };
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSongsApi = (releaseId) => {

  const url = `http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
};
