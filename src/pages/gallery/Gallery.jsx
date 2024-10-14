import React from "react";
import bg from "../../assets/image capture/gallery.png";
import { CommonBanner } from "../../Component/Organization/CommonBanner";
import { HariRayaCelebrati } from "./HariRayaCelebrati";
import { HisMajesty77 } from "./HisMajesty77";
import { HisMajesty78 } from "./HisMajesty78";
import { HLP } from "./HLP";
import { LtiMillion } from "./LtiMillion";
import { Chairman } from "./Chairman";
import { useNavigate } from 'react-router-dom';


import { workersSlides, chairmanSlides, hariRayaSlides, hisMajesty77Slides, hlpSlides, hisMajesty78Slides } from "./ImageContainer";

export const Gallery = () => {
  const navigate = useNavigate();

 
  const navigateToImageGrid = (images, title, color) => {
    navigate("/images", { state: { images, title, color } });
  };

  return (
    <section className="">
      <CommonBanner background={bg} title="Gallery" />
      <div className="px-2 lg:px-24 md:px-12 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-16">

        <div className="p-2">
          <LtiMillion
            images={workersSlides}
            onClick={() => navigateToImageGrid(workersSlides, "25 Million Hour Without LTI", "#F93131"  )}
            className="h-64" 
          />
        </div>

        <div className="p-2">
          <Chairman
            images={chairmanSlides}
            onClick={() => navigateToImageGrid(chairmanSlides, "Chairman Gallery", "#53FB5E")}
            className="h-64"
          />
        </div>

        <div className="p-2">
          <HariRayaCelebrati
            images={hariRayaSlides}
            onClick={() => navigateToImageGrid(hariRayaSlides, "Hari Raya Celebration", "#4C79DA")}
            className="h-64"
          />
        </div>

        <div className="p-2">
          <HisMajesty77
            images={hisMajesty77Slides}
            onClick={() => navigateToImageGrid(hisMajesty77Slides, "His Majesty 77", "#F148E5")}
            className="h-64"
          />
        </div>

        <div className="p-2">
          <HLP
            images={hlpSlides}
            onClick={() => navigateToImageGrid(hlpSlides, "HLP Gallery", "#C9C900")}
            className="h-64"
          />
        </div>

        <div className="p-2">
          <HisMajesty78
            images={hisMajesty78Slides}
            onClick={() => navigateToImageGrid(hisMajesty78Slides, "His Majesty 78", "#F36B21")}
            className="h-64"
          />
        </div>

      </div>
    </section>
  );
};
