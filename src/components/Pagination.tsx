import React from "react";

interface PaginationProps {
    currentPage: number;
    numberOfPages: number;
    handlePageChange: (pageNumber: number) => void;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Pagination: React.FC<PaginationProps> = ({
    currentPage = 0,
    numberOfPages = 1,
    handlePageChange,
}) => {
    return (
        <div className="absolute bottom-0 w-full flex justify-center items-center space-x-2">
            {Array.from({ length: numberOfPages }, (_, i) => (
                <div
                key={`pagination-${i}`}
                    className={`${
                        currentPage === i ? "text-color underline" : "text-gray-500"
                    }`}
                    onClick={() => handlePageChange(i)}
                >{alphabet[i]}</div>
            ))}
        </div>
    );
};

export default Pagination;
