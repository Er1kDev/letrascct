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
        <div>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center '>
                {
                    alabanzas.slice(0, visibleCount).map((alabanza) => (
                        <li key={alabanza.id} className=''>
                            <a className='rounded py-2 px-3 text-white transition hover:text-blue-300 text-xl' onClick={() => handleSelectAlabanza(alabanza.id)} href="">{alabanza.titulo}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='pt-10 text-center'>
                {visibleCount < alabanzas.length && (
                    <button onClick={handleMore} className='px-4 py-2 bg-blue-800 text-white rounded'>Cargar más</button>
                )}
            </div>
        </div>
    )
}
