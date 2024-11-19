import React from "react";
import { Card, Badge } from "flowbite-react";
import img from "../assets/Images/Replace Image.png";
import Label from "./Label";
function FeatCard() {
  const articles = [
    {
      title: "Meet a web designer in his studio in Amsterdam",
      description:
        "We'll get to know the designer and their design philosophy, as well as take a look...",
      author: "Jenny Wilson",
      date: "May 9, 2023",
      tags: ["UI/UX", "Studio", "Web Design", "+2"],
      image: img,
    },
    {
      title: "The Evolution of UI/UX Design: From Skeuomorphism to Flat Design",
      description:
        "Discussing the shift from realistic designs to minimalistic, flat designs.",
      author: "Jenny Wilson",
      date: "May 9, 2023",
      tags: ["UI/UX", "Studio", "Web Design", "+2"],
      image: img,
    },
    {
      title: "The Importance of User-Centered Design in IT Projects",
      description:
        "Exploring the significance of putting the user first in IT projects",
      author: "Jenny Wilson",
      date: "May 9, 2023",
      tags: ["UI/UX", "Studio", "Web Design", "+2"],
      image: img,
    },
  ];
  return (
    <div className="w-full justify-items-center ">
      <Label title="Blog"/>
      <h1 className="text-black text-lg md:text-4xl font-semibold my-3 ">
        Market News
      </h1>
      <p className="text-lightGrey text-xl text-center">
        The Latest Corporate News, and market trends
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-evenly mx-auto">
        {" "}
        {articles.map((article, index) => (
          <Card key={index} imgSrc={article.image} className="max-w-sm">
            {" "}
            <h3 className="text-lg font-semibold">{article.title}</h3>{" "}
            <p className="text-sm">{article.description}</p>{" "}
            <div className="flex items-center justify-between mt-2">
              {" "}
              <span className="text-xs text-gray-500">
                {article.author} - {article.date}
              </span>{" "}
              <div className="flex space-x-2">
                {" "}
                {article.tags.map((tag, idx) => (
                  <Badge key={idx} color="info">
                    {tag}
                  </Badge>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </Card>
        ))}{" "}
      </div>
    </div>
  );
}
export default FeatCard;
