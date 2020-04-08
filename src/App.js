import React, { useEffect, useState } from 'react';
import ItemTable from './Components/ItemTable';
import getData from './Api/api';
import HeadTable from './Components/HeadTable';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      const { items } = result;
      setTransactions(items);
      console.log(result);
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <table className="table">
              <HeadTable />
              {transactions.map(item => <ItemTable key={item.id} {...item}/>)}
            </table>
          </div>
        </div>
        
      </section>
    </>
  )
} 

export default App;
