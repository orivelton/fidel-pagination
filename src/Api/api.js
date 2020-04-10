import axios from 'axios';
import apiKey from './apiSecret/apiKey';

let nextTransactions;

const getData = async () => {
  const paramStart = nextTransactions ? `&start=${encodeURIComponent(JSON.stringify(nextTransactions))}` : '';
  const url = `https://api-dev.fidel.uk/v1d/programs/2314f371-39b1-4c80-8040-4144ff1bad09/transactions?limit=50${paramStart}`;
  const response = await axios.get(url, {headers: apiKey}).catch((error) => console.error(error));
  const { data } = response;
  const { last } = data;
  nextTransactions = last;

  return data;
}

export default getData;
