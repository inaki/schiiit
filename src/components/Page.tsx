import React from "react";

interface PageProps {
    pageNumber: number;
    children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ pageNumber, children }) => {
    return (
        <div className="flex-shrink-0 w-full h-full">
            <h1 className="flex w-full justify-between text-white text-4xl md:text-6xl lg:text-4xl tracking-wide pl-4">
                { children }
            </h1>
        </div>
    );
};

export default Page;
