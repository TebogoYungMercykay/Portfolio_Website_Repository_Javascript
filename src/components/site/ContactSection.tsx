"use client";

import { useState, FormEvent } from "react";
import SocialLinks from "@/components/common/SocialLinks";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, mobile_number, subject, message } = formData;

    // Validation
    if (!name || !email || !mobile_number || !subject || !message) {
      alert("All fields must be filled out");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Name must contain only letters");
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!/^\d+$/.test(mobile_number)) {
      alert("Mobile number must contain only digits");
      return;
    }

    try {
      const form = new FormData();
      form.append("data[name]", name);
      form.append("data[email]", email);
      form.append("data[mobile_number]", mobile_number);
      form.append("data[subject]", subject);
      form.append("data[message]", message);

      await fetch("https://sheetdb.io/api/v1/cmmdvweoegki7", {
        method: "POST",
        body: form,
      });

      alert("Thank You for Contacting Me, You shall have a Great Day ahead.");
      setFormData({ name: "", email: "", mobile_number: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      className="contact min-h-screen w-screen pb-28 bg-theme-bg-second items-center justify-center pt-40 px-[9%] max-[991px]:px-[4%]"
      id="contact"
    >
      <h2 className="heading relative text-[5rem] mb-12 text-center inline-block left-1/2 -translate-x-1/2">
        Contact <span className="text-theme-main">Me!</span>
      </h2>

      <div className="outer-container flex items-center justify-center px-[60px] mx-[10%] mt-[30px] mb-[30px] z-[1] rounded-xl bg-theme-projects-grey max-[1300px]:px-[25px] max-[1300px]:mx-[40px] max-[848px]:flex-col max-[848px]:p-0 max-[848px]:m-0">
        {/* Contact Info */}
        <div className="info w-[30%] mb-[30px] max-[1300px]:p-5 max-[1300px]:m-0 max-[848px]:w-full max-[848px]:p-[10%] max-[848px]:inline-block">
          <div className="address">
            <i className="bi bi-geo-alt text-[32px] text-theme-main float-left w-20 h-20 bg-theme-bg-black flex justify-center items-center rounded-full transition-all duration-300 hover:bg-theme-bg hover:text-theme-text max-[1000px]:text-[28px] max-[1000px]:w-16 max-[1000px]:h-16" />
            <h4 className="pl-[90px] text-[22px] font-semibold mb-1 text-theme-main max-[1000px]:text-[16px] max-[1000px]:pl-[75px] max-[848px]:text-[20px] max-[848px]:min-w-full">
              Location:
            </h4>
            <p className="pl-[90px] mb-0 text-[14px] text-theme-main max-[1000px]:text-[11px] max-[1000px]:pl-[75px] max-[848px]:text-[14px] max-[848px]:min-w-full">
              Hillcrest, Pretoria, 0011
            </p>
          </div>

          <div className="email mt-10">
            <i className="bi bi-envelope text-[32px] text-theme-main float-left w-20 h-20 bg-theme-bg-black flex justify-center items-center rounded-full transition-all duration-300 hover:bg-theme-bg hover:text-theme-text max-[1000px]:text-[28px] max-[1000px]:w-16 max-[1000px]:h-16" />
            <h4 className="pl-[90px] text-[22px] font-semibold mb-1 text-theme-main max-[1000px]:text-[16px] max-[1000px]:pl-[75px] max-[848px]:text-[20px] max-[848px]:min-w-full">
              Email:
            </h4>
            <p className="pl-[90px] mb-0 text-[14px] text-theme-main max-[1000px]:text-[11px] max-[1000px]:pl-[75px] max-[848px]:text-[14px] max-[848px]:min-w-full">
              sbkskhalo.kq@gmail.com
            </p>
          </div>

          <div className="phone mt-10">
            <i className="bi bi-phone text-[32px] text-theme-main float-left w-20 h-20 bg-theme-bg-black flex justify-center items-center rounded-full transition-all duration-300 hover:bg-theme-bg hover:text-theme-text max-[1000px]:text-[28px] max-[1000px]:w-16 max-[1000px]:h-16" />
            <h4 className="pl-[90px] text-[22px] font-semibold mb-1 text-theme-main max-[1000px]:text-[16px] max-[1000px]:pl-[75px] max-[848px]:text-[20px] max-[848px]:min-w-full">
              Call:
            </h4>
            <p className="pl-[90px] mb-0 text-[14px] text-theme-main max-[1000px]:text-[11px] max-[1000px]:pl-[75px] max-[848px]:text-[14px] max-[848px]:min-w-full">
              +27 66 411 0178
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="w-full mt-[30px] mb-[30px] text-center ml-[60px] max-[848px]:w-[80%] max-[848px]:ml-0"
        >
          <div className="input-box relative flex justify-between flex-wrap">
            <div className="input-field relative w-[49%] my-3 max-[462px]:w-full">
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none"
              />
            </div>
            <div className="input-field relative w-[49%] my-3 max-[462px]:w-full">
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none"
              />
            </div>
          </div>

          <div className="input-box relative flex justify-between flex-wrap">
            <div className="input-field relative w-[49%] my-3 max-[462px]:w-full">
              <input
                id="mobile_number"
                type="number"
                placeholder="Mobile Number"
                required
                value={formData.mobile_number}
                onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                className="w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none"
              />
            </div>
            <div className="input-field relative w-[49%] my-3 max-[462px]:w-full">
              <input
                id="subject"
                type="text"
                placeholder="Email Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none"
              />
            </div>
          </div>

          <div className="textarea-field relative my-3 mb-11 flex">
            <textarea
              id="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main resize-none placeholder:text-theme-text focus:outline-none"
            />
          </div>

          <div className="btn-box btns inline-block w-60">
            <button
              type="submit"
              className="btn relative inline-flex justify-center items-center w-60 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 cursor-pointer hover:text-theme-main group py-2 px-1.5"
            >
              <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Centered social links */}
      <div className="flex">
        <SocialLinks className="mt-[100px] mb-0 max-[520px]:w-40 max-[462px]:w-[120px]" />
      </div>
    </section>
  );
}
