import React from "react";
import VerticalSlider from "../../Components/base/VerticalSlider/VerticalSlider";

const sliderData = [
  {
    paragraph:
      "Most uPVC tends to change its colour and property due to sustained exposure to UV radiation. The engineered blend used in MOIRA windows is UV stabilised that gives it a long life.",
    heading: "LONG-LASTING STRENGTH",
    subHeading: "",
    photos: [],
  },
  {
    paragraph:
      "The multi-chambered design of MOIRA profiles prevents the transfer of heat inside your house. This makes your house energy efficient by reducing your air-conditioning cost significantly.",
    heading: "ENERGY-EFFICIENT",
    subHeading: "",
    photos: [],
  },
  {
    heading: "HEALTHIER INDOOR AIR QUALITY",
    paragraph:
      "The usage of high quality wool pile along with dual layer sealing system in MOIRA windows prevents dust and pollution from entering your home. This ensures the air inside your home is cleaner and healthier.",
    subHeading: "",
    photos: [],
  },
  {
    heading: "SAFETY & SECURE",
    paragraph:
      "Every MOIRA window is reinforced by a concealed GI section which is designed based on the wind pressure of that region, providing additional strength and stability. Making your home safe and secure.",
    subHeading: "",
    photos: [],
  },
  {
    heading: "LEAD-FREE",
    paragraph:
      "MOIRA windows are lead-free in line with the global trend to eliminate the use of lead in the construction industry. So, you can be sure about the health of your family",
    subHeading: "",
    photos: [],
  },
  {
    heading: "WEATHERPROOF",
    paragraph:
      "The TPV gasket in MOIRA windows keeps rainwater and wind away from your home, while the impact modifier provides resistance to the window during extreme weather conditions. This makes a MOIRA window almost invincible in any kind of weather.",
    subHeading: "",
    photos: [],
  },
];
const Why = () => {
  return (
    <div>
      <VerticalSlider
        title={"Features that Stay Perfect for Decades"}
        data={sliderData}
      />
    </div>
  );
};

export default Why;
