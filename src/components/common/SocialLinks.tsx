import { socialMediaData } from "@/data";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`w-[215px] flex justify-between ${className}`}>
      {socialMediaData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener"
          className="relative inline-flex justify-center items-center w-[40px] h-[40px] bg-transparent border-2 border-theme-main rounded-[40%] text-[20px] text-theme-main z-[1] overflow-hidden transition-all duration-500 hover:text-theme-bg group"
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-theme-main -z-[1] transition-all duration-500 group-hover:w-full" />
          <i className={`bx bxl-${social.name.toLowerCase()} leading-none`} />
        </a>
      ))}
    </div>
  );
}
