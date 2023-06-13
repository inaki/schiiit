import { useState, useEffect } from "react";
import Page from "./components/Page";
import Layout from "./components/Layout";
import vimData from "./data/newVim.json";
import { SectionsProps } from "./types";
import KeyboardEventHandler from "react-keyboard-event-handler";

const ITEMS_PER_PAGE = 3;
const countPages = (data: SectionsProps) =>
    Math.ceil(data.length / ITEMS_PER_PAGE);

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState(vimData);
    const [numPages, setNumPages] = useState<number>(1);
    const [pages, setPages] = useState<SectionsProps[]>([]);

    useEffect(() => {
        setData(vimData);
        const calculatedNumPages = countPages(vimData);
        setNumPages(calculatedNumPages);
        const calculatedPages = Array.from(
            { length: calculatedNumPages },
            (_, i) => {
                return vimData.slice(
                    i * ITEMS_PER_PAGE,
                    (i + 1) * ITEMS_PER_PAGE
                );
            }
        );
        setPages(calculatedPages);
    }, []);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleSidebarOpen = (isOpen: boolean) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <Layout
            currentPage={currentPage}
            numberOfPages={numPages}
            handlePageChange={handlePageChange}
            handleSidebarOpen={handleSidebarOpen}
            isSidebarOpen={isSidebarOpen}
        >
            <KeyboardEventHandler
                handleKeys={["a", "b"]}
                onKeyEvent={(key: string) => {
                    switch (key) {
                        case "a":
                            setCurrentPage(0);
                            setIsSidebarOpen(false);
                            return;
                        case "b":
                            setCurrentPage(1);
                                                        setIsSidebarOpen(false);

                            return;
                        default:
                            return;
                    }
                }}
            />

            {pages.length > 0 && <Page pageData={pages[currentPage]} />}
        </Layout>
    );
};

export default App;
