import bg from "../../assets/machines/44_main00.jpg";
import { CommonBanner } from "./CommonBanner";
import { TeamImage } from "./TeamImage";

export const Organization = () => {
  return (
    <section>
      <CommonBanner background={bg} title="Organization" />

      <section className="max-w-screen-2xl w-[95%] mx-auto my-16">
        <TeamImage />
      </section>
    </section>
  );
};
