import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProfileDetails = () => {
    const { user, updateUserProfile, setReload } = useAuth();
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
        updateUserProfile(formData.name, formData.photoURL)
            .then(() => {
                setReload(true);
                toast.success('Profile Updated Successfully!', {
                    autoClose: 1000
                });
                navigate("/");
            })
    };

    return (
        <div className="container mx-auto mt-28 mb-20 p-4">
            <Helmet>
                <title>LuxVista - Update Profile</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-5 ">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        disabled
                        className="mt-1 p-2 border rounded-md w-full bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Photo URL</label>
                    <input
                        type="text"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    />
                </div>
                <button type="submit" className="bg-primary text-black font-bold py-2 px-4 rounded-md">Save Changes</button>
            </form>
        </div>
    );
};

export default ProfileDetails;
