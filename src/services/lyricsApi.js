export const getLyrics = (title, artist) => {

  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

  return fetch(url)
    .then(res => res.json())
    
    .catch(error => {
      console.log(error);
    });
};
