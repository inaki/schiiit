import { useState } from "react";
import Page from "./components/Page";
import Bubbles from "./components/Bubbles";
import Section from "./components/Section";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

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
                        {Array(3)
                            .fill(0)
                            .map((_, index) => (
                                <Page key={index} pageNumber={index + 1}>
                                    <Section>section 1</Section>
                                    <Section>section 2</Section>
                                    <Section>section 3</Section>
                            </Page>
                            ))}
                    </div>
                </div>
                <Bubbles currentPage={currentPage} handlePageChange={handlePageChange} />
           </div>
        </div>
    );
};

export default App;
