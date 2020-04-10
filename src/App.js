import React, { useEffect, useState } from 'react';
import ItemTable from './Components/ItemTable';
import getData from './Api/api';
import HeadTable from './Components/HeadTable';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [nextTransactions, setNextTransactions] = useState('');
  const [lastTransactions, setLastTransactions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(lastTransactions);
      const { items, last} = result;
      
      setTransactions([...transactions, ...items])
      setLastTransactions(last);
    }

    fetchData();
  }, [nextTransactions]);

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <ul className="table">
              {console.log(typeof transactions)}
              {transactions && <InfiniteScroll
                dataLength={transactions}
                endMessage={
                  <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                hasMore={true}
                next={() => setNextTransactions(lastTransactions)}
              >
                {transactions.map(item => <li key={item.id}>{item.currency}</li>)}
              </InfiniteScroll>
              }
              
            </ul>
          </div>
        </div>
        
      </section>
    </>
  )
} 

export default App;
