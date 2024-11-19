import  { useState, useEffect } from "react";
import img from "../assets/Images/Replace Image.png";
import Label from "./Label";

function FeatCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visibleCards, setVisibleCards] = useState(isMobile ? 1 : 3);

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
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCards(mobile ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleCards(prevVisible => prevVisible + (isMobile ? 1 : 3));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <Label title="Blog"/>
      </div>
      <h1 className="text-black text-lg md:text-4xl font-semibold my-3 text-center">
        Market News
      </h1>
      <p className="text-lightGrey text-xl text-center mb-8">
        The Latest Corporate News, and market trends
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {articles.slice(0, visibleCards).map((article, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
            sm:max-w-xs mx-auto"
          >
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-28 sm:h-36 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                {article.title}
              </h3>
              <p className="text-[0.65rem] sm:text-xs text-gray-600 mb-2">
                {article.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] sm:text-xs text-gray-500">
                  {article.author} - {article.date}
                </span>
                <div className="flex space-x-1">
                  {article.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-1 py-0.5 bg-blue-100 text-blue-800 text-[0.5rem] sm:text-[0.6rem] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-1 py-0.5 bg-gray-100 text-gray-800 text-[0.5rem] sm:text-[0.6rem] rounded">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCards < articles.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-4 py-1.5 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default FeatCard;