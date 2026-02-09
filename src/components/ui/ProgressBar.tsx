"use client";

interface ProgressBarProps {
  name: string;
  percentage: number;
}

export default function ProgressBar({ name, percentage }: ProgressBarProps) {
  return (
    <div className="progress py-4">
      <h3 className="text-[1.7rem] flex justify-between font-poppins">
        {name} <span className="!text-theme-text">{percentage}%</span>
      </h3>
      <div className="bar h-10 rounded-[0.6rem] border-2 border-theme-main p-2 mt-4">
        <span
          className="block h-full rounded-[0.4rem] bg-theme-main transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
