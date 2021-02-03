/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Patient from './components/Patient';
import SkeletonLoader from './components/SkeletonLoader';

export default function App() {
  const [store, setStore] = useState(null);
  const [patients, setPatients] = useState([]);
  const [count, setCount] = useState(20);
  const [size, setSize] = useState(0);
  const [search, setSearch] = useState('');

  // Initiate record fetch when component mounted.
  useEffect(() => {
    // Ensure store is not filled twice
    if (store) return () => {};

    // fake-load with timeout.
    const id = setTimeout(() => {
      axios
        .get('https://api.enye.tech/v1/challenge/records')
        .then(({ data }) => {
          setSize(data.size);
          setStore(data.records.profiles);
        })
        .catch(() => {
          alert('An error occured while fetching data. Please reload page.');
        });
    }, 6000);

    return () => clearTimeout(id);
  }, []);

  // Update patient record any time the store changes.
  useEffect(() => {
    if (store) setPatients(store.slice(0, count - 1));
  }, [store]);

  // Search for a patient by name (when the search term updates)
  useEffect(() => {
    if (!(store && store.length)) return () => {};
    if (!search) {
      setPatients(store.slice(0, count - 1));
      return () => {};
    }

    const regex = new RegExp(`^${search}`, 'i');
    setPatients(
      store
        .slice(0, count - 1)
        .filter((p) => regex.test(p.FirstName) || regex.test(p.LastName))
    );

    return () => {};
  }, [search]);

  // Load more elements from store.
  useEffect(() => {
    if (!store) return () => {};
    setPatients(store.slice(0, count - 1));

    return () => {};
  }, [count]);

  return (
    <div className='container'>
      <div className='lg:mt-10'>
        <Search onSearch={setSearch} />
      </div>
      <div className='mt-4'>
        {patients && patients.length ? (
          patients.map((p) => (
            <Patient
              key={p.MacAddress}
              name={`${p.FirstName} ${p.LastName}`}
              phone={p.PhoneNumber}
              username={p.UserName}
              url={p.URL}
              gender={p.Gender}
              email={p.Email}
              lat={p.Latitude}
              lng={p.Longitude}
              cardNumber={p.CreditCardNumber}
              cardType={p.CreditCardType}
              macAddress={p.MacAddress}
            />
          ))
        ) : (
          <div>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        )}
      </div>
      {!search && store && store.length && count < size ? (
        <div className='my-4 flex justify-center'>
          <button
            type='button'
            onClick={() => setCount(count + 10)}
            className='px-4 py-1 -ml-2 rounded-3xl outline-none border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'>
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}
