import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';
import { Typeahead } from 'react-bootstrap-typeahead';
import { TiArrowUnsorted } from 'react-icons/ti';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Campaign } from "../../types";
import { statuses } from "../../constants";

interface OwnProps {
  campaigns: Campaign[];
}

const CampaignsList: React.FC<OwnProps> = ({ campaigns }) => {    

  const [multiSelections, setMultiSelections] = useState<any>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    setFilteredCampaigns(multiSelections.length === 0 ? campaigns : campaigns.filter(campaign => multiSelections.includes(campaign.status)));
  }, [campaigns, multiSelections]);

  return (
    <>      
      <div className={styles.content}>      
        <div className={styles.filterBar}>
          <span>Status filtern</span>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="status"
            multiple
            onChange={setMultiSelections}
            options={statuses}
            selected={multiSelections}
          />     
        </div>
        <div className={`${styles.row} ${styles.tableHeader}`}>
          <div>CS-ID <TiArrowUnsorted /></div>
          <div>Kunde <TiArrowUnsorted /></div>
          <div>Kampagnenname <TiArrowUnsorted /></div>
          <div>Start <TiArrowUnsorted /></div>
          <div>Ende <TiArrowUnsorted /></div>
          <div>Status <TiArrowUnsorted /></div>
        </div>
        {filteredCampaigns.map(campaign =>
          <div className={styles.row} key={campaign.id}>
            <div><a href="#">{campaign.id}</a></div>
            <div>{campaign.client}</div>
            <div>{campaign.name}</div>
            <div>{campaign.start}</div>
            <div>{campaign.end}</div>
            <div>{campaign.status}</div>
          </div>
        )}
      </div>       
    </>
  );
};

export default CampaignsList;
