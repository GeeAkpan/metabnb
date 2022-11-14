import React from 'react';
import { Footer, Header, Discover, Nav, NftCollections, Showcase} from './components';
import './App.css'
import './index.css';


const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Showcase />
      <NftCollections />
      <Discover />
      <Footer />
    </div>
  )
}

export default App;