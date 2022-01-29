import React, { useState } from "react";
import styles from './styles.module.scss';
import { Typeahead } from 'react-bootstrap-typeahead';
import { TiArrowUnsorted } from 'react-icons/ti';
import 'react-bootstrap-typeahead/css/Typeahead.css';

type Status = 'Created' | 'Booked' | 'Archived';

interface Campaign {
  id: string,
  client: string,
  name: string,
  start: string,
  end: string,
  status: string,
}

const statuses: Status[] = [
  'Created',
  'Booked',
  'Archived',
];

const campaigns: Campaign[] = [
  {
    id: '12',
    client: 'Kunde 1',
    name: 'Zähne',
    start: '15-10-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '8',
    client: 'Kunde 2',
    name: 'Wundheilung',
    start: '01-05-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '14',
    client: 'Kunde 1',
    name: 'Zähne',
    start: '15-10-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '3',
    client: 'Kunde 2',
    name: 'Wundheilung',
    start: '01-05-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '9',
    client: 'Kunde 1',
    name: 'Zähne',
    start: '15-10-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '4',
    client: 'Kunde 2',
    name: 'Wundheilung',
    start: '01-05-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '6',
    client: 'Kunde 1',
    name: 'Zähne',
    start: '15-10-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '15',
    client: 'Kunde 2',
    name: 'Wundheilung',
    start: '01-05-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '2',
    client: 'Kunde 1',
    name: 'Zähne',
    start: '15-10-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
  {
    id: '19',
    client: 'Kunde 2',
    name: 'Wundheilung',
    start: '01-05-2020',
    end: '31-12-2020',
    status: 'Angebot',
  },
];

const CampaignsList: React.FC = () => {  

  const [multiSelections, setMultiSelections] = useState<any>([]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Alle Kampagnen</div>
        <button className={styles.addButton}>KAMPAIGNE ERSTELLEN</button>
      </div>  
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
    </div>
  );
};

export default CampaignsList;
