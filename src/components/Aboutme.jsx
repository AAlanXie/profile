import tianqi from "../../image/tianqi.jpeg"
import cv from "../../resume/Resume_TianqiXie.pdf"

const Aboutme = () => {
    return (
        <div>
            <div className="flex flex-col flex-[0.5] justify-center items-center" id="About Me">
                <h1 className="text-white text-gradient text-3xl py-1">
                    ABOUT ME
                </h1>
                <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
                <div className="flex flex-row justify-center items-center m-10">
                    <div className="flex justify-center items-center w-64 h-64 m-10">
                        <img src={tianqi} alt="personal photo" className="rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white text-2xl"><strong>TIANQI XIE</strong></h2>
                        <br/><br/>
                        <p className="text-white">University of Southern California</p>
                        <p className="text-white font-light">Los Angeles, California, United States</p>
                        <br/>
                        <p className="text-white"><a href="mailto:tianqixie98@gmail.com">tianqixie98@gmail.com</a></p>
                        <br/>
                        <a href={cv} className="text-white text-center w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer" downloaded>
                            DOWNLOAD CV
                        </a>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center pb-10">
                    <p className="text-white">
                        Hello, I am <strong>Tianqi Xie</strong>. I'm currently a first-year Master student in the University of Southern California, with the major of Applied Data Science. <br/>
                        I received the bachelor degree in Computer Science and Technology from Xiamen University.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Aboutme;