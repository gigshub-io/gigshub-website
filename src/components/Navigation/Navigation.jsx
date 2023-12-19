// Navigation.js
import React from "react";
import { Button } from "../Button/Button.jsx";
import { NavLink } from "./components/NavLink.jsx";
import { Logo } from "../Logo/Logo.jsx";

export const Navigation = () => {
  return (
    <nav className="w-full top-0 bg-off-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button>Get Started</Button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-row font-sans font-normal leading-6 rounded-lg gap-9 text-sm bg-off-white">
            <li>
              <NavLink>Find a job</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/employers">Employers</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const Navigation = () => {
//   return (
//     <nav style={{ backgroundColor: "#F3F3FF" }} className="w-full top-0 ">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a
//           href="https://flowbite.com/"
//           className="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img src={logoImg} className="h-8" alt="Logo" />
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             style={{
//               backgroundColor: "#3C3C8E",
//               borderRadius: "30px",
//               // padding: " 9.67px 12.89px 9.67px 12.89px",
//               paddingRight: "30.89px",
//               paddingLeft: "30.89px",
//               fontSize: "12px",
//               paddingTop: "9.67px",
//               paddingBottom: "9.67px",
//               border: "5px solid #D0D0FF",
//               boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
//               color: "#ffffff",
//               gap: "6.45px",
//               width: "Fixed (128.94px)",
//               height: "Hug (37.34px)",
//             }}
//           >
//             {" "}
//             Get Started
//           </button>

//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center
//         justify-between hidden w-full
//         md:flex md:w-auto md:order-1"
//         >
//           <ul
//             style={{
//               color: "#073863",
//               backgroundColor: "#F3F3FF",
//             }}
//             className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 "
//           >
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 Find a job
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 About us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 Community
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 Employers
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 style={{
//                   color: "#073863",
//                 }}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
