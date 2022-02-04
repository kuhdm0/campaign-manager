import { Campaign, CampaignFormData } from '../types';
import { getNextId } from '../utilities';

export default class APIService {  
  getCampaigns() {
    return JSON.parse(localStorage.getItem('campaigns') || '[]');
  }

  addCampaign(formData: CampaignFormData) {
    const campaigns: Campaign[] = this.getCampaigns();
    const newCampaign = { ...formData, id: getNextId(campaigns) };
    campaigns.push(newCampaign);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    return campaigns;
  }
}
