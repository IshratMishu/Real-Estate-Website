
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const Registration = () => {
    const {createUser, profileUpdate} = useAuth();

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        const{email, password, name, photo} = data;
        createUser(email, password)
        .then(result =>{
            profileUpdate(name, photo)
            .then(()=>{
                console.log(result);
            })   
        })
      }
      

    
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
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })}/>
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
                            <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo")}/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-secondary">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-lg">Register</button>
                        </div>
                        <p className="p-2">Already have an Account? <Link to="/login"><button className="btn btn-link text-lg">Please Login</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;