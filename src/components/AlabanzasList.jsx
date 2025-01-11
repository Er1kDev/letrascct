import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AlabanzasList = ({ alabanzas }) => {
    const navigate = useNavigate();
    const [visibleCount, setVisibleCount] = useState(10);

    const handleSelectAlabanza = (id) => {
        navigate(`/alabanza/${id}`);
    }

    const handleMore = () => {
        setVisibleCount(prevCount => prevCount + 10);
    }

    return (
        <div className="container mx-auto px-4">
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {
                    alabanzas.slice(0, visibleCount).map((alabanza) => (
                        <li key={alabanza.id}
                            className='transform transition-all duration-300 hover:scale-105'
                        >
                            <a
                                onClick={() => handleSelectAlabanza(alabanza.id)}
                                href="#"
                                className='block p-4 bg-gradient-to-r from-blue-700 to-blue-500 
                             rounded-lg shadow-lg text-white text-xl
                             hover:from-blue-600 hover:to-blue-400
                             transition-all duration-300 ease-in-out
                             transform hover:-translate-y-1
                             border border-transparent hover:border-blue-300
                             text-center'
                            >
                                {alabanza.titulo}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='pt-12 text-center'>
                {visibleCount < alabanzas.length && (
                    <button
                        onClick={handleMore}
                        className='px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-500 
                     text-white rounded-full text-lg font-semibold
                     transform transition-all duration-300 ease-in-out
                     hover:from-blue-600 hover:to-blue-400
                     hover:scale-105 hover:shadow-xl
                     active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
                    >
                        Cargar más
                    </button>
                )}
                {visibleCount >= alabanzas.length && (
                    <p className='text-white text-lg font-semibold'>
                        No hay más alabanzas para cargar.
                    </p>
                )}

            </div>
        </div>
    )
}
