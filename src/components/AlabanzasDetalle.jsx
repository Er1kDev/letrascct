import React from 'react'
import { Link, useParams } from 'react-router-dom'
import alabanzas from "../data/alabanzas";


export const AlabanzasDetalle = () => {

    const { id } = useParams();
    const alabanza = alabanzas.find((a) => a.id === parseInt(id));

    if (!alabanza) return <p>Alabanza no encontrada.</p>

    return (
        <div className="flex items-center justify-center p-4">
            <div className="max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
                <h2 className="text-4xl font-bold pt-8 text-center text-white drop-shadow-lg">
                    {alabanza.titulo}
                </h2>

                <div className="space-y-8 p-8">
                    {alabanza.letra.map((estrofa, index) => (
                        <div key={index}
                            className="text-xl text-center text-white/90 
                                      hover:text-white transition-colors duration-300
                                      leading-relaxed tracking-wide">
                            <pre className="whitespace-pre-line font-sans">
                                {estrofa}
                            </pre>
                        </div>
                    ))}
                </div>

                <div className="text-center py-10">
                    <Link to="/">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500
                                        text-white rounded-full font-semibold
                                        transform transition-all duration-300 ease-in-out
                                        hover:from-blue-500 hover:to-blue-400
                                        hover:scale-105 hover:shadow-xl
                                        active:scale-95">
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}




