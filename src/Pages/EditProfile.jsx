// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../Hooks/useAuth";


// const EditProfile = () => {
//   const { user, profileUpdate } = useAuth();
//   const [userData, setUserData] = useState({});
//   const { register, handleSubmit } = useForm();

//   useEffect(() => {
//     if (user) {
//       setUserData(user);
//     }
//   }, [user]);

//   const onSubmit = (data) => {
//     const { name, photo } = data;
//     profileUpdate(name, photo)
//       .then(() => {
//         // Update user data if successful
//         setUserData({ ...userData, name, photo });
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Error updating profile:", error);
//       });
//   };

//   return (
//     <div className="hero min-h-screen bg-base-100 mt-28 mb-14">
//       <div className="hero-content flex flex-col">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-primary">Edit Profile</h1>
//         </div>
//         <div className="card shrink-0 w-full max-w-sm shadow-md shadow-gray-400 bg-base-100 mt-5">
//           <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="input input-bordered"
//                 defaultValue={userData.name}
//                 {...register("name", { required: true })}
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Photo URL</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Photo URL"
//                 className="input input-bordered"
//                 defaultValue={userData.photo}
//                 {...register("photo")}
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary font-bold text-lg">
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
