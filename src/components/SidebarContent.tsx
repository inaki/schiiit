import React from "react";
import Title from "./Title";
import ThemeSelect from "./ThemeSelect";

interface SidebarContentProps {
    handleThemeChange: (theme: string) => void;
    theme: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ handleThemeChange, theme, ...rest }) => {
    return (
        <div>
            <Title txt="Settings" />
            <ThemeSelect selectTheme={handleThemeChange} theme={theme}/>
        </div>
    );
};

export default SidebarContent;
