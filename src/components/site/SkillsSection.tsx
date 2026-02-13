import ProgressBar from "@/components/ui/ProgressBar";
import { SkillsSectionProps, SkillsColumnProps } from "@/types";

function SkillsColumn({ title, languages }: SkillsColumnProps) {
  return (
    <div className="flex flex-col h-full">
      <h3 className="title relative inline-block text-[2.5rem] mb-6">
        {title}
      </h3>
      <div className="Portfolio-box relative flex-1">
        <div className="Portfolio-content relative border-2 border-theme-main rounded-[0.6rem] py-2 px-6 z-[1] overflow-hidden group h-full transition-all duration-300 hover:border-theme-text hover:shadow-[0_0_15px_var(--main-color)]">
          <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
          {languages.map((lang, idx) => (
            <ProgressBar key={idx} name={lang.name} percentage={lang.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection({
  mostUsed,
  additional,
}: SkillsSectionProps) {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <SkillsColumn
          title="Skills - Most Used languages (Proficiency %)"
          languages={mostUsed}
        />
        <SkillsColumn
          title="Skills - Tools and languages (Proficiency %)"
          languages={additional}
        />
      </div>
    </div>
  );
}
