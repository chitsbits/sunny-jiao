import { useState } from "react";
import experienceData from "../experience.json";

const Timeline = ({ isDarkMode }) => {
  const [experiences] = useState(
    experienceData.map((experience) => ({
      ...experience,
      image: experience.image
        ? `/assets/img/${experience.image}`
        : "/assets/img/placeholder.jpeg",
      image_dark: experience.image_dark
        ? `/assets/img/${experience.image_dark}`
        : experience.image
          ? `/assets/img/${experience.image}`
          : "/assets/img/placeholder.jpeg",
    })),
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] gap-12">
      {experiences.map((exp, index) => (
        <div
          className="w-full"
          style={{
            maxWidth: "min(80vw, 900px)",
          }}
        >
          <div key={index}>
            <div className="flex justify-between sm:flex-row flex-col">
              <div className="flex items-center space-x-4 mb-2 flex-shrink-0">
                <div
                  className="rounded-md w-[72px] h-[72px] flex-shrink-0"
                  style={{
                    backgroundColor: isDarkMode
                      ? exp.background_dark
                        ? exp.background_dark
                        : exp.background
                      : exp.background,
                  }}
                >
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={isDarkMode ? exp.image_dark || exp.image : exp.image}
                      alt={exp.company}
                      className="p-2 w-full h-full object-contain"
                    />
                  </a>
                </div>
                <div className="flex flex-col">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:underline"
                  >
                    {exp.company}
                  </a>
                  <div className="text-lg">{exp.position}</div>
                </div>
              </div>

              <div className="items-end sm:text-right text-left justify-stretch">
                <div className="text-lg">
                  {exp.startDate} - {exp.endDate}
                </div>
                <div className="text-md">{exp.location}</div>
              </div>
            </div>

            {/* Technology chips section */}
            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {exp.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-primary text-background text-sm font-medium px-2.5 py-0.5 rounded hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="list-disc list-outside pl-5 pt-2">
              {exp.description.map((resp, idx) => (
                <li className="mb-2" key={idx}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
