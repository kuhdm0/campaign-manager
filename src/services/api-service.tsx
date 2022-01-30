import { Campaign, CampaignFormData } from '../types';
import { getNextId } from '../utilities';

//localStorage.removeItem('campaigns');

export default class APIService {  
  getCampaigns() {
    return JSON.parse(localStorage.getItem('campaigns') || '[]');
  }

  addCampaign(formData: CampaignFormData) {
    const campaigns: Campaign[] = this.getCampaigns();
    const newCampaign = { ...formData, id: getNextId(campaigns) };console.log('newCampaign', newCampaign)
    campaigns.push(newCampaign);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    return campaigns;
  }
}
