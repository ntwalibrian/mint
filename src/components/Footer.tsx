import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export function CustomFooter() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mint Financial</h3>
            <p className="text-gray-600 text-sm">
              We love all of our customers. Please contact us anytime.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-2 flex justify-end gap-16">
            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">News</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Help</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Report Bug</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Chat</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © 2025 Mint Financial. All Rights Reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}