import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const { user, profileUpdate } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user's profile information
    profileUpdate(formData.name, formData.photoURL)
      .then(() => {
        // Handle success, if needed
        console.log("Profile updated successfully");
        navigate("/");
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="container mx-auto mt-28">
      <h1 className="text-2xl font-bold mb-5">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="mt-1 p-2 border rounded-md w-full bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
