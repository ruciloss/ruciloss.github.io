import React from 'react';
import { FaInstagram, FaTwitch, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaDiscord, FaGithub } from 'react-icons/fa';

const socialPlatforms = {
    instagram: {
        icon: <FaInstagram size={30} />,
        domain: 'instagram.com',
    },
    twitch: {
        icon: <FaTwitch size={30} />,
        domain: 'twitch.tv',
    },
    twitter: {
        icon: <FaTwitter size={30} />,
        domain: 'twitter.com',
    },
    facebook: {
        icon: <FaFacebook size={30} />,
        domain: 'facebook.com',
    },
    linkedin: {
        icon: <FaLinkedin size={30} />,
        domain: 'linkedin.com',
    },
    youtube: {
        icon: <FaYoutube size={30} />,
        domain: 'youtube.com',
    },
    discord: {
        icon: <FaDiscord size={30} />,
        domain: 'discord.com',
    },
    github: {
        icon: <FaGithub size={30} />,
        domain: 'github.com',
    },
};

export default function SocialIcon({ url }) {
    const getPlatform = () => {
        const platform = Object.entries(socialPlatforms).find(([_, { domain }]) => 
            url.includes(domain)
        );
        return platform ? platform[1].icon : null;
    };

    const icon = getPlatform();

    return (
        icon && (
            <a 
                href={url} 
                className="flex items-center transition-colors duration-300 text-slate-900 dark:text-slate-100 hover:text-blue-700" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {icon}
            </a>
        )
    );
}
