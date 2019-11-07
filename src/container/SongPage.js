import React, { Component } from 'react';
import SongList from '../components/ReleaseDetail/SongList';
import { getSongsApi } from '../services/musicBrainzApi';
import PropTypes from 'prop-types';

export default class SongPage extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        artist: PropTypes.string,
      })
    })
  }

  state = {
    songs: [],
    loading: true
  }

  getSongs = () => {
    this.setState({ loading: true });
    getSongsApi(this.props.match.params.id)
      .then(({ recordings }) => {
        this.setState({ loading: false, songs: recordings.map(recording => {
          return recording.title;
        })
        });
      });
  }

  componentDidMount() {
    this.getSongs();
  }
  render() {

    if(this.state.loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

    return (
      <>
      <SongList songs={this.state.songs} artist={this.props.match.params.artist} />;
      </>
    );
  }
}
