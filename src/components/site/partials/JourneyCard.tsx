import { JourneyCardProps } from "@/types";

export default function JourneyCard({ year, title, details, connectToNext = false }: JourneyCardProps) {
  return (
    <div className="journey-content relative pl-8 pr-1 h-full">
      <div 
        className="absolute left-0 top-0 w-[2px] bg-theme-main"
        style={{ height: connectToNext ? 'calc(100% + 2rem)' : '100%' }}
      />
      {/* Timeline icon */}
      <div className="absolute top-0 -left-6 w-12 h-12 bg-[url('/images/brain.png')] bg-center bg-no-repeat bg-theme-main-box bg-[length:40px] rounded-full z-10" />
      {/* Card content */}
      <div className="content relative p-6 border-2 border-theme-main rounded-[0.8rem] overflow-hidden group flex flex-col h-full transition-all duration-300 hover:border-theme-text hover:shadow-[0_0_15px_var(--main-color)]">
        <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
        <div className="year text-[1.8rem] text-theme-main pb-2 transition-colors duration-300 group-hover:text-theme-text">
          <i className="bx bxs-calendar pr-2" />
          {year}
        </div>
        <h3 className="text-[2rem] transition-colors duration-300 group-hover:text-theme-main">{title}</h3>
        <p className="font-montserrat text-[1.7rem] pt-2">{details}</p>
      </div>
    </div>
  );
}
