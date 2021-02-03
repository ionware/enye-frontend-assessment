/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap';

export default function Patient({
  name,
  username,
  url,
  phone,
  gender,
  email,
  cardNumber,
  cardType,
  macAddress,
  lng,
  lat,
}) {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => setShowMap(!showMap);

  return (
    <div className='text-xs md:text-sm px-6 md:px-12 py-4 md:py-8 bg-gray-50 mb-2 md:mb-4'>
      <div className='flex w-full items-center border-b border-dashed pb-3 border-gray-200'>
        <img
          src={`/images/${gender === 'Male' ? 'man' : 'woman'}.svg`}
          className='w-10 h-10 mr-3'
          alt='Anthony James'
        />
        <div className='flex flex-column flex-wrap'>
          <span className='font-bold block w-full text-gray-700'>{name}</span>
          <div className='text-gray-500'>
            <span className='mr-2 text-gray-400'>@{username}</span>
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='text-xs text-blue-300 hover:text-blue-500 hover:underline'>
              {url}
            </a>
          </div>
        </div>
      </div>
      {/** all other information */}
      <div className='my-2 md:my-4 w-full md:w-5/6 text-gray-600'>
        <div className='flex flex-wrap justify-between w-full mb-2'>
          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Phone</h5>
            <span>{phone}</span>
          </div>
          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Gender</h5>
            <span>{gender}</span>
          </div>
          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Email</h5>
            <span>{email}</span>
          </div>

          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Card Number</h5>
            <span>{cardNumber}</span>
          </div>
          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Card Type</h5>
            <span>{cardType}</span>
          </div>
          <div className='w-1/2 md:w-1/3 pb-2'>
            <h5 className='font-bold text-gray-700'>Mac Address</h5>
            <span>{macAddress}</span>
          </div>
        </div>

        <div>
          <button
            type='button'
            onClick={toggleMap}
            className='px-4 py-1 -ml-2 rounded-3xl outline-none border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'>
            {showMap ? 'Close Location' : 'View Location'}
          </button>
        </div>
      </div>

      {showMap ? (
        <div className='mt-3 -ml-3'>
          <GoogleMap lat={lat} lng={lng} />
        </div>
      ) : null}
    </div>
  );
}

Patient.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  macAddress: PropTypes.string.isRequired,
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  cardType: PropTypes.string,
  gender: PropTypes.string,
};

Patient.defaultProps = {
  cardType: 'Diners Club',
  gender: 'Male',
};
