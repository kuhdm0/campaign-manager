import { Campaign } from "../types";

export const getNextId = (campaigns: Campaign[]) => {
    const campaignsIds: number[] = campaigns.map(campaign => parseInt(campaign.id));
    const maxId = campaignsIds.length ? Math.max(...campaignsIds) : 0;
    return (maxId + 1).toString();
};
