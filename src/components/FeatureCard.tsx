import React from 'react'
import { Card } from "flowbite-react";
interface Props {
    title: string;
    desc: string;
}

function FeatureCard({title,desc}: Props) {
  return (
    <Card href="#" className="max-w-sm h-40 m-3">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
    </Card>
  )
}

export default FeatureCard
