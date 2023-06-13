import { useState, useEffect } from "react";
import Page from "./Page";
import Pagination from "./Pagination";
import Section from "./Section";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { createPortal } from "react-dom";
import { createAppendPortal } from "../utils";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Title from "./Title";
import ThemeSelect from "./ThemeSelect";
import SidebarContent from "./SidebarContent";

interface LayoutProps {
    children: React.ReactNode;
    handlePageChange: (page: number) => void;
    currentPage: number;
    numberOfPages: number;
    isSidebarOpen: boolean;
    handleSidebarOpen: (isOpen: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    currentPage,
    numberOfPages,
    handlePageChange,
    handleSidebarOpen,
    isSidebarOpen,
}) => {
    const [theme, setTheme] = useState("dark");
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const createdPortalRoot = createAppendPortal("div", "portal-root");
        setPortalRoot(createdPortalRoot);

        return () => {
            document.body.removeChild(createdPortalRoot);
        };
    }, []);

    const handleThemeChange = (theme: string) => {
        setTheme(theme);
    };

    return (
        <div className={`${theme}-theme`}>
            <KeyboardEventHandler
                handleKeys={["o", "x"]}
                onKeyEvent={(key: string) => {
                    if (key === "o" || key === "x") {
                        handleSidebarOpen(!isSidebarOpen);
                    }
                }}
            />

            {portalRoot &&
                isSidebarOpen &&
                createPortal(
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onDismiss={() => handleSidebarOpen(false)}
                    >
                        <SidebarContent
                            handleThemeChange={handleThemeChange}
                            theme={theme}
                        />
                    </Sidebar>,

                    portalRoot
                )}

            <button
                className="p-4 absolute -top-4 -right-2 z-10 text-2xl text-white underline"
                onClick={() => handleSidebarOpen(!isSidebarOpen)}
            >
                o
            </button>
            <div className="flex justify-center items-center h-screen bg-background bg-opacity-80">
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
                <Pagination
                    currentPage={currentPage}
                    numberOfPages={numberOfPages}
                    handlePageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Layout;
