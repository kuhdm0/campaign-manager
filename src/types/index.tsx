export interface CampaignFormData {
    client: string,
    name: string,
    start: string,
    end: string,
    status: string,
}

export interface Campaign {
    id: string,
    client: string,
    name: string,
    start: string,
    end: string,
    status: string,
}

export type Status = 'Created' | 'Booked' | 'Archived';
