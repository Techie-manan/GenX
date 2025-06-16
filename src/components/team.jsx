import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import FadeUp from './OnscrollAni/fadeup'

const team = () => {
    return (
        <>
            <div id='team' className='z-10 text-white bg pt-10 px-[5vw]'>
                <h1 className='text-center text-5xl font-bold p-5 '>Our Judges</h1>
                <div className="centre flex-wrap w-full gap-5">
                    <FadeUp className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>


                    <FadeUp delay={0.4} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>

                    </FadeUp>
                    <FadeUp delay={0.6} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>
                </div>

                <h1 className='text-center text-5xl font-bold p-5 '>Our Team</h1>
                <div className="centre flex-wrap w-full gap-5">
                    <FadeUp className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2 className="font-semibold">Harshil Shrivastava</h2>
                        <h3>Lead</h3>
                         <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.1} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2 className="font-semibold">Manan Aggarwal</h2>
                        <h3>Tech Lead</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.3} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2 className="font-semibold">Aditya Pratap Sisodia</h2>
                        <h3>Logistic Head</h3>
                         <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.5} className="capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2 className="font-semibold">Bhavya Jain</h2>
                        <h3>Graphic Designer</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </>
    )
}

export default team
