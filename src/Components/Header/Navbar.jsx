import { NavLink } from "react-router-dom";

const Navbar = () => {

    const linkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
            background: isActive ? "none" : "white",
            fontSize: isActive ? "18px" : "18px"
        };
    };


    const links = <>

        <li><NavLink to='/' style={linkStyle}>Home</NavLink></li>
        <li><NavLink to='/login' style={linkStyle}>Properties</NavLink></li>
        <li><NavLink to='/register' style={linkStyle}>Gallery</NavLink></li>
        <li><NavLink to='/orders' style={linkStyle}>FAQ</NavLink></li>
        <li><NavLink to='/profile' style={linkStyle}>Blogs</NavLink></li>


        <li><NavLink to='/dashboard' style={linkStyle}>Luxury Lifestyle Magazine</NavLink></li>
    </>



    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl">LuxVista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn">Login</button>
            </div >
             <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

        </div >

    );
};

export default Navbar;