import github from "../../image/github.png";
import linkedin from "../../image/linkedin.png";
import cv from "../../resume/Resume_TianqiXie.pdf";
import email from "../../image/email.png";

const Sidebar = () => {
    return (
        <div className="h-full">
            <div className="h-screen flex flex-col justify-center items-center fixed top-10">
                <a href="https://github.com/AAlanXie" className="w-10 h-10 my-10 sticky">
                    <img src={github} alt="github" className="cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/tianqi-xie0711/" className="w-10 h-10 my-10 sticky">
                    <img src={linkedin} alt="linkedin" className="cursor-pointer" />
                </a>
                <a href={cv} className="w-10 h-10 my-10 text-center border-[1px] p-2 bg-white hover:bg-[#dadce3] rounded-full cursor-pointer sticky">
                    <b>CV</b>
                </a>
                <a href="mailto:tianqixie98@gmail.com" className="w-10 h-10 my-10 sticky">
                    <img src={email} alt="email" className="cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Sidebar;