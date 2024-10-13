import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentComponent() {
    useEffect(() => {
        CookieConsent.run({
            autoShow: true,
            cookie: {
                name: '_' + location.hostname,
            },
            guiOptions: {
                consentModal: {
                    layout: 'cloud inline',
                    position: 'bottom center',
                    equalWeightButtons: false,
                    flipButtons: false,
                },
                preferencesModal: {
                    layout: 'box',
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
                                name: '_gid',
                            },
                        ],
                    },
                    services: {
                        ga: {
                            label: 'Google Analytics',
                            onAccept: () => { },
                            onReject: () => { },
                        },
                    },
                },
                ads: {},
            },
            language: {
                default: 'cs',
                translations: {
                    cs: {
                        consentModal: {
                            title: 'Cookies',
                            description: 'Používám cookies, abych vylepšil vaše procházení a analyzoval návštěvnost stránek. Cookies mi pomáhají poskytovat personalizovaný obsah a zlepšovat funkčnost webu.',
                            acceptAllBtn: 'Přijmout vše',
                            acceptNecessaryBtn: 'Odmítnout vše',
                            showPreferencesBtn: 'Spravovat preference',
                            closeIconLabel: 'Odmítnout vše a zavřít modal',
                        },
                        preferencesModal: {
                            title: 'Nastavení cookies <small>' + window.location.hostname + '</small>',
                            acceptAllBtn: 'Přijmout vše',
                            acceptNecessaryBtn: 'Odmítnout vše',
                            savePreferencesBtn: 'Uložit výběr',
                            closeIconLabel: 'Zavřít modal',
                            serviceCounterLabel: 'Služba|Služby',
                            sections: [
                                {
                                    title: 'Vaše volby ohledně soukromí',
                                    description: `V tomto panelu můžete vyjádřit své preference týkající se zpracování vašich osobních údajů. Můžete kdykoli přezkoumat a změnit vyjádřené volby tím, že znovu otevřete tento panel pomocí poskytnutého odkazu. Pro odmítnutí vašeho souhlasu s konkrétními zpracovatelskými činnostmi popsanými níže přepněte přepínače na vypnuto nebo použijte tlačítko „Odmítnout vše“ a potvrďte, že chcete uložit své volby.`,
                                },
                                {
                                    title: 'Striktně nezbytné',
                                    description: 'Tyto cookies jsou nezbytné pro správné fungování webové stránky a nelze je vypnout.',
                                    linkedCategory: 'necessary',
                                },
                                {
                                    title: 'Výkon a analýza',
                                    description: 'Tyto cookies shromažďují informace o tom, jak používáte naši webovou stránku. Všechna data jsou anonymizována a nelze je použít k identifikaci.',
                                    linkedCategory: 'analytics',
                                    cookieTable: {
                                        caption: 'Tabulka cookies',
                                        headers: {
                                            name: 'Cookie',
                                            domain: 'Doména',
                                            desc: 'Popis',
                                            expiration: 'Expirace',
                                        },
                                        body: [
                                            {
                                                name: '_ga',
                                                domain: 'Google Analytics',
                                                desc: 'Cookie nastavené <a href="https://analytics.google.com">Google Analytics</a>.',
                                                expiration: 'Vyprší po 12 dnech'
                                            },
                                            {
                                                name: '_gid',
                                                domain: 'Google Analytics',
                                                desc: 'Cookie nastavené <a href="https://analytics.google.com">Google Analytics</a>',
                                                expiration: 'Relace'
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: 'Cílení a reklama',
                                    description: 'Tyto cookies se používají k tomu, aby byly reklamní zprávy pro vás a vaše zájmy relevantnější. Cílem je zobrazit reklamy, které jsou pro jednotlivé uživatele relevantní a atraktivní, a tím pádem hodnotnější pro vydavatele a třetí strany.',
                                    linkedCategory: 'ads',
                                },
                                {
                                    title: 'Podrobnosti o souhlasu',
                                    description: `
                                        <p><strong>ID souhlasu:</strong> <span id="consent-id">-</span></p>
                                        <p><strong>Datum souhlasu:</strong> <span id="consent-timestamp">-</span></p>
                                        <p><strong>Poslední aktualizace:</strong> <span id="last-consent-timestamp">-</span></p>
                                    `
                                },
                                {
                                    title: 'Více informací',
                                    description: 'Pokud máte jakékoli dotazy týkající se mé politiky o cookies a vašich volbách, prosím <a href="#contact-page">kontaktujte nás</a>',
                                },
                            ],
                        },
                    },
                },
            },
        });
    
        const updateDarkMode = () => {
            const computedStyle = window.getComputedStyle(document.documentElement);
            if (computedStyle.colorScheme === 'dark') {
                document.body.classList.add('cc--darkmode');
            } else {
                document.body.classList.remove('cc--darkmode');
            }
        };
        
        updateDarkMode();
        
        const observer = new MutationObserver(() => {
            updateDarkMode();
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style']
        });
    
        const linkElement = document.createElement("button");
        linkElement.textContent = "Nastavení soukromí";
        linkElement.setAttribute('type', 'button');
        linkElement.classList.add('hover:text-blue-700');
        linkElement.onclick = (event) => {
            event.preventDefault();
            CookieConsent.showPreferences();
        };
        
        const showPreferences = document.getElementById("footer-links");
        if (showPreferences && !showPreferences.querySelector('button')) {
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
