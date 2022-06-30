const Other = () => {
    return (
        <div>
            <div className="flex flex-col flex-[0.5] justify-center items-center" id="Other">
                <h1 className="text-white text-gradient text-3xl py-1">
                    OTHER
                </h1>
                <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

                {/* skills */}
                <div className="w-8/12 text-white flex flex-col justify-start items-start my-5">
                    <h2 className="text-2xl">Skills</h2>
                    <div className="w-full text-center justify-center items-center border-[1px] p-2 border-[#3d4f7c] rounded-full p-5 mt-5">
                        <p><strong>Programming</strong> &nbsp; : &nbsp; Python, SQL, Java, HTML5, CSS, Javascript, C/C++, Scala, Shell, Matlab</p>
                        <p><strong>Technologies/Tools</strong> &nbsp; : &nbsp;Linux, MySQL, Flask, Django, React, Git, Redis, NodeJs, Hive, Spark, Flink, Kafka, Tensorflow</p>
                        <p><strong>Proficient Fields</strong> &nbsp; : &nbsp; Software Engineering, Database, Big data, ETL, Machine learning, Deep learning</p>
                    </div>
                </div>
                
                {/* Interests */}
                <div className="w-8/12 text-white flex flex-col justify-start items-start my-5">
                    <h2 className="text-2xl">Interests</h2>
                    <div className="w-full text-center justify-center items-center border-[1px] p-2 border-[#3d4f7c] rounded-full p-5 mt-5">
                        <p>Swimmer, University Students Competition, The 16th Games of Fujian</p>
                        <p className="font-light">Jul 2018 – Oct 2018</p>
                        <p>Ranked the 6th place in the individual round, and 7th and 8th places in the team round in the finals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Other;