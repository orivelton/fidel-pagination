import axios from 'axios';
import apiKey from './apiSecret/apiKey';
import idTransactions from './apiSecret/transactions';

const { id } = idTransactions;

const getData = async () => {
  const response = await axios.get(`https://api-dev.fidel.uk/v1d/programs/${id}/transactions?limit=10`, {
    headers: apiKey
  }).catch((error) => {
    console.error('>>>>', error);
  });

  const { data } = response;
  
  return await data;
}

export default getData;
