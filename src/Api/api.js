import axios from 'axios';
import apiKey from './apiSecret/apiKey';
import idTransactions from './apiSecret/transactions';

const { id } = idTransactions;

const getData = async () => {
  const data = await axios.get(`https://api-dev.fidel.uk/v1d/programs/${id}/transactions`, {
    headers: apiKey
  });
  
  return await data;
}

export default getData;
