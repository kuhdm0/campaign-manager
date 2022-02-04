import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Campaign } from "../../types";
import { statuses } from "../../constants";

interface OwnProps {
  campaigns: Campaign[];
  setFilteredCampaigns: (campaigns: Campaign[]) => void;
}

const CampaignsList: React.FC<OwnProps> = ({ campaigns, setFilteredCampaigns }) => {    

  const [multiSelections, setMultiSelections] = useState<any>([]);

  useEffect(() => {
    setFilteredCampaigns(multiSelections.length === 0 ? campaigns : campaigns.filter(campaign => multiSelections.includes(campaign.status)));
  }, [campaigns, multiSelections, setFilteredCampaigns]);

  return (
    <>         
      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Status filtern</span>
        <Typeahead
          id="basic-typeahead-multiple"
          labelKey="status"
          multiple
          onChange={setMultiSelections}
          options={statuses}
          selected={multiSelections}
          clearButton
        />
        <div className={styles.selectionsNumber}>{multiSelections.length}</div>
        <TiArrowSortedDown className={styles.arrowDown} />
      </div>      
    </>
  );
};

export default CampaignsList;
