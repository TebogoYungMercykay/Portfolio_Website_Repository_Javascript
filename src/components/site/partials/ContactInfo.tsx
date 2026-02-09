interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

const contactItems: ContactItem[] = [
  { icon: "bi-geo-alt", label: "Location:", value: "Hillcrest, Pretoria, 0011" },
  { icon: "bi-envelope", label: "Email:", value: "sbkskhalo.kq@gmail.com" },
  { icon: "bi-phone", label: "Call:", value: "+27 66 411 0178" },
];

export default function ContactInfo() {
  return (
    <div className="info w-[30%] mb-[30px] max-[1300px]:p-5 max-[1300px]:m-0 max-[848px]:w-full max-[848px]:p-[10%] max-[848px]:inline-block">
      {contactItems.map((item, idx) => (
        <div key={item.label} className={idx > 0 ? "mt-10" : ""}>
          <i
            className={`bi ${item.icon} text-[32px] text-theme-main float-left w-20 h-20 bg-theme-bg-black flex justify-center items-center rounded-full transition-all duration-300 hover:bg-theme-bg hover:text-theme-text max-[1000px]:text-[28px] max-[1000px]:w-16 max-[1000px]:h-16`}
          />
          <h4 className="pl-[90px] text-[22px] font-semibold mb-1 text-theme-main max-[1000px]:text-[16px] max-[1000px]:pl-[75px] max-[848px]:text-[20px] max-[848px]:min-w-full">
            {item.label}
          </h4>
          <p className="pl-[90px] mb-0 text-[14px] text-theme-main max-[1000px]:text-[11px] max-[1000px]:pl-[75px] max-[848px]:text-[14px] max-[848px]:min-w-full">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
