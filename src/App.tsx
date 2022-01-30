import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import CampaignsList from './components/CampaignsList';
import NewCampaignModal from './components/NewCampaignModal';
import { Campaign } from './types';
import APIService from './services/api-service';

const apiService = new APIService();

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  useEffect(() => {
    const campaigns = apiService.getCampaigns();
    setCampaigns(campaigns);
  }, []);

  return (
    <>
      <Navbar />
      <div className="external-wrapper">
        <div className="content-wrapper">
          <div className="header">
          <div className="title">Alle Kampagnen</div>
          <button className="add-button" onClick={toggleModal}>KAMPAIGNE ERSTELLEN</button>
        </div>  
          <CampaignsList campaigns={campaigns} />
        </div>
      </div>
      <NewCampaignModal isModalOpen={isModalOpen} closeModal={toggleModal} setCampaigns={setCampaigns} />
    </>  
  );
}

export default App;
