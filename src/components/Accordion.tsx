
import { Disclosure, Transition } from '@headlessui/react';
import { MinusCircle, PlusCircle } from 'lucide-react';

interface DisclosureItem {
  question: string;
  answer: string;
}

interface DisclosureGroupProps {
  items: DisclosureItem[];
}

export function DisclosureGroup({ items }: DisclosureGroupProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      {items.map((item, index) => (
        <Disclosure as="div" key={index}>
          {({ open }) => (
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <Disclosure.Button className="group flex w-full items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 text-gray-700 font-medium text-lg">
                    {index + 1}.
                  </span>
                  <span className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                    {item.question}
                  </span>
                </div>
                {open ? (
                  <MinusCircle className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
                ) : (
                  <PlusCircle className="h-6 w-6 text-gray-500 group-hover:text-gray-400" />
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
                <Disclosure.Panel className="px-6 pb-6 text-lg text-gray-600">
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