// components/layout/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-100/50 shadow-[0_-1px_10px_rgba(0,0,0,0.02)] mt-auto">
      {/* Top Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-cyan-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-xl">🌦️</span>
                </div>
                <span className="text-lg font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Weather Disease AI
                </span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                AI-powered health predictions using machine learning, real-time weather data, and Gemini AI.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200 group"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200 group"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-200 group"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/prediction" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Prediction
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/help" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Weather Disease AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                All systems operational
              </span>
              <span className="text-xs text-gray-400">
                Built with ❤️ using React &amp; Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}