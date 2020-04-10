import axios from 'axios';
import apiKey from './apiSecret/apiKey';

const getData = async last => {
  const paramStart = last ? `&start=${encodeURIComponent(JSON.stringify(last))}` : '';
  const url = `https://api-dev.fidel.uk/v1d/programs/2314f371-39b1-4c80-8040-4144ff1bad09/transactions?limit=50${paramStart}`;
  
  const response = await axios.get(url, {headers: apiKey}).catch((error) => console.error(error));
  const { data } = response; 
  return data;
}

export default getData;
