import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import FadeUp from './OnscrollAni/fadeup'

const team = () => {
    return (
        <>
            <div id='team' className='z-10 text-white bg pt-10 px-[5vw]'>
                <h1 className='text-center text-5xl font-bold p-5 '>Our Judges</h1>
                <div className="centre flex-wrap w-full gap-5">
                    <FadeUp className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation text-center capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation text-center capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>


                    <FadeUp delay={0.4} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation text-center capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>

                    </FadeUp>
                    <FadeUp delay={0.6} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation text-center capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/profile.png" alt="" className='rounded-full' />
                        <h2>To Be Announced</h2>
                        <h3></h3>
                        <div className="centre">

                        </div>
                    </FadeUp>
                </div>

                <h1 className='text-center text-5xl font-bold p-5 '>Our Team</h1>
                <div className="centre flex-wrap w-full gap-5">

                    <FadeUp delay={0.1} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 p-5 text-sm text-center centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/manan.jpg" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Manan Aggarwal</h2>
                        <h3>Tech Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/m.ana._n/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/manan-aggarwal-3572a3327 " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.2} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 text-sm text-center p-5 centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/priyanshu.png" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Priyanshu Kaushik</h2>
                        <h3>Media Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/priyanshu_me7/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href=" " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.3} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 p-5 text-sm text-center centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/aditya.jpg" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold ">Aditya Pratap Sisodia</h2>
                        <h3>Logistic Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/_adiittyyaa_?igsh=MW8xdmRjMGhheHUyag==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/aditya-sisodia-33a314279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.4} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 p-5 text-sm text-center centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/saanvi.jpg" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Saanvi Jindal</h2>
                        <h3>Operations Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/s1v.ni?igsh=OWw0NjF2MjVxNGFp" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/saanvi-jindal-206222266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>

                   

                    <FadeUp delay={0.1} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 p-5 text-sm text-center centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/bhavya.png" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Bhavya Jain</h2>
                        <h3>Graphic Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/based.bhavya?igsh=MXRua201Z2k4OWZtZA==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/bhavya-jain-28a89a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule h-62 p-5 text-center text-sm centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/sonali.jpg" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Sonali Samal</h2>
                        <h3>Finance Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/_samisded_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/sonaliisamal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                    <FaLinkedin />
                                </a></div>
                        </div>
                    </FadeUp>
                     <FadeUp delay={0.3} className="transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1
                    float-animation capsule text-sm p-5 text-center centre flex-col w-2/5 md:w-1/5 gap-2">
                        <img src="./images/prisha.jpg" alt="" className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">Prisha Rawat</h2>
                        <h3>PR & Sponserships Head</h3>
                        <div className="centre gap-5 text-2xl">
                            <div className="capsule p-2">
                                <a href="https://www.instagram.com/prisha_1.6?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                    <FaInstagram />
                                </a></div>
                            <div className="capsule p-2">
                                <a href="https://www.linkedin.com/in/prisha-rawat-63949b322 " target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
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
