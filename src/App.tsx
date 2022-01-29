import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import CampaignsList from './components/CampaignsList';
import NewCampaignModal from './components/NewCampaignModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="external-wrapper">
        <div className="content-wrapper">
          <div className="header">
          <div className="title">Alle Kampagnen</div>
          <button className="add-button" onClick={toggleModal}>KAMPAIGNE ERSTELLEN</button>
        </div>  
          <CampaignsList />
        </div>
      </div>
      <NewCampaignModal isModalOpen={isModalOpen} closeModal={toggleModal} />
    </>  
  );
}

export default App;
