import { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export const SpinLogo = ({ notification, text, path }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (notification) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        navigate(`${path}`);
      }, 3000);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [notification]);

  return (
    <section>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[70]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className=" font-semibold">{text}</p>
            <img
              src={logo}
              alt="Logo"
              className="mt-4 cursor-pointer w-12 h-12 mx-auto animate-spin-slow"
            />
          </div>
        </div>
      )}
    </section>
  );
};
