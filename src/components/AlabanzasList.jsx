import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AlabanzasList = ({ alabanzas }) => {
    const navigate = useNavigate();

    const handleSelectAlabanza = (id) => {
        navigate(`/alabanza/${id}`);
    }

    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center '>
            {
                alabanzas.map((alabanza) => (
                    <li key={alabanza.id} className=''>
                        <a className='rounded py-2 px-3  text-white transition hover:text-blue-300 text-xl' onClick={() => handleSelectAlabanza(alabanza.id)} href="">{alabanza.titulo}</a>
                    </li>
                ))
            }
        </ul>
    )
}
