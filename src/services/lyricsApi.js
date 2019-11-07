/* eslint-disable no-console */
export const getLyrics = (title, artist) => {

  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ lyrics }) => {
      if(lyrics) return lyrics;
      else return 'No Lyrics Found';
    })
    .catch(error => {
      console.log(error);
    });
};
