import machines from "../../assets/machines/machines.jpg";
import leftArrow from "../../assets/machines/leftarrow.png";
import rightArrow from "../../assets/machines/rightarrow.png";

export const Footer = () => {
  return (
    <section className="space-y-12">
      {" "}
      <div className="max-w-screen-2xl w-[95%] mx-auto">
        <article className="flex justify-center items-center gap-3 my-10 text-[#303030] text-[16px] font-medium">
          <img
            className="max-w-[30px] w-full"
            src={leftArrow}
            alt="left arrow not found"
          />
          <span className="text-center">
            Being one of the country's most professional and successful
            mechanical contractors having the capacity to carry out major
            projects.
          </span>{" "}
          <img
            className="max-w-[30px] w-full"
            src={rightArrow}
            alt="right arrow not found"
          />
        </article>
        <div className=" min-w-[290px] w-full">
          <img
            className="w-full"
            src={machines}
            alt="Machine Picture not found"
          />
        </div>
      </div>
      <div className="bg-[#303030]  text-[16px] text-white">
       <div className="flex justify-between items-center flex-wrap gap-3 max-sm:justify-center text-center max-w-screen-2xl w-[95%] mx-auto p-2">
       <article className="space-x-3">
          <span>Terms & Conditions</span>
          <span>|</span>
          <span>Privacy Policy</span>
        </article>
        <article>
          <p>Copyright 2024 Adinin Works & Engineering</p>
        </article>
       </div>
      </div>
    </section>
  );
};
