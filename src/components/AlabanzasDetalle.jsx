import React from 'react'
import { Link, useParams } from 'react-router-dom'
import alabanzas from "../data/alabanzas";


export const AlabanzasDetalle = () => {

    const { id } = useParams();
    const alabanza = alabanzas.find((a) => a.id === parseInt(id));

    if (!alabanza) return <p>Alabanza no encontrada.</p>

    return (
        <div className="flex items-center justify-center  ">
            <div className="max-w-md mx-auto ">
                <h2 className="text-3xl font-bold py-6 text-center">{alabanza.titulo}</h2>
                <div className="space-y-6">
                    {alabanza.letra.map((estrofa, index) => (
                        <p key={index} className="text-xl leading-relaxed text-center">
                            {estrofa.split('\n').map((linea, i) => (
                                <span key={i}>
                                    {linea}
                                    <br />
                                </span>
                            ))}
                        </p>
                    ))}
                </div>
                <div className='text-center py-10'>
                    <Link to="/">
                        <p className='inline-block bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition'>
                            Volver
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}




