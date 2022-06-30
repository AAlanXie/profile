const Publications = () => {
    return (
        <div>
            <div className="flex flex-col flex-[0.5] justify-center items-center" id="Publications">
                <h1 className="text-white text-gradient text-3xl py-1">
                    PUBLICATIONS
                </h1>
                <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
                {/* ubicomp2019 */}
                <div className="flex flex-col text-white text-center justify-center items-center my-5" data-aos="fade-down">
                    <b className="mt-3">
                        Identifying Urban Villages from City-Wide Satellite Imagery Leveraging Mask R-CNN
                    </b>
                    <p>
                        Ubicomp2019 · Sep 11, 2019
                    </p>
                    <p className="font-light m-3">
                        Longbiao Chen, <strong>Tianqi Xie</strong>, Xueyi Wang, Cheng Wang
                    </p>
                    <a href="https://dl.acm.org/doi/10.1145/3341162.3355269" className="text-white text-center w-1/3 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer" downloaded>
                            Show publication
                    </a>
                </div>
                {/* IEEE Systems Journal */}
                <div className="flex flex-col text-white text-center justify-center items-center my-5" data-aos="fade-up" >
                    <b className="">
                        iTV: Inferring Traffic Violation-Prone Locations With Vehicle Trajectories and Road Environment Data
                    </b>
                    <p>
                        IEEE Systems Journal · Aug 19, 2020
                    </p>
                    <p className="font-light m-3">
                        Zhihan Jiang, Longbiao Chen, Binbin Zhou, Jinchun Huang, <strong>Tianqi Xie</strong>, Xiaoliang Fan, Cheng Wang
                    </p>
                    <a href="https://ieeexplore.ieee.org/document/9171429" className="text-white text-center w-1/3 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                            Show publication
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Publications;