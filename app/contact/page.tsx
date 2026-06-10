import {
  LocateFixedIcon,
  LocateIcon,
  Mail,
  MessageCircle,
  Phone,
  Timer,
} from "lucide-react";
import React from "react";

const contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-evenly pt-10 gap-1 bg-forbackround">
      <div className="flex flex-col gap-2 items-center ">
        <span className="flex text-primary bg-primary/10 w-37 rounded-2xl h-8 font-semibold items-center justify-evenly">
          <MessageCircle className="w-4 h-5" /> GET IN TOUCH
        </span>
        <span className="capitalize font-bold text-3xl">contact us</span>
        <span className="text-lg text-olive-700">
          We'd love to hear from you
        </span>
      </div>
      <div className="flex h-[50%]  w-full flex-col lg:flex-row items-center justify-evenly px-5 gap-3 py-2">
        <div className="flex flex-col h-full gap-2 py-1 w-[90%] lg:w-[45%]">
          <div className="flex gap-2 p-4 rounded-2xl items-center justify-start w-[90%] h-[20%] lg:w-full border-2 border-olive-700/20 bg-white hover:shadow-md hover:shadow-olive-400">
            <Phone className="text-primary w-10 h-10 p-2 rounded-xl bg-primary/10" />
            <div className="flex flex-col gap-2">
              <span className="capitalize text-bold">phone</span>
              <span className="text-olive-700">+93700123456</span>
            </div>
          </div>
          <div className="flex gap-2 p-4 rounded-2xl items-center justify-start w-[90%] h-[20%] lg:w-full border-2 border-olive-700/20 bg-white hover:shadow-md hover:shadow-olive-400">
            <Mail className="text-primary w-10 h-10 p-2 rounded-xl bg-primary/10" />
            <div className="flex flex-col gap-2">
              <span className="capitalize text-bold">email</span>
              <span className="text-olive-700">pizza@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-2 p-4 rounded-2xl items-center justify-start w-[90%] h-[20%] lg:w-full border-2 border-olive-700/20 bg-white hover:shadow-md hover:shadow-olive-400">
            <LocateIcon className="text-primary w-10 h-10 p-2 rounded-xl bg-primary/10" />
            <div className="flex flex-col gap-2">
              <span className="capitalize text-bold">address</span>
              <span className="text-olive-700 capitalize">
                shahr-e-now kabul afghanistan
              </span>
            </div>
          </div>
          <div className="flex gap-2 p-4 rounded-2xl items-center justify-start w-[90%] h-[20%] lg:w-full border-2 border-olive-700/20 bg-white hover:shadow-md hover:shadow-olive-400">
            <Timer className="text-green-800 w-10 h-10 p-2 rounded-xl bg-green-600/80" />
            <div className="flex flex-col gap-2">
              <span className="capitalize text-bold">phone</span>
              <span className="text-olive-700">+93700123456</span>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876155.8386325764!2d67.70502805176233!3d34.51021870671384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1780934185331!5m2!1sen!2s"
          className="w-[90vw] h-[50vh] lg:w-[45%] rounded-2xl py-0 lg:h-[70vh]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default contact;
