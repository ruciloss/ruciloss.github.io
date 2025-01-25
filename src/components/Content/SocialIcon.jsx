import React from 'react';
import { FaInstagram, FaTwitch, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaDiscord, FaGithub } from 'react-icons/fa';

const socialPlatforms = {
    instagram: {
        icon: <FaInstagram size={20} />,
        domain: 'instagram.com',
        label: 'Instagram',
    },
    twitch: {
        icon: <FaTwitch size={20} />,
        domain: 'twitch.tv',
        label: 'Twitch',
    },
    twitter: {
        icon: <FaTwitter size={20} />,
        domain: 'twitter.com',
        label: 'Twitter',
    },
    facebook: {
        icon: <FaFacebook size={20} />,
        domain: 'facebook.com',
        label: 'Facebook',
    },
    linkedin: {
        icon: <FaLinkedin size={20} />,
        domain: 'linkedin.com',
        label: 'LinkedIn',
    },
    youtube: {
        icon: <FaYoutube size={20} />,
        domain: 'youtube.com',
        label: 'YouTube',
    },
    discord: {
        icon: <FaDiscord size={20} />,
        domain: 'discord.com',
        label: 'Discord',
    },
    github: {
        icon: <FaGithub size={20} />,
        domain: 'github.com',
        label: 'GitHub',
    },
};

export default function SocialIcon({ url }) {
    const getPlatform = () => {
        const platform = Object.entries(socialPlatforms).find(([_, { domain }]) => 
            url.includes(domain)
        );
        return platform ? platform[1] : null;
    };

    const platform = getPlatform();

    return (
        platform && (
            <a 
                href={url} 
                className="flex items-center transition-colors duration-200 text-slate-900 dark:text-slate-100 hover:text-blue-700" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Navštivte ${platform.label}`}
            >
                {platform.icon}
            </a>
        )
    );
}
