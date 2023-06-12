import React from "react";

interface KeyCellProps {
    keyChar: string;
    description: string;
}

const KeyCell: React.FC<KeyCellProps> = ({ keyChar, description }) => {
    return (
        <div className="flex justify-left items-center w-full h-full my-2">
            <div className="text-white text-base w-10 tracking-wide pl-4">
                {keyChar}
            </div>
            <div className="text-white text-sm text-left tracking-wide pl-4">
                {description}
            </div>
        </div>
    );
};

export default KeyCell;
