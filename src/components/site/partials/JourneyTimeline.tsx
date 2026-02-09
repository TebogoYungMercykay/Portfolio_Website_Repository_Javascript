import JourneyCard from "./JourneyCard";
import { EducationItem, ExperienceItem } from "@/types";

interface JourneyTimelineProps {
  education: EducationItem[];
  experience: ExperienceItem[];
}

export default function JourneyTimeline({
  education,
  experience,
}: JourneyTimelineProps) {
  return (
    <div className="journey flex justify-center items-center flex-col pb-12 relative">
      <h2 className="heading relative text-[5rem] mb-12 text-center">
        My <span className="text-theme-main">Journey</span>
      </h2>

      <div className="journey-row flex flex-wrap gap-20">
        {/* Education */}
        <div className="journey-column flex-[1_1_40rem]">
          <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
            Education
          </h3>
          <div className="journey-box relative border-l-2 border-theme-main">
            {education.map((item, idx) => (
              <JourneyCard
                key={idx}
                year={item.year}
                title={item.institution}
                details={item.details}
              />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="journey-column flex-[1_1_40rem]">
          <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
            Experience
          </h3>
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="journey-box relative border-l-2 border-theme-main"
            >
              <JourneyCard
                year={item.year}
                title={item.position}
                details={item.details}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
