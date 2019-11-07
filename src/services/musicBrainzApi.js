

export const callApi = (searchQuery, page = 0) => {

  const url = `http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json&limit=25&offset=${page * 25}`;

  return fetch(url)
    .then(res => res.json())
    
    .catch(error => {
      console.log(error);
    });
};

export const getRelease = (artistId, page = 0) => {

  const url = `http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${page * 25}`;

  return fetch(url)
    .then(res => res.json())
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
