import axios from 'axios';

export const getAllAggregates = async () => {
    try{
        const response = axios.get('https://api.lasocietenouvelle.org/metadata/aggregates');
        return response;
    }
    catch(error){
        console.error('Error fetching aggregates metadata:', error);
    }
}