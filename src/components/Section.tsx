import React from 'react';

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => (
    <section {...rest} className="border-2 rounded-lg h-screen w-full p-5 m-5 minus-pixels-20">
        {children}
    </section> 
);

export default Section;
