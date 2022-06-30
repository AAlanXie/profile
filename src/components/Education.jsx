import React from "react";
import Xmu from "../../image/xmu.png"
import Usc from "../../image/usc.png"

const Education = () => {
    return (
        <div>
            <div className="flex flex-col flex-[0.5] justify-center items-center" id="Education">
                {/* title */}
                <h1 className="text-white text-gradient text-3xl py-1">
                    EDUCATION
                </h1>

                {/* delimate */}
                <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

                {/* university */}
                <div className="w-1/2 flex flex-row justify-between items-center mt-5">
                    <div className="flex flex-[0.5] justify-center items-center p-5">
                        <img src={Usc} alt="University of Southern California" className="w-40 cursor-pointer" />
                    </div>
                    <div className="flex flex-[0.5] flex-col justify-center items-center text-white">
                        <b className="text-2xl">University of Southern California</b>
                        <p className="mb-7">Jan 2022 - Present</p>
                        <p>Master's Degree, Applied Data Science</p>
                        <p>Grade: 4.0 / 4.0</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-row justify-between items-center m-5" data-aos="fade-right">
                    <div className="flex flex-[0.5] flex-col justify-center items-center text-white">
                        <b className="text-2xl">Xiamen University</b>
                        <p className="mb-7">Sep 2016 - Jun 2020</p>
                        <p>Bachelor's Degree, Computer Science</p>
                        <p>Grade: 3.4 / 4.0</p>
                    </div>
                    <div className="flex flex-[0.5] justify-center items-center p-5">
                        <img src={Xmu} alt="Xiamen University" className="w-40 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Education;