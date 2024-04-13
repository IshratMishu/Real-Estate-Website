
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";


const Registration = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const navigate = useNavigate();
    const from = "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {

        const { email, password, image, fullName } = data;

        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), and be at least 6 characters long.');
            return;
        } else {
            setPasswordSuccess('Registration Successful')
        }


        //create user and update profile
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate(from);
                    });
            });
    };




    return (
        <div className="hero min-h-screen bg-base-100 mt-28 mb-14">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary">Register for Free!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-md shadow-gray-400 bg-base-100 mt-5">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-secondary">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-secondary">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-secondary">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                placeholder="password"
                                className="input input-bordered \"
                                {...register("password", { required: true })} />
                            <span className="absolute top-12 right-5" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoEye /> : <IoEyeOff />
                                }
                            </span>
                            {errors.password && <span className="text-secondary">This field is required</span>}
                            {
                                passwordError && <p className="text-red-600">{passwordError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-lg">Register</button>
                        </div>
                        {
                            passwordSuccess && <p className="text-red-600">{passwordSuccess}</p>
                        }
                        <p className="p-2">Already have an Account? <Link to="/login"><button className="btn btn-link text-lg">Please Login</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;