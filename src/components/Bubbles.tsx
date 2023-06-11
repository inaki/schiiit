import React from "react";

interface BubblesProps {
    currentPage: number;
    handlePageChange: (pageNumber: number) => void;
}

const Bubbles: React.FC<BubblesProps> = ({ currentPage = 1, handlePageChange }) => {
    return (
        <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2">
            <div
                className={`w-4 h-4 rounded-full ${
                    currentPage === 1 ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => handlePageChange(1)}
            ></div>
            <div
                className={`w-4 h-4 rounded-full ${
                    currentPage === 2 ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => handlePageChange(2)}
            ></div>
            <div
                className={`w-4 h-4 rounded-full ${
                    currentPage === 3 ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => handlePageChange(3)}
            ></div>
        </div>
    );
};

export default Bubbles;
