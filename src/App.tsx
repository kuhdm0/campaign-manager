import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import CampaignsList from './components/CampaignsList';

function App() {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <CampaignsList />
      </div>  
    </>  
  );
}

export default App;
