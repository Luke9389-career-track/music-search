import React, { useState } from 'react';
import ArtistList from '../components/Artist/ArtistList';
import Form from '../components/Form/Form';
import usePages from '../hooks/usePages';
import useArtists from '../hooks/useArtists';


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, next, previous] = usePages(0);
  const [artists, loading, handleSubmit] = useArtists(page, searchQuery);


  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  if(loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery} />
      <ArtistList
        artists={artists}
        handlePageForward={next}
        handlePageBackward={previous} />
    </>

  );
};

export default SearchPage;

// }

// import React, { Component } from 'react';
// import ArtistList from '../components/Artist/ArtistList';
// import Form from '../components/Form/Form';
// import { callApi } from '../services/musicBrainzApi';

// export default class SearchPage extends Component {

//   state = {
//     searchQuery: '',
//     artists: [],
//     page: 0,
//     loading: false
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }

//   getArtists = () => {
//     this.setState({ loading: true });
//     return callApi(this.state.searchQuery, this.state.page)
//       .then(res => {
//         const artists = res.artists.map(artist => {
//           return {
//             disamb: artist.disambiguation,
//             name: artist.name,
//             id: artist.id
//           };
//         });
//         this.setState({ artists, loading: false });
//       });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.getArtists();
//     }
//   }


//   handleSubmit = event => {
//     event.preventDefault();
//     this.getArtists();
//   }

//   handlePageBackward = () => {
//     this.setState(state => {
//       if (state.page > 0) {
//         return ({ page: state.page - 1 });
//       }
//     });
//   }

//   handlePageForward = () => {
//     this.setState(state => ({ page: state.page + 1 }));
//   }

//   render() {
//     if (this.state.loading) return <img src='https://loading.io/spinners/music/lg.music-note-preloader.gif' />;

//     return (
//       <>
//         <Form
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           searchQuery={this.state.searchQuery} />
//         <ArtistList
//           artists={this.state.artists}
//           handlePageForward={this.handlePageForward}
//           handlePageBackward={this.handlePageBackward} />
//       </>

//     );

//   }

// }

