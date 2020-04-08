import React, { useEffect } from 'react';
import getData from '../Api/api';

const List = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      console.log(result);
    }

    fetchData();
  }, [])
  return (
    <ul>
      <li>- 1</li>
    </ul>
  )
};

export default List;
