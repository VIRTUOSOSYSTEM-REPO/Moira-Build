import React, { Component } from "react";

import Navbar from "reactjs-navbar";
import logo from "./assets/fullLogo.png";
// import Loader from "react-loader-spinner";
import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs,
  faAnchor,
  faDizzy,
  faAdjust,
  faBell,
  faGhost,
  faFan,
  faCarSide,
  faJedi,
  faLaughBeam,
  faCheese,
  faKey,
  faWater,
} from /*...*/ "@fortawesome/free-solid-svg-icons";

import "reactjs-navbar/dist/index.css";
import { Link } from "react-router-dom";
import Navigation from "../base/Navigation";

class Header extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <Navbar
        alt="Moira Building"
        logo={logo}
        // loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faUsers,
            isAuth: true,
            onClick: () => {
              window.location.href='/';
             },
          },
          {
            title: "About Us",
            icon: faBookOpen,
            isAuth: true,
            subItems: [
              {
                title: "Our Company",
                icon: faAnchor,
                isAuth: true,
                href: "/OurCompany",
                onClick: () => {
                  window.location.href='/OurCompany';
                 },
              },
              {
                title: "CSR Policy",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  window.location.href='/CSRPolicy';
                 },
              },
              {
                title: "Media",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Media';
                 },
              },
              {
                title: "Gallery",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Gallery';
                 },
              },
            ],
          },
          {
            title: "Products",
            icon: faGlobe,
            isAuth: true,
            subItems: [
              {
                title: "Types",
                icon: faDizzy,
                isAuth: true,
                subItems: [
                  {
                    title: "Sliding",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Windows",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Windows';
                         },
                        
                      },
                      {
                        title: "Doors",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Doors';
                         },
                      },
                    ],
                  },
                  {
                    title: "Casement",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Windows",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Casement-Windows';
                         },
                      },
                      {
                        title: "Doors",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Casement-Doors';
                         },
                      },
                    ],
                  },
                  {
                    title: "Specialities",
                    icon: faAdjust,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Arched",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Arched';
                         },
                      },
                      {
                        title: "Combination",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Combination';
                         },
                      },
                      {
                        title: "Lamination",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Lamination';
                         },
                      },
                      {
                        title: "Bay Window",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Bay-Window';
                         },
                      },
                    ],
                  },
                  {
                    title: "Premium",
                    icon: faAdjust,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Premium';
                     },
                  },
                ],
              },
              {
                title: "Series",
                icon: faAnchor,
                isAuth: true,
                subItems: [
                  {
                    title: "Casement Series",
                    icon: faGhost,
                    isAuth: true,
                    subItems: [
                      {
                        title: "1-60 Casement Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Casement-Series-1-60';
                         },
                      },
                      {
                        title: "1-39 Casement Series",
                        icon: faGhost,
                        onClick: () => {
                          window.location.href='/Casement-Series-1-39';
                         },
                        isAuth: true,
                        
                      },
                    ]
                  },
                  {
                    title: "Sliding Series",
                    icon: faGhost,
                    isAuth: true,
                    subItems: [
                      {
                        title: "1-75 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Series-1-75';
                         },
                      },
                      {
                        title: "1-64 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Series-1-64';
                         },
                      },
                      {
                        title: "1-60 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Series-1-60';
                         },
                      },
                      {
                        title: "1-50 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Series-1-50';
                         },
                      },
                      {
                        title: "1-44 Sliding Series",
                        icon: faGhost,
                        isAuth: true,
                        onClick: () => {
                          window.location.href='/Sliding-Series-1-44';
                         },
                      },
                    ]
                  },
                ]
              },
              {
                title: "Accessories",
                icon: faAnchor,
                isAuth: true,
                subItems: [
                  {
                    title: "Overview",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Overview';
                     },
                  },
                  {
                    title: "Complete Sets",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Complete-Set';
                     },
                  },
                  {
                    title: "Tilt & slide door hardware",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Slide-door';
                     },
                  },
                  {
                    title: "Tilt & turn window hardware",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Turn-window';
                     },
                  },
                  {
                    title: "ESPAGNOLETTES & STRIKERS",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/strikers';
                     },
                  },
                  {
                    title: "Handles",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Handles';
                     },
                  },
                  {
                    title: "Hinges & Friction Hinges",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Hinges-Friction-Hinges';
                     },
                  },
                  {
                    title: "Miscellaneous Parts",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Miscellaneous-Parts';
                     },
                  },
                  {
                    title: "Plastic Parts",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Plastic-Parts';
                     },
                  },
                  {
                    title: "Rollers",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Rollers';
                     },
                  },
                  {
                    title: "Screw & Fasteners",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Screw-Fasteners"';
                     },
                  },
                ]
              },
            ],
          },
          {
            title: "Moira Advantage",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Why MOIRA",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  window.location.href='/why-moira';
                 },
              },
              {
                title: "Quality",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Quality';
                 },
              },
              {
                title: "Production",
                icon: faWater,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Production';
                 },
              },
              {
                title: "Our Network",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Our-Network';
                 },
              },
              {
                title: "Substainability",
                icon: faDizzy,
                isAuth: true,
                onClick: () => {
                  window.location.href='/Substainability';
                 },
              },
            ],
          },
          {
            title: "Technical",
            icon: faChartPie,
            isAuth: true,
            subItems: [
              {
                title: "Solutions",
                icon: faGhost,
                isAuth: true,
                subItems: [
                  {
                    title: "Hotels",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Hotels';
                     },
                  },
                  {
                    title: "Offices",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Offices';
                     },
                  },
                  {
                    title: "Villas",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Villas';
                     },
                  },
                  {
                    title: "Apartments",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Apartments';
                     },
                  },
                  {
                    title: "Schools",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Schools';
                     },
                  },
                  {
                    title: "Hospitals",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/Hospitals';
                     },
                  },
                ]
              },
              {
                title: "Profile Drawings",
                icon: faGhost,
                isAuth: true,
                subItems: [
                    {
                      title: "Casement Series",
                      icon: faGhost,
                      isAuth: true,
                      subItems: [
                        {
                          title: "1-60 Casement Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Casement-Series-1-60';
                           },
                        },
                        {
                          title: "1-39 Casement Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Casement-Series-1-39';
                           },
                        },
                      ]
                    },
                    {
                      title: "Sliding Series",
                      icon: faGhost,
                      isAuth: true,
                      subItems: [
                        {
                          title: "1-75 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Sliding-Series-1-75';
                           },
                        },
                        {
                          title: "1-64 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Sliding-Series-1-64';
                           },
                        },
                        {
                          title: "1-60 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Sliding-Series-1-60';
                           },
                        },
                        {
                          title: "1-50 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Sliding-Series-1-50';
                           },
                        },
                        {
                          title: "1-44 Sliding Series",
                          icon: faGhost,
                          isAuth: true,
                          onClick: () => {
                            window.location.href='/Sliding-Series-1-44';
                           },
                        },
                      ]
                    },
                  {
                    title: "All Profiles",
                    icon: faGhost,
                    isAuth: true,
                    onClick: () => {
                      window.location.href='/profile';
                     },
                  },
                ]
              },
            ]
          },
          {
            title: "Contact Us",
            icon: faChartPie,
            isAuth: true,
            onClick: () => {
              window.location.href='/Contact-Us';
             },
          },
        ]}
      />
    );
  }
}
export default Header;
