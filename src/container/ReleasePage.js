import React, { Component } from 'react';
import ReleaseList from '../components/Release/ReleaseList';
import { getRelease } from '../services/musicBrainzApi';
import PropTypes from 'prop-types';

export default class ReleasePage extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        artist: PropTypes.string
      })
    })
  }

  state = {
    releases: [],
    page: 0,
    loading: true
  }

  getReleaseAndCoverArt = () => {
    this.setState({ loading: true });
    getRelease(this.props.match.params.id, this.state.page)
      .then((res) => {
        const releases = res.releases.map(release => {
          const coverArt = 'cover-art-archive';
          return {
            title: release.title,
            imageUrl: release[coverArt].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://www.thesadsongco.com/media/images/notfound.jpg',
            id: release.id
          };
        });
        this.setState({ releases, loading: false });
      });
  }

  componentDidMount() {
    this.getReleaseAndCoverArt();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.getReleaseAndCoverArt();
    }
  }

  handlePageBackward = () => {
    this.setState(state => {
      if(state.page > 0) {
        return ({ page: state.page - 1 });
      }
    });
  }

  handlePageForward = () => {
    this.setState(state => {
      return ({ page: state.page + 1 });
    });
  }

  render() {
    if(this.state.loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif'/>;

    return (
      <>
        <h1>Artist Releases</h1>
        <button onClick={this.handlePageBackward}>Previous</button>
        <button onClick={this.handlePageForward}>Next</button>
        <ReleaseList releases={this.state.releases} artist={this.props.match.params.artist} />
      </>
    );

  }

}
