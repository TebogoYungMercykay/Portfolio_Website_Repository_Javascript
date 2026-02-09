"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center text-center flex-wrap gap-5 py-8 px-[9%] bg-theme-transparent-bg">
      <div className="relative">
        <p className="font-montserrat text-[1.7rem]">
          Copyright © <span>{year}</span> All Rights Reserved By Sello Selepe{" "}
          <a href="mailto:sbkskhalo.kq@gmail.com" className="text-theme-main">
            sbkskhalo.kq@gmail.com
          </a>
        </p>
      </div>
      <div className="relative">
        <a
          href="#"
          title="Scroll Up"
          className="relative inline-flex justify-center items-center p-3 bg-theme-main border-2 border-theme-main rounded-[0.6rem] z-[1] overflow-hidden group"
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg-second -z-[1] transition-all duration-500 group-hover:w-full group-hover:bg-theme-bg" />
          <i className="bx bx-up-arrow-alt text-[2.4rem] text-theme-bg transition-colors duration-500 group-hover:text-theme-main" />
        </a>
      </div>
    </footer>
  );
}
