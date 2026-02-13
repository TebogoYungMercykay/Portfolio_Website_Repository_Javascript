import { ProgressBarProps } from "@/types";

export default function ProgressBar({ name, percentage }: ProgressBarProps) {
  return (
    <div className="progress py-4 group/progress cursor-pointer">
      <h3 className="text-[1.5rem] font-normal flex justify-between font-poppins transition-colors duration-300 group-hover/progress:text-theme-main">
        {name} <span className="!text-theme-text transition-colors duration-300 group-hover/progress:!text-theme-main">{percentage}%</span>
      </h3>
      <div className="bar h-10 rounded-[0.6rem] border-2 border-theme-main p-2 mt-4 transition-all duration-300 group-hover/progress:border-theme-text group-hover/progress:shadow-[0_0_10px_var(--main-color)]">
        <span
          className="block h-full rounded-[0.4rem] bg-theme-main transition-all duration-500 group-hover/progress:bg-theme-text"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
