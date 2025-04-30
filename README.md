# WordPress Development Environment (WPDE)

![Build Status](https://img.shields.io/badge/License-MIT-blue)
![Build Status](https://img.shields.io/badge/License-3.2.4-orange)
![Build Status](https://img.shields.io/badge/Release-stable-brightgreen)

WordPress Development Environment (WPDE) is a fantastic starting point for creating a WordPress template.

It includes responsive and accessibility design, necessary files, and features needed for proper template functioning, along with a settings page and much more.

## Demo

Check out the https://demo.github.io

## Requirements

Make sure you have [Node.js](https://nodejs.org/) >= v20.x.x (recommended LTS) and Package Manager installed on your computer to run these commands.

## Installation

Before running any commands, it's necessary to install the project dependencies using the following command:

* **`yarn install`** or use your preferred package manager.

## Commands

This section outlines the basic commands for working with the project. All commands are executed from the project's root directory.

* **`yarn start`**: Runs webpack to build the project. This is typically used for development.
* **`yarn format`**: Automatically formats the code in all files with the `.js`, `.css`, `.scss`, `.sass`, `.html`, `.md`, `.json`, `.yml`, and `.yaml` extensions using Prettier.
* **`yarn lint`**: Checks JavaScript and TypeScript files in the `src/js` directory for potential issues using ESLint.
* **`yarn lint:css`**: Checks CSS, SCSS, and SASS files in the `src/scss` directory for style issues using Stylelint.

## API

????????????

### Registering a new post type

Using the [post type API](https://github.com/hlashbrooke/wpde/blob/master/includes/lib/class-wpde-post-type.php) and the wrapper function from the main plugin class you can easily register new post types with one line of code.

`WPDE()->register_post_type( 'listing', __( 'Listings', 'wpde' ), __( 'Listing', 'wpde' ) );`

This will register a new post type with all the standard settings. If you would like to modify the post type settings you can use the `{$post_type}_register_args` filter. See [the WordPress codex page](http://codex.wordpress.org/Function_Reference/register_post_type) for all available arguments.

### Registering a new taxonomy

Using the [taxonomy API](https://github.com/hlashbrooke/wpde/blob/master/includes/lib/class-wpde-taxonomy.php) and the wrapper function from the main plugin class you can easily register new taxonomies with one line of code.

`WPDE()->register_taxonomy( 'services', __( 'Services', 'wpde' ), __( 'Service', 'wpde' ), 'listing' );`

This will register a new taxonomy with all the standard settings. If you would like to modify the taxonomy settings you can use the `{$taxonomy}_register_args` filter. See [the WordPress codex page](http://codex.wordpress.org/Function_Reference/register_taxonomy) for all available arguments.

## 💨 Essentials

The essential features that ensure your website performs optimally, with an emphasis on speed, accessibility, and responsiveness.

- 🪶 Lightweight
- 📱 Responsive
- 🌗 Light / Dark Theme
- 🍪 Cookie Consent
- 🧑‍🦽 Accessibility
- 🚀 Very Fast Performance
- 📊 SEO Best Practices
- 🔒 High Security
- 🔋 Robust Stability
- 🌍 i18n / Multilingual Support
- 🧩 Modular / Scalable Architecture

## ⚡ Features

A set of powerful, user-friendly features designed to enhance both the user experience and site functionality.

- 🍞 Breadcrumbs
- 🦿 Pagination
- 🖼️ Lightbox
- 🛞 Carousel
- 🛒 WooCommerce Support

## ⚙️ Admin

Admin features designed to make managing and customizing your site easier and more efficient.

- 🎯 Options Page
- 🗝️ Login Page
- 🔧 Developer Tools
- 👯 Duplicate Post
- 🚧 Under Construction
- ⛔ Disable Emojis
- 🧱 Disable Block Library
- 🚫 Disable RSS
- ❌ Remove unwanted tags
- 📧 SMTP Settings
- 🧠 Help Tabs
- 🕹️ Dashboard Metabox
- 🔌 ACF Support
- 🦾 Helper Functions
- 📌 Register Post Type
- 🏷️ Register Taxonomy

## 🧪 Development

Tools and technologies designed to enhance the development process and ensure a high-quality codebase.

- 📐 Custom Bootstrap
- 🎨 SCSS
- 🍦 Vanilla JS
- 🧊 Typescript
- 🍇 Yarn Berry
- 📦 Webpack
- 💡 ESLint
- 🔍 Stylelint
- ✨ Prettier
- 💻 Editorconfig

## License

Distributed under the **`GPLv3`** License. See [LICENSE](https://github.com/ruciloss/wpde/blob/master/LICENSE) for more information.

## Credits

Copyright © Ruciloss
