import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0f] text-gray-300 pt-14 pb-8 px-6 md:px-16 lg:px-32">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            ShowBook<span className="text-red-600">.</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Book movie tickets instantly. Discover the latest releases, 
            nearby cinemas, and exclusive offers.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Now Showing</li>
            <li className="hover:text-white cursor-pointer">Coming Soon</li>
            <li className="hover:text-white cursor-pointer">Cinemas</li>
            <li className="hover:text-white cursor-pointer">Offers</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get the App</h3>
          <div className="flex flex-col gap-3">
            <button className="bg-white/10 hover:bg-white/20 transition rounded-lg px-4 py-2 text-sm">
              📱 Download on Play Store
            </button>
            <button className="bg-white/10 hover:bg-white/20 transition rounded-lg px-4 py-2 text-sm">
              🍎 Download on App Store
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Talkies. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <span className="hover:text-white cursor-pointer">Instagram</span>
          <span className="hover:text-white cursor-pointer">Twitter</span>
          <span className="hover:text-white cursor-pointer">YouTube</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
