import { DisclosureGroup } from "./Accordion"
import { Accordion_data } from "../mocks/AccordionData"
import { Mail } from "lucide-react"

function FAQs() {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>
        
        <DisclosureGroup items={Accordion_data}/>
        
        <div className="mt-8 sm:mt-12 bg-[#eff6ff] rounded-xl p-6 sm:p-8 text-center shadow-sm w-full sm:w-[527px] mx-auto flex flex-col justify-center items-center min-h-[180px] sm:h-[220px]">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-md">
            We're sorry we couldn't provide you with the information you were looking for. Please contact us and we'll be happy to help.
          </p>
          <button className="mt-4 w-full sm:w-[154px] h-[44px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
            <Mail className="mr-2" />
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}

export default FAQs
