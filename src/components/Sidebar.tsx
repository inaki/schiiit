// Sidebar.tsx
import React from "react";
import { FiX } from "react-icons/fi";

interface SidebarProps {
    isOpen: boolean;
    onDismiss: () => void;
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onDismiss, children }) => {
    return (
        <div
            className={`w-64 bg-gray-800 text-white top-0 right-0 p-6 fixed h-full overflow-auto transform translate-x-${
                isOpen ? "0" : "-full"
            } transition-transform duration-200 ease-in-out z-20`}
        >
            <button
                className="p-4 absolute top-0 right-0 z-10 underline text-2xl"
                onClick={onDismiss}
            >
                x
            </button>

            <div className="flex flex-col space-y-4">{children}</div>
        </div>
    );
};

export default Sidebar;
