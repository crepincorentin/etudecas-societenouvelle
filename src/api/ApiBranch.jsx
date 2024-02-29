import axios from 'axios';

export const getAllBranch = async () => {
    try{
        const response = axios.get('https://api.lasocietenouvelle.org/metadata/branches');
        return response;
    }
    catch(error){
        console.error('Error fetching branches metadata:', error);
    }
}