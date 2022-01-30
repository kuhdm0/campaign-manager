import { Campaign } from "../types";

export const getNextId = (campaigns: Campaign[]) => {console.log('campaigns', campaigns)
    const campaignsIds: number[] = campaigns.map(campaign => parseInt(campaign.id));console.log('campaignsIds', campaignsIds)
    const maxId = campaignsIds.length ? Math.max(...campaignsIds) : 0;console.log('maxId', maxId)
    return (maxId + 1).toString();
};
