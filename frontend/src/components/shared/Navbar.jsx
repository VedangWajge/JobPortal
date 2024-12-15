import React from "react";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className="text-2xl font-bold">
                        Job<span className="text-[#F83002]">Portal</span>
                    </h1>
                </div>
                <div>
                    <ul className="flex font-medium items-center gap-5">
                        {/* <li><Link>Home</Link></li>
                        <li><Link>Jobs</Link></li>
                        <li><Link>Browse</Link></li> */}
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
