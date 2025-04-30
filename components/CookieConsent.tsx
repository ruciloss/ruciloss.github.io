"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookiesConsent() {
    useEffect(() => {
        CookieConsent.run({
            autoShow: true,
            cookie: {
                name: "_" + location.hostname,
            },
            guiOptions: {
                consentModal: {
                    layout: "cloud inline",
                    position: "bottom center",
                    equalWeightButtons: false,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: "box",
                    equalWeightButtons: false,
                    flipButtons: true,
                },
            },
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                },
                analytics: {
                    autoClear: {
                        cookies: [
                            {
                                name: /^_ga/,
                            },
                            {
                                name: "_gid",
                            },
                        ],
                    },
                    services: {
                        ga: {
                            label: "Google Analytics",
                            onAccept: () => {},
                            onReject: () => {},
                        },
                    },
                },
                ads: {},
            },
            language: {
                default: "en",
                translations: {
                    en: {
                        consentModal: {
                            title: "🍪 Cookies",
                            description:
                                "We use cookies to enhance your browsing experience and analyze website traffic. Cookies help us provide personalized content and improve the functionality of the website.",
                            acceptAllBtn: "Accept All",
                            acceptNecessaryBtn: "Reject All",
                            showPreferencesBtn: "Manage Preferences",
                            closeIconLabel: "Reject All and Close Modal",
                        },
                        preferencesModal: {
                            title:
                                "Cookie Settings <small>" +
                                window.location.hostname +
                                "</small>",
                            acceptAllBtn: "Accept All",
                            acceptNecessaryBtn: "Reject All",
                            savePreferencesBtn: "Save Selection",
                            closeIconLabel: "Close Modal",
                            serviceCounterLabel: "Service|Services",
                            sections: [
                                {
                                    title: "Your Privacy Choices",
                                    description: `In this panel, you can express your preferences regarding the processing of your personal data. You can review and change the choices you’ve expressed at any time by reopening this panel via the provided link. To refuse your consent for specific processing activities described below, toggle the switches to off or use the "Reject All" button and confirm your preferences.`,
                                },
                                {
                                    title: "Strictly Necessary",
                                    description:
                                        "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                                    linkedCategory: "necessary",
                                },
                                {
                                    title: "Performance and Analytics",
                                    description:
                                        "These cookies collect information about how you use our website. All data is anonymized and cannot be used to identify you.",
                                    linkedCategory: "analytics",
                                    cookieTable: {
                                        caption: "Cookie Table",
                                        headers: {
                                            name: "Cookie",
                                            domain: "Domain",
                                            desc: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name: "_ga",
                                                domain: "Google Analytics",
                                                desc: 'Cookie set by <a href="https://analytics.google.com">Google Analytics</a>.',
                                                expiration:
                                                    "Expires after 12 days",
                                            },
                                            {
                                                name: "_gid",
                                                domain: "Google Analytics",
                                                desc: 'Cookie set by <a href="https://analytics.google.com">Google Analytics</a>.',
                                                expiration: "Session",
                                            },
                                        ],
                                    },
                                },
                                /*
                                {
                                    title: 'Targeting and Advertising',
                                    description: 'These cookies are used to make advertising messages more relevant to you and your interests. The goal is to display ads that are relevant and attractive to individual users, thus more valuable for publishers and third parties.',
                                    linkedCategory: 'ads',
                                },
                                */
                                {
                                    title: "Consent Details",
                                    description: `
                                        <p><strong>Consent ID:</strong> <span id="consent-id">-</span></p>
                                        <p><strong>Consent Date:</strong> <span id="consent-timestamp">-</span></p>
                                        <p><strong>Last Updated:</strong> <span id="last-consent-timestamp">-</span></p>
                                    `,
                                },
                                {
                                    title: "More Information",
                                    description:
                                        'If you have any questions about our cookie policy and your preferences, please <a href="#contact-page">contact us</a>.',
                                },
                            ],
                        },
                    },
                },
            },
        });

        const updateDarkMode = () => {
            const computedStyle = window.getComputedStyle(
                document.documentElement,
            );
            if (computedStyle.colorScheme === "dark") {
                document.body.classList.add("cc--darkmode");
            } else {
                document.body.classList.remove("cc--darkmode");
            }
        };

        updateDarkMode();

        const observer = new MutationObserver(() => {
            updateDarkMode();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style"],
        });

        const linkElement = document.createElement("button");
        linkElement.textContent = "Privacy Settings";
        linkElement.setAttribute("type", "button");
        linkElement.classList.add("hover:text-blue-700");
        linkElement.onclick = (event) => {
            event.preventDefault();
            CookieConsent.showPreferences();
        };

        const showPreferences = document.getElementById("footer-links");
        if (showPreferences && !showPreferences.querySelector("button")) {
            showPreferences.appendChild(linkElement);
        }

        return () => {
            observer.disconnect();
            const linkElement = document.querySelector("#footer-links button");
            if (linkElement) {
                linkElement.remove();
            }
        };
    }, []);

    return null;
}
