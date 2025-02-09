import { Disclosure, Transition } from "@headlessui/react";
import { MinusCircle, PlusCircle } from "lucide-react";

interface DisclosureItem {
  question: string;
  answer: string;
}

interface DisclosureGroupProps {
  items: DisclosureItem[];
}

export function DisclosureGroup({ items }: DisclosureGroupProps) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      {items.map((item, index) => (
        <Disclosure as="div" key={index}>
          {({ open }) => (
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <Disclosure.Button className="group flex w-full items-center justify-between p-8">
                <div className="flex items-center gap-6">
                  <span className="flex items-center w-30 h-9 text-gray-700 font-medium text-xl">
                    {index + 1}.
                  </span>
                  <span className="text-xl font-medium text-gray-900 group-hover:text-gray-700">
                    {item.question}
                  </span>
                </div>
                {open ? (
                  <MinusCircle className="h-7 w-7 text-gray-500 group-hover:text-gray-400" />
                ) : (
                  <PlusCircle className="h-7 w-7 text-gray-500 group-hover:text-gray-400" />
                )}
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-8 pb-8 text-xl text-gray-600">
                  {item.answer}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
