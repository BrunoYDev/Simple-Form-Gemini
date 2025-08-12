# Service Checklist PWA

A responsive, mobile-first Progressive Web App (PWA) designed for field technicians to fill out
service checklists, capture a digital signature from the client, and generate a PDF report on
the spot.

## Description

This project solves the need for a simple, digital, and offline-capable solution for creating
service reports. Instead of relying on paper forms, technicians can use any modern
smartphone or desktop browser to fill out a detailed checklist. The final report, including the
client's hand-drawn signature, is compiled into a PDF that can be immediately shared (on
mobile) or downloaded (on desktop).
The application is built to be a PWA, meaning it can be "installed" on a device's home screen
for quick access and offline functionality.

## Language Note

This application was developed for personal use and is therefore written entirely in
**Portuguese (pt-BR)**. All UI elements, form fields, and the final generated PDF are in
Portuguese.

## Features

- Mobile-First Design: The UI is optimized for a seamless experience on smartphones.
- Dynamic Form: Includes various input types, text areas, and automatic formatting for
Brazilian phone numbers and RG documents.
- Digital Signature Pad: A full-screen, landscape-oriented canvas for capturing a
smooth, hand-drawn client signature.
- PDF Generation: Generates a clean, professional-looking PDF of the completed
checklist using jsPDF.
- Web Share API Integration: On mobile devices, it uses the native share functionality to
send the PDF via WhatsApp, email, etc.
- Desktop Fallback: On desktop browsers, the generated PDF is downloaded directly.
- Progressive Web App (PWA):
- Installable on the home screen of any compatible device.
- Offline capable thanks to a Service Worker that caches essential application files.

## Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)
- Styling: Tailwind CSS
- PDF Generation: jsPDF
- PWA: Service Workers, Web App Manifest


## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser. For local development and testing, it's recommended to
use a local server to avoid potential issues with browser security policies (CORS). A simple
way to do this is with the Live Server extension for VS Code.

### Installation

1. Clone the repository:
    git clone https://github.com/BrunoYDev/Simple-Form-Gemini.git
2. Navigate to the project directory:
    cd Simple-Form-Gemini
3. Open the index.html file in your browser or start your local server.

## How to Use

1. Open the application in a web browser.
2. Fill out all the required fields in the checklist form.
3. When you reach the signature section, click on "Click here to sign".
4. On a mobile device, you will be prompted to rotate your device to landscape mode for a
    better signing experience.
5. Draw the signature on the canvas and click "Confirm Signature".
6. Once all fields are complete, click the "Generate and Share PDF" button.
    - **On Mobile:** The native share dialog will appear.
    - **On Desktop:** The PDF file will be downloaded.

## PWA Installation

To install the app on your mobile device for easy access and offline use:

1. Host the project files (index.html, sw.js, manifest.json, and icons) on a web server with
    **HTTPS**. (e.g., GitHub Pages, Netlify, Vercel).
2. Open the hosted website link in a compatible browser (e.g., Chrome on Android or
    Safari on iOS).
3. The browser should prompt you to **"Add to Home Screen"**.
4. Follow the on-screen instructions. An icon for the app will be added to your device's
    home screen.

