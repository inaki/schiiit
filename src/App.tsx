import { useState } from "react";
import Page from "./components/Page";
import Bubbles from "./components/Bubbles";
import Section from "./components/Section";
import Layout from "./components/Layout";
import KeyCell from "./components/KeyCell";
import Title from "./components/Title";
import vimData from "./data/vim.json";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    console.log(vimData[0]["keyChars"]);

    return (
        <Layout currentPage={currentPage} handlePageChange={handlePageChange}>
            {Array(3)
                .fill(0)
                .map((_, index) => (
                    <Page key={index} pageNumber={index + 1}>
                        <Section>
                            <div>
                                <Title txt={vimData[0]["title"]} />
                                {vimData[0]["keyChars"].map((item, index) => (
                                    <KeyCell
                                        key={index}
                                        keyChar={item["cmd"]}
                                        description={item["description"]}
                                    />
                                ))}
                            </div>
                        </Section>

                        <Section>section 2</Section>
                        <Section>section 3</Section>
                    </Page>
                ))}
        </Layout>
    );
};

export default App;
