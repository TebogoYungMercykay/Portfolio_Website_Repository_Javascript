import ProgressBar from "@/components/ui/ProgressBar";
import { LanguageProgress } from "@/types";

interface SkillsColumnProps {
  title: string;
  languages: LanguageProgress[];
}

function SkillsColumn({ title, languages }: SkillsColumnProps) {
  return (
    <div className="Portfolio-column flex-[1_1_40rem]">
      <h3 className="title relative inline-block text-[2.5rem] mb-6">
        {title}
      </h3>
      <div className="Portfolio-box relative">
        <div className="Portfolio-content relative border-2 border-theme-main rounded-[0.6rem] py-2 px-6 z-[1] overflow-hidden group">
          <div className="absolute top-0 left-0 w-0 h-full bg-theme-transparent-bg -z-[1] transition-all duration-500 group-hover:w-full" />
          {languages.map((lang, idx) => (
            <ProgressBar key={idx} name={lang.name} percentage={lang.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillsSectionProps {
  mostUsed: LanguageProgress[];
  additional: LanguageProgress[];
}

export default function SkillsSection({
  mostUsed,
  additional,
}: SkillsSectionProps) {
  return (
    <div className="Portfolio-row flex flex-wrap gap-20">
      <SkillsColumn
        title="Skills - Most Used languages (Proficiency %)"
        languages={mostUsed}
      />
      <SkillsColumn
        title="Skills - Tools and languages (Proficiency %)"
        languages={additional}
      />
    </div>
  );
}
