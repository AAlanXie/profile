import zuoyebang from "../../image/zuoyebang.png"
import yongyou from "../../image/yongyou.png"

const Work = () => {
    return (
        <div>
            <div className="flex flex-col flex-[0.5] justify-center items-center" id="Work Experience">
                <h1 className="text-white text-gradient text-3xl py-1">
                    WORK EXPERIENCE
                </h1>
                <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

                {/* company name - location - job position - time - description */}
                {/* zuoyebang */}
                <div className="w-9/12 flex flex-row justify-between items-center mt-10" data-aos="fade-left" >
                    <div className="flex flex-col justify-center items-center p-10">
                        <div className="w-24 h-24">
                            <img src={zuoyebang} alt="zouyebang" ></img>
                        </div>
                        <div className="w-48 text-white text-sm text-center flex flex-col items-center justify-center">
                            <p>Zuoyebang Education Technology Co., Ltd</p>
                            <br/>
                            <p>Beijing, China</p>
                        </div>
                    </div>
                    <div className="text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <b className="text-2xl">Big Data Engineer</b>
                            <p>Sep 2020 - Aug 2021 · 1 yr</p>
                            <p>Full-time</p>
                        </div>
                        <div className="w-8/12 ">
                            <ul className="list-disc text-sm">
                                <li className="py-3">
                                    Monitor 90% of the data output from the data warehouse by constructing a data quality platform using Java SSM framework and Quartz scheduling system
                                </li>
                                <li className="py-3">
                                    Design an algorithm to calculate the length of students’ listening time based on live room heartbeat data, and provide the real-time processed data to teachers and teaching assistants in class
                                </li>
                                <li className="py-3">
                                Build a data warehouse based on Hive and HDFS to manage students' information (class duration, test scores, gift distribution, etc), satisfied with more than 95% of data search work for data analysts
                                </li>
                                <li className="py-3">
                                Adapted Flink as stream data processing engine and Redis as state cache database to process the data provided by Kafka and then wrote the real-time data into Elasticsearch/Doris to support the online data dashboard
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* yongyou */}
                <div className="w-9/12 flex flex-row justify-between items-center mt-10" data-aos="fade-left" >
                    <div className="flex flex-col justify-center items-center p-10">
                        <div className="w-24 h-24">
                            <img src={yongyou} alt="yongyou" ></img>
                        </div>
                        <div className="w-48 text-white text-sm text-center flex flex-col items-center justify-center">
                            <p>Yongyou Network Technology</p>
                            <br/>
                            <p>Beijing, China</p>
                        </div>
                    </div>
                    <div className="text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <b className="text-2xl">Software Engineer</b>
                            <p>Jun 2019 - Jul 2019 · 2 mos</p>
                            <p>Intern</p>
                        </div>
                        <div className="w-8/12 ">
                            <ul className="list-disc text-sm">
                                <li className="py-3">
                                    Cooperated with front-end engineers to write and modify Javascript code to develop homepage for the served company
                                </li>
                                <li className="py-3">
                                    Used Impala to process the data of monthly sales volume (table connection, table retrieval, etc) through SQL statements and invoked Echarts interfaces to visualize the sales data in support of decision making
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work;