import React, { useState } from "react";
import styles from './styles.module.scss';
import { Typeahead } from 'react-bootstrap-typeahead';
import { TiArrowUnsorted } from 'react-icons/ti';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Campaign, Status } from "../../types";

const statuses: Status[] = [
  'Created',
  'Booked',
  'Archived',
];

interface OwnProps {
  campaigns: Campaign[];
}

const CampaignsList: React.FC<OwnProps> = ({ campaigns }) => {    

  const [multiSelections, setMultiSelections] = useState<any>([]);

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
      </div>       
    </>
  );
};

export default CampaignsList;
