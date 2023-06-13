import React from "react";
import { SectionsProps, SubsectionProps } from "../types";
import Section from "./Section";
import Title from "./Title";
import KeyCell from "./KeyCell";

interface PageProps {
    pageData: SectionsProps;
}

const Page: React.FC<PageProps> = ({ pageData }) => {
    const justifyContentClass =
        pageData.length < 3 ? "justify-start" : "justify-between";
    return (
        <div className="flex-shrink-0 w-full h-full">
            <div
                className={`flex w-full text-white text-4xl md:text-6xl lg:text-4xl tracking-wide pl-4 ${justifyContentClass}`}
            >
                {pageData.map((section) => {
                    return (
                        <Section key={`section-${section.name}`}>
                            {section.subsections.map((subsection, index) => {
                                return (
                                    <div key={`sub-section-${index}`}>
                                        <Title txt={subsection.title} />
                                        {subsection.keyChars.map(
                                            (key, index) => {
                                                return (
                                                    <KeyCell
                                                        key={`${key.cmd}-${index}`}
                                                        keyChar={key.cmd}
                                                        description={
                                                            key.description
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                );
                            })}
                        </Section>
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
