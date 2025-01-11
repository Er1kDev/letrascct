export const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <p className="text-center md:text-3xl text-xl font-bold text-white 
                mb-10 transition-all hover:scale-105">
                Letras Alabanzas
            </p>
            <div className="relative w-full group">
                <input
                    type="text"
                    id="floating_search"
                    className="block w-full px-6 py-4 text-lg text-white
                    bg-white/10 backdrop-blur-sm
                    border-2 border-white/30
                    rounded-2xl appearance-none
                    transition-all duration-300
                    focus:outline-none 
                    focus:ring-4 focus:ring-blue-500/50
                    focus:border-blue-400
                    shadow-lg shadow-black/10
                    peer"
                    placeholder=" "
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <label
                    htmlFor="floating_search"
                    className="absolute text-white/90 text-lg
                    duration-200 transform 
                    -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                    px-2 peer-focus:px-2 
                    peer-focus:text-white
                    peer-focus:font-semibold
                    peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 
                    peer-focus:top-3 peer-focus:scale-75 
                    peer-focus:-translate-y-4 left-4
                    group-hover:text-white"
                >
                    Buscar Alabanza
                </label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2
                    text-white/50 peer-focus:text-blue-400
                    transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
