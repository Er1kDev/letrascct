import React from 'react'

export const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div>
            <p className="text-center text-3xl pb-10">Listado de alabanzas</p>
            <input
                type="text"
                className='block w-96 px-3 py-1.5 text-base text-gray-700 
                bg-white bg-clip-padding border border-solid border-gray-300 
                rounded-full transition ease-in-out m-0 focus:text-gray-700
                focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Buscar Alabanza...'
                value={searchTerm} onChange={(e) => onSearchChange(e.target.value)}
            />

        </div>


    )
}
