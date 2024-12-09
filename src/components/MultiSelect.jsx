import { useEffect, useRef, useState } from "react";

const CustomMultiSelect = ({ options, value =[], onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    console.log("options", options);


    const filteredOptions = options.filter((option) =>
        option?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleOption = (optionValue) => {
        const newValue = value.includes(optionValue)
            ? value.filter(v => v !== optionValue)
            : [...value, optionValue];
        onChange(newValue);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="bg-white border border-gray-300 rounded-md p-2 flex flex-wrap items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value.length > 0 ? (
                    value.map(v => (
                        <span key={v} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {options.find(opt => opt._id === v)?.name}
                            <button
                                className="ml-1 text-blue-600 hover:text-blue-800"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleOption(v);
                                }}
                            >
                                &times;
                            </button>
                        </span>
                    ))
                ) : (
                    <span className="text-gray-400">{placeholder}</span>
                )}
            </div>
            {isOpen && (
                <div className="absolute w-full mt-1 bg-white max-h-[200px] overflow-y-auto border border-gray-300 rounded-md shadow-lg">
                    <input
                        type="text"
                        className="w-full p-2 border-b border-gray-300"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <ul className="max-h-60 overflow-auto">
                        {filteredOptions.map(option => (
                            <li
                                key={option?._id}
                                className={`p-2 hover:bg-gray-100 cursor-pointer ${value.includes(option.value) ? 'bg-blue-50' : ''
                                    }`}
                                onClick={() => toggleOption(option._id)}
                            >
                                <input
                                    type="checkbox"
                                    checked={value.includes(option._id)}
                                    onChange={() => { }}
                                    className="mr-2"
                                />
                                {option.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomMultiSelect;