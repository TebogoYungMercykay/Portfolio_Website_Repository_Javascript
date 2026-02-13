import JourneyCard from "./JourneyCard";
import { JourneyTimelineProps } from "@/types";

function isConnectedToNext<T extends { group?: string }>(items: T[], index: number): boolean {
  if (index >= items.length - 1) return false;
  const current = items[index];
  const next = items[index + 1];
  return !!(current.group && next.group && current.group === next.group);
}

export default function JourneyTimeline({
  education,
  experience,
}: JourneyTimelineProps) {
  const maxItems = Math.max(education.length, experience.length);

  return (
    <div className="journey flex justify-center items-center flex-col pb-12 relative w-full">
      <h2 className="heading relative text-[5rem] mb-12 text-center">
        My <span className="text-theme-main">Journey</span>
      </h2>

      {/* Desktop Layout - Row by row for matching heights */}
      <div className="hidden lg:block w-full max-w-[1200px] px-4">
        {/* Column Headers */}
        <div className="grid grid-cols-2 gap-x-20 mb-6">
          <h3 className="title relative inline-block text-[2.5rem] ml-8">
            Education
          </h3>
          <h3 className="title relative inline-block text-[2.5rem] ml-8">
            Experience
          </h3>
        </div>

        {/* Row by row - cards in same row match heights */}
        <div className="flex flex-col gap-8">
          {Array.from({ length: maxItems }).map((_, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-x-20">
              {/* Education Card */}
              {education[idx] ? (
                <JourneyCard
                  year={education[idx].year}
                  title={education[idx].institution}
                  details={education[idx].details}
                  connectToNext={isConnectedToNext(education, idx)}
                />
              ) : <div />}

              {/* Experience Card */}
              {experience[idx] ? (
                <JourneyCard
                  year={experience[idx].year}
                  title={experience[idx].position}
                  details={experience[idx].details}
                  connectToNext={isConnectedToNext(experience, idx)}
                />
              ) : <div />}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout - Stacked columns */}
      <div className="lg:hidden w-full px-4">
        <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
          Education
        </h3>
        <div className="flex flex-col gap-8 mb-12">
          {education.map((item, idx) => (
            <JourneyCard
              key={`edu-${idx}`}
              year={item.year}
              title={item.institution}
              details={item.details}
              connectToNext={isConnectedToNext(education, idx)}
            />
          ))}
        </div>

        <h3 className="title relative inline-block text-[2.5rem] mb-6 ml-8">
          Experience
        </h3>
        <div className="flex flex-col gap-8">
          {experience.map((item, idx) => (
            <JourneyCard
              key={`exp-${idx}`}
              year={item.year}
              title={item.position}
              details={item.details}
              connectToNext={isConnectedToNext(experience, idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
