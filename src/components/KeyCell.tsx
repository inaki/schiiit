import React from "react";

interface KeyCellProps {
    keyChar: string;
    description: string;
}

const KeyCell: React.FC<KeyCellProps> = ({ keyChar, description }) => {
    return (
        <div className={`flex justify-left ${keyChar.length > 10 ? "flex-col items-start" : " items-center"} w-full h-full my-2`}>
            <div className="text-primary text-base w-24 tracking-wide pl-4">
                {keyChar}
            </div>
            <div className="text-secondary text-sm text-left tracking-wide pl-4">
                {description}
            </div>
        </div>
    );
};

export default KeyCell;
