import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: string;
}

export default function ProfileImage({
  src,
  alt,
  size = "30rem",
}: ProfileImageProps) {
  return (
    <div
      className="about-img relative inline-flex justify-center items-center rounded-full aspect-square"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="w-[95%] h-[95%] object-cover rounded-full border-2 border-theme-main"
      />
      <span className="circle-spin absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-b-2 border-t-2 border-b-theme-bg-second border-t-theme-bg-second border-l-2 border-r-2 border-l-theme-main border-r-theme-main animate-aboutSpinner" />
    </div>
  );
}
