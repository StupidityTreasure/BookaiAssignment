import React from 'react';

function Footer() {
    return (
        <footer className="clr text-white py-8">
            <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
                {/* Logo or Brand */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">BOOKAI</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 justify-center mb-4 md:mb-0">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#services" className="hover:text-gray-400">Services</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6 justify-center">
                    <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-400">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p>&copy; 2024 YourBrand. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

