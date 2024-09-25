
import bg from "../../assets/about/44_main01.jpg";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import { TeamImage } from "../../Component/Organization/TeamImage";

export const OurWorkForce = () => {
  return (
    <section>
      <CommonBanner background={bg} title="Our Workforce" />

      <section className="max-w-screen-2xl w-[95%] mx-auto my-16">
        <TeamImage />
      </section>
    </section>
  );
};
