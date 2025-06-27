import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import React, { useState } from 'react';

const MultipleSelect = ({ options, onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (value) => {
        const newSelection = selectedOptions.includes(value)
            ? selectedOptions.filter(option => option !== value)
            : [...selectedOptions, value];

        setSelectedOptions(newSelection);
        onChange(newSelection);
    };

    return (
        <Select open>
            <SelectTrigger>
                {selectedOptions.length ? selectedOptions.join(', ') : 'Select options'}
            </SelectTrigger>
            <SelectContent>
                {options.map(option => (
                    <SelectItem key={option} value={option} onClick={(e) => {
                        e.stopPropagation(); // Prevent the dropdown from closing
                        handleSelect(option);
                    }}>
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            readOnly
                        />
                        {option}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default MultipleSelect;
