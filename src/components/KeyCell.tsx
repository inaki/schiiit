import React from 'react';

interface KeyCellProps {
    keyChar: string;
    description: string;
}

const KeyCell: React.FC<KeyCellProps> = ({ keyChar, description }) => {
    return (
        <div className="flex-shrink-0 w-full h-full">
            <h1 className="text-white text-4xl md:text-6xl lg:text-4xl tracking-wide pl-4">
                {keyChar}
            </h1>
            <h1 className="text-white text-4xl md:text-6xl lg:text-4xl tracking-wide pl-4">
                {description}
            </h1>
        </div>
    );
};

export default KeyCell;

