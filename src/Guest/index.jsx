// import axios from "axios";
// import { useContext, useState } from "react";
// import { GlobalContext } from "../context/context";
// import Cookies from "js-cookie";

// export default function Guest() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { dispatch } = useContext(GlobalContext); // Removed 'state' since it's not being used
//   const loginUser = (e) => {
//     e.preventDefault();

//     const payload = {
//       email,
//       password,
//     };

//     axios
//       .post("http://localhost:1234/api/login", payload)
//       .then((response) => {
//         const token = response.data.token;
//         Cookies.set("token", token);

//         dispatch({
//           type: "LOGIN_USER",
//           token: token,
//         });
//       })
//       .catch((error) => console.log(error.message));
//   };

//   return (
//     <div className="container">
//       <div
//         className="d-flex justify-content-center align-items-center mt-4"
//         style={{ height: "50vh" }}
//       >
//         <div className="p-5 bg-black rounded text-info">
//           <form onSubmit={loginUser}>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <div id="emailHelp" className="form-text">
//                 Well never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import GuestNav from "./Components/GuestNav";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

export default function Guest() {
  return (
    <>
      <GuestNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </>
  );
}
