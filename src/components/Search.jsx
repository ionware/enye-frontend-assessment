/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onSearch }) {
  return (
    <div className='container flex flex-wrap flex-column py-2 px-2 md:py-5 md:px-6 bg-gray-50 text-sm'>
      {/** search bar */}
      <div className='w-full'>
        <input
          type='text'
          onChange={(e) => onSearch(e.target.value)}
          placeholder='Search for patient by thier names'
          className='w-full px-4 py-2 text-gray-600 rounded border border-gray-200 hover:border-blue-400 focus:border-blue-400 outline-none'
        />
      </div>
      {/** filters and action button */}
      <div className='w-full flex items-center mt-2'>
        <div>
          <button
            type='button'
            className='px-3 py-1 text-white bg-blue-400 rounded hover:bg-blue-600'>
            Apply Filters
          </button>
        </div>
        <div className='ml-3'>Filters</div>
      </div>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
