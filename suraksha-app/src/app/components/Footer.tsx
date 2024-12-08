import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div>
          <Typography variant="body1" className="font-semibold">
            Suraksha
          </Typography>
          <Typography variant="caption" className="text-gray-400">
            Empowering Safety | © {new Date().getFullYear()}
          </Typography>
        </div>

        {/* Middle Section: Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <MuiLink href="/privacy" color="inherit" underline="hover">
            Privacy Policy
          </MuiLink>
          <MuiLink href="/terms" color="inherit" underline="hover">
            Terms of Service
          </MuiLink>
          <MuiLink href="/contact" color="inherit" underline="hover">
            Contact Us
          </MuiLink>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
