const Section = ({title}) => {
    return (
        <p className="text-white text-base text-center cursor-pointer"><a href={"#" + title}>{title}</a></p>
    )
}


const Footer = () => {
    return (
        <div className="py-20 gradient-bg-footer justify-center flex flex-col w-full items-center">
            <div className="w-6/12 flex flex-row justify-between items-center">
                <div className="w-full m-5 flex flex-1 justify-evenly items-center">
                    {["About Me", "Education", "Work Experience", "Publications", "Other"].map((title, index) => (
                        <Section key={index + title} title={title} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-10">
                <p className="text-white text-sm text-center">Last Updated: Jun 2022</p>
                <p className="text-white text-sm text-center font-medium mt-2">tianqixie98@gmail.com</p>
            </div>
            
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">@tianqi</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;