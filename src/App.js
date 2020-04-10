import React, { useEffect, useState } from 'react';
import ItemList from './Components/ItemList';
import getData from './Api/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from './Components/Modal';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [nextTransactions, setNextTransactions] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      const { items } = result;
      setTransactions(transactions => [...transactions, ...items]);
    }

    fetchData();
  }, [nextTransactions]);
  
  const handleModal = (item) => {
    setOpenModal(!openModal);
    !openModal && setCurrentItem(item);
  };
  
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Transactions
            </h1>
            <ul>
              {
                transactions && <InfiniteScroll
                  dataLength={transactions.length}
                  endMessage={<p>Yay! You have seen it all</p>}
                  loader={<progress className="progress is-small is-primary" max="100">50%</progress>}
                  hasMore
                  next={() => setNextTransactions(next => ++next)}
                >
                  {transactions.map(item => <ItemList key={item.id} currentItem={item} handleModal={handleModal} />)}
                </InfiniteScroll>
              }
            </ul>
            {currentItem && <Modal openModal={openModal} handleModal={handleModal} currentItem={currentItem}/>}
          </div>
        </div>
        
      </section>
    </>
  )
} 

export default App;
