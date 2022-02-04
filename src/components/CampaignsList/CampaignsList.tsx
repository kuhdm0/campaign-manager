import React from "react";
import styles from './styles.module.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { TiArrowUnsorted } from 'react-icons/ti';
import { Campaign } from "../../types";

interface OwnProps {
  campaigns: Campaign[];
}

const CampaignsList: React.FC<OwnProps> = ({ campaigns }) => (
  <>
    <div className={`${styles.row} ${styles.tableHeader}`}>
      <div>CS-ID <TiArrowUnsorted /></div>
      <div>Kunde <TiArrowUnsorted /></div>
      <div>Kampagnenname <TiArrowUnsorted /></div>
      <div>Start <TiArrowUnsorted /></div>
      <div>Ende <TiArrowUnsorted /></div>
      <div>Status <TiArrowUnsorted /></div>
    </div>
    {campaigns.map(campaign =>
      <div className={styles.row} key={campaign.id}>
        <div><a href="#">{campaign.id}</a></div>
        <div>{campaign.client}</div>
        <div>{campaign.name}</div>
        <div>{campaign.start}</div>
        <div>{campaign.end}</div>
        <div>{campaign.status}</div>
      </div>
    )}      
  </>
);

export default CampaignsList;
