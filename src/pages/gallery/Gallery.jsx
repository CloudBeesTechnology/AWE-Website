import React from "react";
import bg from "../../assets/image capture/gallery.png";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import { HariRayaCelebrati } from "./HariRayaCelebrati";
import { HisMajesty77 } from "./HisMajesty77";
import { HisMajesty78 } from "./HisMajesty78";
import { HLP } from "./HLP";
import { LtiMillion } from "./LtiMillion";
import { Chairman } from "./Chairman";
export const Gallery = () => {
  return (
    <section>
      <CommonBanner background={bg} title="Gallery" />
      <div className=" screen-size flex  justify-center max-[878]:justify-between items-center  flex-wrap my-20 gap-y-10">
        <LtiMillion/>
        <Chairman/>
        <HariRayaCelebrati />
        <HisMajesty77 />
        <HLP />
        <HisMajesty78 />
      </div>
    </section>
  );
};
