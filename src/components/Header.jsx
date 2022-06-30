const NavbarCard = ({title, link}) => {
    console.log(title);
    return (
        <li className="mx-5 cursor-pointer"><a href={"#" + link}>{title}</a></li>
    )
}

const Header = () => {
    return (
        <nav className="w-full flex flex-row justify-center items-center p-4">
            <div className="flex flex-[0.5] justify-start items-center p-10">
                <h1 className="text-white text-3xl cursor-pointer">
                    TIANQI
                </h1>
            </div>
            <ul className="flex flex-row flex-initial justify-between items-center text-white ">
                {["About Me", "Education", "Work Experience", "Publications", "Other"].map((title, index) => (
                    <NavbarCard key={index + title} title={title} link={title} />
                )
                )}
            </ul>
        </nav>
    )
}


export default Header;