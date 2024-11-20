import {    
  FaFacebook,    
  FaInstagram,    
  FaTwitter,    
  FaGithub,    
  FaDribbble  
} from 'react-icons/fa';

export function CustomFooter() {
  return (
    <footer className="bg-white py-8 mt-2.5 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Mint Financial</span>
            </div>
            <p className="text-gray-600 text-sm">
              We love all of our customers. Please contact us anytime.
            </p>
          </div>

          {/* Company and Support Links Wrapper */}
          <div className="md:col-span-2 flex justify-end space-x-12">
            {/* Company Links */}
            <div className="text-right">
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">News</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Career</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="text-right pl-12">
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Report a Bug</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Chat support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Mint Financial. All Rights Reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}