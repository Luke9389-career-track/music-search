import React, { useEffect, useState } from 'react';
import Lyrics from '../components/lyrics/Lyrics';
import { getLyrics } from '../services/lyricsApi';
import PropTypes from 'prop-types';

const LyricPage = ({ match }) => {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchLyrics = () => {
    setLoading(true);
    getLyrics(match.params.title, match.params.artist)
      .then((res) => {
        setLyrics(res.lyrics);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLyrics();
  }, []);

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;
  return (
    <>
      <Lyrics title={match.params.title} lyrics={lyrics} artist={match.params.artist} />
    </>
  );

};

LyricPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string,
    })
  })
};

export default LyricPage;

// import React, { Component } from 'react';
// import Lyrics from '../components/lyrics/Lyrics';
// import { getLyrics } from '../services/lyricsApi';
// import PropTypes from 'prop-types';

// export default class LyricPage extends Component {

//   static propTypes = {
//     history: PropTypes.object.isRequired,
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         title: PropTypes.string,
//         artist: PropTypes.string,
//       })
//     })
//   }

//   state = {
//     lyrics: '',
//     loading: true
//   }

//   fetchLyrics = () => {
//     this.setState({ loading: true });
//     getLyrics(this.props.match.params.title, this.props.match.params.artist)
//       .then((res) => {
//         this.setState({ lyrics: res.lyrics, loading: false });
//       });
//   }

//   componentDidMount() {
//     this.fetchLyrics();
//   }

//   render() {
//     if (this.state.loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;
//     return (
//       <>
//         <Lyrics title={this.props.match.params.title} lyrics={this.state.lyrics} artist={this.props.match.params.artist} />
//       </>
//     );

//   }

// }

