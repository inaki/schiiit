import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Title from "./Title";

interface ThemeSelectProps {
    selectTheme: (theme: string) => void;
    theme: string;
}

const ThemeSelect: React.FC<ThemeSelectProps> = ({ selectTheme, theme }) => {
    return (
        <div className="flex flex-col space-y-4">
            <KeyboardEventHandler
                handleKeys={["d", "l"]}
                onKeyEvent={(key: string) => {
                    if (key === "d") {
                        selectTheme("dark");
                    } else if (key === "l") {
                        selectTheme("light");
                    }
                }}
            />
          <Title txt="Themes:"/> 
            <ul className="flex flex-col space-y-4">
                <li className={`${theme === "dark" ? "underline" : ""}`}>
                    {" "}
                    <span>d</span> - dark theme{" "}
                </li>
                <li className={`${theme === "light" ? "underline" : ""}`}>
                    {" "}
                    <span>l</span> - light theme{" "}
                </li>
            </ul>
        </div>
    );
};

export default ThemeSelect;
