interface JourneyCardProps {
  year: string;
  title: string;
  details: string;
}

export default function JourneyCard({ year, title, details }: JourneyCardProps) {
  return (
    <div className="journey-content relative pl-8 pr-1">
      <div className="absolute top-0 -left-6 w-12 h-12 bg-[url('/images/brain.png')] bg-center bg-no-repeat bg-theme-main-box bg-[length:40px] rounded-full" />
      <div className="content relative p-6 border-2 border-theme-main rounded-[0.8rem] mb-8 overflow-hidden group">
        <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
        <div className="year text-[1.8rem] text-theme-main pb-2">
          <i className="bx bxs-calendar pr-2" />
          {year}
        </div>
        <h3 className="text-[2rem]">{title}</h3>
        <p className="font-montserrat text-[1.7rem] pt-2">{details}</p>
      </div>
    </div>
  );
}
