import React from "react";

interface TitleProps {
    txt: string;
}

const Title: React.FC<TitleProps> = ({ txt }) => {
    return (
        <div className="flex-shrink-0 w-full h-full">
            <h1 className="text-color text-lg tracking-wide pl-4">{txt}</h1>
        </div>
    );
};

export default Title;
