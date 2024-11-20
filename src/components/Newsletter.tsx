import { Mail } from 'lucide-react'
import { Transition } from '@headlessui/react'

export default function Newsletter() {
  

  return (
    <div className="mt-8 sm:mt-16 bg-lightBlue rounded-xl shadow-md w-full max-w-5xl min-h-[300px] sm:h-[372px] mx-auto relative overflow-hidden px-4 sm:px-0">
      <div className="h-full flex flex-col sm:flex-row items-center justify-between p-6 sm:px-16 relative z-10">
        <div className="max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8">
            Stay up to date with the latest news, announcements, and articles.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                
              />
            </div>
            
            <Transition
              show={true}
              enter="transition-opacity duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <button
                className="w-full sm:w-auto bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                
              >
                Subscribe
              </button>
            </Transition>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            We care about your data. Read our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#eff6ff]/50 to-transparent rounded-xl" />
    </div>
  )
}