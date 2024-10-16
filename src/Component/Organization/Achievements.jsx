import { useEffect } from "react";
import { CommonBanner } from "./CommonBanner";
import bg from "../../assets/machines/Organization.jpg";
import certificate1 from "../../assets/achievements/certificate1.png";
import certificate2 from "../../assets/achievements/certificate2.png";
import certificate3 from "../../assets/achievements/certificate3.png";
import certificate13 from "../../assets/achievements/certificate13.png";
import certificate4 from "../../assets/achievements/certificate4.png";
import certificate5 from "../../assets/achievements/certificate5.png";
import certificate6 from "../../assets/achievements/certificate6.png";
import certificate7 from "../../assets/achievements/certificate7.png";
import certificate8 from "../../assets/achievements/certificate8.png";
import certificate9 from "../../assets/achievements/certificate9.png";
import certificate10 from "../../assets/achievements/certificate10.png";
import certificate11 from "../../assets/achievements/certificate11.png";
import certificate12 from "../../assets/achievements/certificate12.png";
import certificate17 from "../../assets/achievements/certificate17.jpg";
import certificate14 from "../../assets/achievements/certificate14.jpg";
import certificate15 from "../../assets/achievements/certificate15.jpg";
import certificate16 from "../../assets/achievements/certificate16.jpg";
import certificate19 from "../../assets/achievements/certificate19.jpg";
import certificate20 from "../../assets/achievements/certificate20.jpg";
import certificate18 from "../../assets/achievements/certificate18.jpg";


const certificates = [
//   certificate1,
  certificate2,
  certificate13,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
  certificate7,
  certificate8,
  certificate9,
  certificate10,
  certificate11,
  certificate12,
  certificate17,
  certificate14,
  certificate15,
  certificate16,
  certificate19,
  certificate20,
  certificate18,
];

const certificateDescriptions = [
    "Contractor With Highest PAKAT Submission",
    "Department Of Energy",
    "Most Active Contractor",
    "Brunei Energy Industry Integrity Pact",
    "Mini Plant Project, IBTE Jefri Bolkiah Campus",
    "Safety Award",
    "IAPS April Maintenance Campaign",
    "Achievement of 5 Years Free of Lost Time Injury (LTI)",
    "UBD Appreciation Award",
    "MKJB Career Exhibition (2013)", 
    "IBTE School of Energy and Engineering Satellite Market Day 2018", 
    "IBTE Sultan Bolkiah Campus Market Day 2019", 
    "IBTE Central Market Day", 
    "Pesta Kerjaya 2022", 
    "Recruitment Fair 2022", 
    "Pesta Convo IBTE 2023", 
  ];

const Achievements = () => {
    
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

  return (
    <section>
      {/* Banner Section */}
      <CommonBanner background={bg} title="Achievements & Certification" />

      {/* First Row for the First 4 Images */}
      <div className="container mx-auto py-8 px-4 md:px-56">
        {/* <h2 className="text-center text-3xl font-bold mb-8">Our Achievements</h2> */}

        {/* First row: 4 certificates */}
        <h2 className="text-xl font-bold py-4">ISO Certicates</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-12 mb-8">
          {certificates.slice(0, 3).map((certificate, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={certificate}
                alt={`Certificate ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-fit"
              />
            </div>
          ))} 
        </div>

        {/* Remaining rows: Polaroid style for images after the 4th */}
        <h2 className="text-xl font-bold py-4">Awards</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {certificates.slice(4).map((certificate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg mb-6 p-4 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={certificate}
                alt={`Certificate ${index + 5}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-fit"
              />
              <div className="text-center mt-4">
                <p>{certificateDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
