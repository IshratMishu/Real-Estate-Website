import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div className="mt-32">
            <Helmet>
                <title>LuxVista - Blogs</title>
            </Helmet>
            <div className="mx-auto max-w-3xl">
                <p className="text-center text-white animate__animated animate__fadeInDown">Welcome to our blog, your go-to destination for all things real estate and beyond. Join us as we explore the exciting world of real estate together and unlock the keys to your dream home. Our blog has something interesting to know for everyone.</p>
            </div>

            <div className="grid grid-cols-1 gap-10 mt-16">
                <div className="card card-side bg-base-100 shadow-sm shadow-gray-400 flex flex-col md:flex-row">
                    <figure className="w-80"><img className="rounded-xl" src="/src/assets/pexels-photo-1105754.jpeg" alt="" /></figure>
                    <div className="card-body">
                        <small>March 12, 2024</small>
                        <h2 className="card-title text-white animate__animated animate__fadeInLeft">Seller’s Guide</h2>
                        <p>New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of w ...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-sm shadow-gray-400 flex flex-col md:flex-row">
                    <figure className="w-80"><img className="rounded-xl" src="/src/assets/73173bb3c714513fbefd18e58e9bbd8a.jpg" alt="" /></figure>
                    <div className="card-body">
                        <small>January 20, 2024</small>
                        <h2 className="card-title text-white animate__animated animate__fadeInLeft">Reasons to sell before New Year</h2>
                        <p>One neighborhood of New York County is contiguous with The Bronx. Marble Hill at one time was...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card card-side bg-base-100 shadow-sm shadow-gray-400 flex flex-col md:flex-row">
                    <figure className="w-80"><img className="rounded-xl" src="/src/assets/pexels-max-vakhtbovycn-7061676.jpg" alt="" /></figure>
                    <div className="card-body">
                        <small>December 27, 2023</small>
                        <h2 className="card-title text-white animate__animated animate__fadeInLeft">What to look for in an agent</h2>
                        <p>A modern redrawing of the 1807 version of the Commissioner’s Grid plan for Manhattan, a few years before...</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;