# Linfy Tech Solutions - Company Website

[![HTML5][HTML5-shield]][HTML5-url]
[![CSS3][CSS3-shield]][CSS3-url]
[![JavaScript][JavaScript-shield]][JavaScript-url]
[![Bootstrap][Bootstrap-shield]][Bootstrap-url]
[![License: MIT][License-shield]][License-url]

<!-- Optional: Add a screenshot or GIF of the website here -->
<!-- ![Linfy Tech Solutions Website Screenshot](link/to/screenshot.png) -->

Welcome to the official repository for the Linfy Tech Solutions company website. This project showcases our services, expertise, pricing structure, and company background through a modern, responsive, and user-friendly interface.

## Table of Contents

- [About The Project](#about-the-project)
  - [Key Features](#key-features)
  - [Built With](#built-with)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Contributors](#contributors)

## About The Project

The Linfy Tech Solutions website serves as the primary online presence for our company. It's designed to provide potential and existing clients with comprehensive information about our offerings and values. Built with standard web technologies, it prioritizes responsiveness, clean design, and intuitive navigation across all devices.

### Key Features

*   **Responsive Design:** Adapts seamlessly to various screen sizes (desktops, tablets, mobiles).
*   **Service Showcase:** Detailed descriptions of services offered (`services.html`).
*   **Transparent Pricing:** Clear breakdown of service packages and costs (`pricing.html`).
*   **Company Information:** Insights into our mission, vision, and history (`about.html`).
*   **Contact Form:** Easy way for users to get in touch (`contact.html`).
*   **Interactive Elements:** Features like a "Back to Top" button and animations enhance user experience.
*   **Feedback Mechanism:** Includes an interactive survey form (`survey-form.html`) for gathering user feedback.

### Built With

This project leverages the following core technologies and libraries:

*   [![HTML5][HTML5-shield]][HTML5-url]
*   [![CSS3][CSS3-shield]][CSS3-url]
*   [![JavaScript][JavaScript-shield]][JavaScript-url] (Vanilla JS for core interactions)
*   [![Bootstrap][Bootstrap-shield]][Bootstrap-url] (v5.3.3 for layout and components)
*   [Font Awesome](https://fontawesome.com/) (v6.5.1 for icons)
*   [Google Fonts](https://fonts.google.com/) (Bricolage Grotesque, Space Grotesk)
*   [AOS (Animate On Scroll) Library](https://michalsnik.github.io/aos/) (For scroll animations)
*   [Canvas Confetti](https://github.com/catdad/canvas-confetti) (Used in the survey form success state)

## Project Structure

The repository is organized as follows:


.
├── .gitignore # Specifies intentionally untracked files that Git should ignore
├── index.html # Main landing/home page
├── services.html # Services description page
├── pricing.html # Pricing packages page
├── about.html # Company information page
├── contact.html # Contact form and details page
├── survey-form.html # Interactive feedback survey form
├── styles.css # Main stylesheet (potentially could be refactored into modules)
├── script.js # Main JavaScript file for interactivity
├── images/ # Directory for image assets (if any, besides logo/profile)
│ └── ...
├── logo.png # Company logo file
├── profile-image.jpg # Example profile image (if used)
└── README.md # This file

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, Safari, or Edge) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/repository-name.git
    ```
    *(Replace `yourusername/repository-name.git` with the actual URL of your repository)*

2.  **Navigate to the project directory:**
    ```bash
    cd repository-name
    ```

3.  **Open the `index.html` file:**
    Simply double-click the `index.html` file in your file explorer, or right-click and choose "Open with" your preferred web browser.

That's it! The website should now be running locally in your browser.

## Usage

Navigate through the website using the main navigation menu links (Home, Services, Pricing, About, Contact). The site is designed to be intuitive. The "Back to Top" button (if implemented in `script.js`) provides quick scrolling to the page header on longer pages.

## Customization

Feel free to customize the website to better suit your needs. Here are the primary areas for modification:

*   **Content:** Edit the text, headings, and image references directly within the `.html` files (`index.html`, `services.html`, etc.).
*   **Styling:** Modify `styles.css` to change:
    *   **Colors:** Update CSS variables (e.g., `--primary`, `--secondary`) at the top of the file for global theme changes.
    *   **Fonts:** Change `font-family` properties or update Google Font links in the HTML `<head>`.
    *   **Layout:** Adjust padding, margins, flexbox, or grid properties.
    *   **Component Styles:** Target specific classes to restyle buttons, cards, forms, etc.
*   **Interactivity:** Edit `script.js` to:
    *   Modify existing JavaScript functions (e.g., scroll behavior, form validation).
    *   Add new interactive features or animations.
*   **Images:** Replace `logo.png`, `profile-image.jpg`, or add/replace other images in the `images/` directory (create it if needed) and update the paths in the HTML.

**✨ Customization Idea:** Try changing the `--primary` color variable in `:root` within `styles.css` to your brand's main color and observe how the theme adapts instantly across the site!

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please ensure your code adheres to basic formatting standards and that your changes align with the project's goals.

## License

Distributed under the MIT License. See `LICENSE.txt` (or add one if missing) for more information.

<!-- It's highly recommended to add a LICENSE.txt file with the MIT license text -->

## Contact

Linfy Tech Solutions - [Email at](linfordlee14@gmail.com) - 

Project Link:[My Github Project](https://github.com/linfordlee14/LInfy-Website) 

## Contributors

*   **ShadEl7** – Initial project setup, design, and development.
*   **linfordlee14** – Project management and additional development.

<!-- Add more contributors as needed -->

---

<!-- MARKDOWN LINKS & BADGES -->
<!-- Replace with actual URLs and potentially choose different badges -->
[HTML5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
[CSS3-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Bootstrap-shield]: https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/
[License-shield]: https://img.shields.io/github/license/yourusername/repository-name?style=for-the-badge
[License-url]: https://github.com/yourusername/repository-name/blob/main/LICENSE.txt
