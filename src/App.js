import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import DefaultLayout from "./Components/layout/DefaultLayout";
import OurCompany from "./About/OurCompany/OurCompany";
import Careers from "./About/Careers/Careers";
import Media from "./About/Media/Media";
import CSRPolicy from "./About/CSRPolicy/CSRPolicy";
import Gallery from "./About/Gallery/Gallery";
import Windows from "./Products/Types/Sliding/Windows/Windows";
import Doors from "./Products/Types/Casement/Doors/Doors";
import CasementWindows from "./Products/Types/Casement/Windows/Windows";
import CasementDoors from "./Products/Types/Casement/Doors/Doors";
import Arched from "./Products/Types/Specialities/Arched/Arched";
import Combination from "./Products/Types/Specialities/Combination/Combination";
import Lamination from "./Products/Types/Specialities/Lamination/Lamination";
import BayWindow from "./Products/Types/Specialities/BayWidow/BayWindow";
import Premium from "./Home/Premium/Premium";
import CasementSeriesOne from "./Products/Series/CasementSeries/1-39CasementSeries/CasementSeriesOne";
import CasementSeriesTwo from "./Products/Series/CasementSeries/1-60CasementSeries/CasementSeriesTwo";
import SlidingSOne from "./Technical/ProfileDrawing/SlidingSeries/SlidingSOne/SlidingSOne";
import SlidingSTwo from "./Technical/ProfileDrawing/SlidingSeries/SlidingSTwo/SlidingSTwo";
import SlidingSThree from "./Technical/ProfileDrawing/SlidingSeries/SlidingSThree/SlidingSThree";
import SlidingSFour from "./Technical/ProfileDrawing/SlidingSeries/SlidingSFour/SlidingSFour";
import SlidingSFive from "./Technical/ProfileDrawing/SlidingSeries/SlidingSFive/SlidingSFive";
import Overview from "./Products/Accessories/Overview/Overview";
import CompleteSets from "./Products/Accessories/CompleteSets/CompleteSets";
import SlideDoor from "./Products/Accessories/SlideDoor/SlideDoor";
import TurnWindow from "./Products/Accessories/TurnWindow/TurnWindow";
import Strikers from "./Products/Accessories/Strikers/Strikers";
import Handles from "./Products/Accessories/Handles/Handles";
import Hinges from "./Products/Accessories/Hinges/Hinges";
import Miscellaneous from "./Products/Accessories/Miscellaneous/Miscellaneous";
import Plastic from "./Products/Accessories/Plastic/Plastic";
import Rollers from "./Products/Accessories/Rollers/Rollers";
import Screw from "./Products/Accessories/Screw/Screw";
import Why from "./MoiraAdvantage/why/Why";
import Quality from "./MoiraAdvantage/Quality/Quality";
import Production from "./MoiraAdvantage/Production/Production";
import OurNetwork from "./MoiraAdvantage/OurNetwork/OurNetwork";
import Substainability from "./MoiraAdvantage/Substainability/Substainability";
import Hotels from "./Technical/Solutions/Hotels/Hotels";
import Offices from "./Technical/Solutions/Offices/Offices";
import Villas from "./Technical/Solutions/Villas/Villas";
import Apartments from "./Technical/Solutions/Apartments/Apartments";
import Schools from "./Technical/Solutions/Schools/Schools";
import Hospitals from "./Technical/Solutions/Hospitals/Hospitals";
import AllProfile from "./Technical/ProfileDrawing/AllProfile/AllProfile";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Home Routes */}
          <Route
            path="/"
            element={<DefaultLayout exact path="/" component={Home} />}
          ></Route>

          {/* About Routes */}
          <Route
            path="/OurCompany"
            element={
              <DefaultLayout exact path="/OurCompany" component={OurCompany} />
            }
          ></Route>
          <Route
            path="/Careers"
            element={
              <DefaultLayout exact path="/Careers" component={Careers} />
            }
          ></Route>
          <Route
            path="/Media"
            element={<DefaultLayout exact path="/Media" component={Media} />}
          ></Route>
          <Route
            path="/CSRPolicy"
            element={
              <DefaultLayout exact path="/CSRPolicy" component={CSRPolicy} />
            }
          ></Route>
          <Route
            path="/Gallery"
            element={
              <DefaultLayout exact path="/Gallery" component={Gallery} />
            }
          ></Route>

          {/* Product Routes */}
          {/* Product Types Routes */}
          {/* Product Types Sliding Routes */}

          <Route
            path="/Sliding-Windows"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Windows"
                component={Windows}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Doors"
            element={
              <DefaultLayout exact path="/Sliding-Doors" component={Doors} />
            }
          ></Route>
          {/* Product Types Casement Routes */}
          <Route
            path="/Casement-Windows"
            element={
              <DefaultLayout
                exact
                path="/Casement-Windows"
                component={CasementWindows}
              />
            }
          ></Route>
          <Route
            path="/Casement-Doors"
            element={
              <DefaultLayout
                exact
                path="/Casement-Doors"
                component={CasementDoors}
              />
            }
          ></Route>

          {/* Product Types Specialities Routes */}
          <Route
            path="/Arched"
            element={<DefaultLayout exact path="/Arched" component={Arched} />}
          ></Route>
          <Route
            path="/Combination"
            element={
              <DefaultLayout
                exact
                path="/Combination"
                component={Combination}
              />
            }
          ></Route>
          <Route
            path="/Lamination"
            element={
              <DefaultLayout exact path="/Lamination" component={Lamination} />
            }
          ></Route>
          <Route
            path="/Bay-Window"
            element={
              <DefaultLayout exact path="/Bay-Window" component={BayWindow} />
            }
          ></Route>

          {/* Product Types Premium Routes */}
          <Route
            path="/Premium"
            element={
              <DefaultLayout exact path="/Premium" component={Premium} />
            }
          ></Route>

          {/* Series  Routes */}
          {/* Series Casement Series  Routes */}
          <Route
            path="/Casement-Series-1-60"
            element={
              <DefaultLayout
                exact
                path="/Casement-Series-1-60"
                component={CasementSeriesOne}
              />
            }
          ></Route>
          <Route
            path="/Casement-Series-1-39"
            element={
              <DefaultLayout
                exact
                path="/Casement-Series-1-39"
                component={CasementSeriesTwo}
              />
            }
          ></Route>
          {/* Series Sliding Series  Routes */}
          <Route
            path="/Sliding-Series-1-75"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-75"
                component={SlidingSOne}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-64"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-64"
                component={SlidingSTwo}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-60"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-60"
                component={SlidingSThree}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-50"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-50"
                component={SlidingSFour}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-44"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-44"
                component={SlidingSFive}
              />
            }
          ></Route>

          {/* Prduct Accessories Routes */}
          <Route
            path="/Overview"
            element={
              <DefaultLayout exact path="/Overview" component={Overview} />
            }
          ></Route>
          <Route
            path="/Complete-Set"
            element={
              <DefaultLayout
                exact
                path="/Complete-Set"
                component={CompleteSets}
              />
            }
          ></Route>
          <Route
            path="/Slide-door"
            element={
              <DefaultLayout exact path="/Slide-door" component={SlideDoor} />
            }
          ></Route>
          <Route
            path="/Turn-window"
            element={
              <DefaultLayout exact path="/Turn-window" component={TurnWindow} />
            }
          ></Route>
          <Route
            path="/Handles"
            element={
              <DefaultLayout exact path="/Handles" component={Handles} />
            }
          ></Route>
          <Route
            path="/Hinges-Friction-Hinges"
            element={
              <DefaultLayout
                exact
                path="/Hinges-Friction-Hinges"
                component={Hinges}
              />
            }
          ></Route>
          <Route
            path="/Miscellaneous-Parts"
            element={
              <DefaultLayout
                exact
                path="/Miscellaneous-Parts"
                component={Miscellaneous}
              />
            }
          ></Route>
          <Route
            path="/Rollers"
            element={
              <DefaultLayout exact path="/Rollers" component={Rollers} />
            }
          ></Route>
          <Route
            path="/Screw-Fasteners"
            element={
              <DefaultLayout exact path="/Screw-Fasteners" component={Screw} />
            }
          ></Route>

          {/* Moira Advantage Routes */}
          <Route
            path="/why-moira"
            element={<DefaultLayout exact path="/why-moira" component={Why} />}
          ></Route>
          <Route
            path="/Quality"
            element={
              <DefaultLayout exact path="/Quality" component={Quality} />
            }
          ></Route>
          <Route
            path="/Production"
            element={
              <DefaultLayout exact path="/Production" component={Production} />
            }
          ></Route>
          <Route
            path="/Our-Network"
            element={
              <DefaultLayout exact path="/Our-Network" component={OurNetwork} />
            }
          ></Route>
          <Route
            path="/Substainability"
            element={
              <DefaultLayout
                exact
                path="/Substainability"
                component={Substainability}
              />
            }
          ></Route>

          {/* Technical Routes */}
          {/* Technical Solutions Routes */}
          <Route
            path="/Hotels"
            element={<DefaultLayout exact path="/Hotels" component={Hotels} />}
          ></Route>
          <Route
            path="/Offices"
            element={
              <DefaultLayout exact path="/Offices" component={Offices} />
            }
          ></Route>
          <Route
            path="/Villas"
            element={<DefaultLayout exact path="/Villas" component={Villas} />}
          ></Route>
          <Route
            path="/Apartments"
            element={
              <DefaultLayout exact path="/Apartments" component={Apartments} />
            }
          ></Route>
          <Route
            path="/Schools"
            element={
              <DefaultLayout exact path="/Schools" component={Schools} />
            }
          ></Route>
          <Route
            path="/Hospitals"
            element={
              <DefaultLayout exact path="/Hospitals" component={Hospitals} />
            }
          ></Route>

          {/* Technical Profile Drawings Routes */}
          {/* Technical Profile Drawings Casement Series Routes */}
          <Route
            path="/Casement-Series-1-60"
            element={
              <DefaultLayout
                exact
                path="/Casement-Series-1-60"
                component={CasementSeriesOne}
              />
            }
          ></Route>
          <Route
            path="/Casement-Series-1-39"
            element={
              <DefaultLayout
                exact
                path="/Casement-Series-1-39"
                component={CasementSeriesTwo}
              />
            }
          ></Route>

          {/* Technical Profile Drawings Sliding Series Routes */}
          <Route
            path="/Sliding-Series-1-75"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-75"
                component={SlidingSOne}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-64"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-64"
                component={SlidingSTwo}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-60"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-60"
                component={SlidingSThree}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-50"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-50"
                component={SlidingSFour}
              />
            }
          ></Route>
          <Route
            path="/Sliding-Series-1-44"
            element={
              <DefaultLayout
                exact
                path="/Sliding-Series-1-44"
                component={SlidingSFive}
              />
            }
          ></Route>

          {/* Technical Profile Drawings All Profiles Routes */}
          <Route
            path="/profile"
            element={
              <DefaultLayout exact path="/profile" component={AllProfile} />
            }
          ></Route>

          {/* Careers Routes */}
          <Route
            path="/Careers"
            element={
              <DefaultLayout exact path="/Careers" component={Careers} />
            }
          ></Route>

          {/* Contact-Us Routes */}
          <Route
            path="/Contact-Us"
            element={
              <DefaultLayout exact path="/Contact-Us" component={ContactUs} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
