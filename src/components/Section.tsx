import React from "react";

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...rest }) => (
    <div className="w-full h-[98vh] flex items-center justify-center p-4">
        <div className="w-full h-full border-[1px] border-white border-opacity-50 rounded-xl bg-transparent p-4">
            {children}
        </div>
    </div>
);

export default Section;
