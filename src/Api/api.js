import axios from 'axios';
import apiKey from './apiSecret/apiKey';
import idTransactions from './apiSecret/transactions';

const { id } = idTransactions;

const getData = async (last) => {
  const param = last ? `&start=${encodeURIComponent(JSON.stringify(last))}` : ''; 
  const response = await axios.get(`https://api-dev.fidel.uk/v1d/programs/${id}/transactions?limit=50${param}`, {
    headers: apiKey
  }).catch((error) => console.error(error));

  const { data } = response;
  
  return data;
}

export default getData;
