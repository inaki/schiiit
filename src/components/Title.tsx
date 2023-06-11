import React from 'react';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="flex-shrink-0 w-full h-full">
            <h1 className="text-white text-4xl md:text-6xl lg:text-4xl tracking-wide pl-4">
                {title}
            </h1>
        </div>
    );
};

export default Title;
