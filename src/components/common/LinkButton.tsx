interface LinkButtonProps {
  href: string;
  icon?: string;
  label: string;
  external?: boolean;
}

export default function LinkButton({
  href,
  icon,
  label,
  external = true,
}: LinkButtonProps) {
  return (
    <div className="btn-box btns inline-block w-60">
      <a
        href={href}
        className="btn relative inline-flex justify-center items-center w-60 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 hover:text-theme-main group py-2 px-1.5"
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
        {icon && <i className={`${icon} mr-2`} />}
        {label}
      </a>
    </div>
  );
}
