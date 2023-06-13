import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => (
    <div className="w-1/3 h-[98vh] flex items-center justify-center p-4">
        <div className="w-full h-full border-[1px] border-color border-opacity-50 rounded-xl bg-transparent p-4 overflow-hidden">
            {children}
        </div>
    </div>
);

export default Section;
