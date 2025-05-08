import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./ThemeToggler.stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faDesktop } from "@fortawesome/free-solid-svg-icons";

const options = [
    { value: "dark", label: "On", icon: faMoon },
    { value: "light", label: "Off", icon: faSun },
    {
        value: "system",
        label: "Automatic",
        icon: faDesktop,
        description:
            "We'll automatically adjust the display based on your device's system settings.",
    },
];

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleSelect = (value: "system" | "light" | "dark") => {
        setTheme(value);
        //setOpen(false);
    };

    const currentOption = options.find((opt) => opt.value === theme);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div {...stylex.props(styles.wrapper)}>
            <button
                ref={buttonRef}
                {...stylex.props(styles.button)}
                onClick={() => setOpen((prev) => !prev)}
            >
                <FontAwesomeIcon
                    icon={currentOption?.icon ?? faDesktop}
                    width={18}
                    height={18}
                />
            </button>

            {open && (
                <div {...stylex.props(styles.dropdown)} ref={dropdownRef}>
                    <div {...stylex.props(styles.header)}>
                        <span {...stylex.props(styles.icon)}>
                            <FontAwesomeIcon
                                icon={faMoon}
                                width={18}
                                height={18}
                            />
                        </span>
                        <div>
                            <span {...stylex.props(styles.heading)}>
                                Dark mode
                            </span>
                            <span>
                                Adjust the appearance of the website to reduce
                                glare and give your eyes a break.
                            </span>
                        </div>
                    </div>

                    {options.map((opt) => {
                        const isSelected = opt.value === theme;

                        return (
                            <div
                                key={opt.value}
                                {...stylex.props(styles.item)}
                                onClick={() =>
                                    handleSelect(
                                        opt.value as
                                            | "system"
                                            | "light"
                                            | "dark",
                                    )
                                }
                            >
                                <div {...stylex.props(styles.itemContent)}>
                                    <div>
                                        <span {...stylex.props(styles.title)}>
                                            {opt.label}
                                        </span>
                                        {opt.description && (
                                            <span
                                                {...stylex.props(
                                                    styles.description,
                                                )}
                                            >
                                                {opt.description}
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        {...stylex.props(
                                            styles.radio,
                                            isSelected && styles.radioSelected,
                                        )}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ThemeToggler;
