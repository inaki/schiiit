import { useState } from "react";
import Page from "./Page";
import Bubbles from "./Bubbles";
import Section from "./Section";

interface LayoutProps {
    children: React.ReactNode;
    handlePageChange: (page: number) => void;
    currentPage: number;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    currentPage,
    handlePageChange,
}) => {
    return (
        <div className="App">
            <div className="flex justify-center items-center h-screen bg-gray-800 bg-opacity-80">
                <div className="absolute inset-2">
                    <div
                        className="w-full h-full flex transition-transform duration-300 transform"
                        style={{
                            transform: `translateX(-${
                                (currentPage - 1) * 100
                            }%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
                <Bubbles
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Layout;
