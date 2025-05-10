import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./ThemeToggler.stylex";
import { Sun, Moon, Monitor } from "lucide-react";

const options = [
    { value: "light", label: "Off", icon: Sun },
    { value: "dark", label: "On", icon: Moon },
    {
        value: "system",
        label: "Automatic",
        icon: Monitor,
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
            <span
                role="button"
                tabIndex={0}
                ref={buttonRef}
                aria-label={`Toggle theme menu (current: ${theme})`}
                onClick={() => setOpen((prev) => !prev)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setOpen((prev) => !prev);
                    }
                }}
                {...stylex.props(styles.button)}
            >
                {currentOption?.icon ? (
                    <currentOption.icon
                        width={18}
                        height={18}
                        strokeWidth={2}
                        role="img"
                        aria-hidden="false"
                        aria-label={`${theme} theme icon`}
                    />
                ) : (
                    <Monitor
                        width={18}
                        height={18}
                        strokeWidth={2}
                        role="img"
                        aria-label="automatic theme icon"
                    />
                )}
            </span>

            {open && (
                <div {...stylex.props(styles.dropdown)} ref={dropdownRef}>
                    <div {...stylex.props(styles.header)}>
                        <span {...stylex.props(styles.icon)}>
                            <Moon
                                width={18}
                                height={18}
                                strokeWidth={2}
                                role="img"
                                aria-label="Moon icon"
                            />
                        </span>
                        <div>
                            <span {...stylex.props(styles.heading)}>
                                Dark mode
                            </span>
                            <span {...stylex.props(styles.description)}>
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
                                role="button"
                                tabIndex={0}
                                aria-pressed={isSelected}
                                aria-label={`Dark Mode ${opt.label}${isSelected ? " (selected)" : ""}`}
                                onClick={() =>
                                    handleSelect(
                                        opt.value as
                                            | "system"
                                            | "light"
                                            | "dark",
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleSelect(
                                            opt.value as
                                                | "system"
                                                | "light"
                                                | "dark",
                                        );
                                    }
                                }}
                            >
                                <div {...stylex.props(styles.itemContent)}>
                                    <div>
                                        <span
                                            {...stylex.props(styles.itemTitle)}
                                        >
                                            {opt.label}
                                        </span>
                                        {opt.description && (
                                            <span
                                                {...stylex.props(
                                                    styles.itemDescription,
                                                )}
                                            >
                                                {opt.description}
                                            </span>
                                        )}
                                    </div>
                                    <input
                                        {...stylex.props(
                                            styles.radio,
                                            isSelected && styles.radioSelected,
                                        )}
                                        type="radio"
                                        aria-checked={
                                            isSelected ? "true" : "false"
                                        }
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
