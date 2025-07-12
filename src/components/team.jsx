import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import FadeUp from './OnscrollAni/fadeup';

const judges = [
    { name: "To Be Announced", img: "./images/profile.png" },
    { name: "To Be Announced", img: "./images/profile.png" },
    { name: "To Be Announced", img: "./images/profile.png" },
    { name: "To Be Announced", img: "./images/profile.png" },
];

const teamMembers = [
    {
        name: "Manan Aggarwal",
        role: "Tech Head",
        img: "./images/manan.jpg",
        instagram: "https://www.instagram.com/m.ana._n/?hl=en",
        linkedin: "https://www.linkedin.com/in/manan-aggarwal-3572a3327",
    },
    {
        name: "Priyanshu Kaushik",
        role: "Media Head",
        img: "./images/priyanshu.png",
        instagram: "https://www.instagram.com/priyanshu_me7/?utm_source=ig_web_button_share_sheet",
        linkedin: "",
    },
    {
        name: "Aditya Pratap Sisodia",
        role: "Logistic Head",
        img: "./images/aditya.jpg",
        instagram: "https://www.instagram.com/_adiittyyaa_?igsh=MW8xdmRjMGhheHUyag==",
        linkedin: "https://www.linkedin.com/in/aditya-sisodia-33a314279",
    },
    {
        name: "Saanvi Jindal",
        role: "Operations Head",
        img: "./images/saanvi.jpg",
        instagram: "https://www.instagram.com/s1v.ni?igsh=OWw0NjF2MjVxNGFp",
        linkedin: "https://www.linkedin.com/in/saanvi-jindal-206222266",
    },
    {
        name: "Bhavya Jain",
        role: "Graphic Head",
        img: "./images/bhavya.png",
        instagram: "https://www.instagram.com/based.bhavya?igsh=MXRua201Z2k4OWZtZA==",
        linkedin: "https://www.linkedin.com/in/bhavya-jain-28a89a311",
    },
    {
        name: "Sonali Samal",
        role: "Finance Head",
        img: "./images/sonali.jpg",
        instagram: "https://www.instagram.com/_samisded_/",
        linkedin: "https://www.linkedin.com/in/sonaliisamal/",
    },
    {
        name: "Prisha Rawat",
        role: "PR & Sponserships Head",
        img: "./images/prisha.jpg",
        instagram: "https://www.instagram.com/prisha_1.6?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        linkedin: "https://www.linkedin.com/in/prisha-rawat-63949b322",
    },
];

const Team = () => {
    return (
        <div id='team' className='z-10 text-white bg pt-10 px-[5vw]'>
            <h1 className='text-center text-5xl font-bold p-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Our Judges</h1>
            <div className="centre flex-wrap w-full gap-5">
                {judges.map((judge, index) => (
                    <FadeUp key={index} delay={index * 0.2} className="group transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1 float-animation text-center capsule p-5 centre flex-col w-2/5 md:w-1/5 gap-2 relative">
                        <div className="absolute w-full h-full border-0 rounded-6xl  bg-gradient-to-r from-red-800/20 to-orange-500/20  opacity-0 group-hover:opacity-30 shadow-2xs group-hover:shadow-2xl group-hover:shadow-red-500 z-10"></div>
                        <img src={judge.img} alt={judge.name} className='rounded-full' />
                        <h2>{judge.name}</h2>
                        <h3>{judge.role}</h3>
                        <div className="centre z-0"></div>
                    </FadeUp>
                ))}
            </div>

            <h1 className='text-center text-5xl font-bold p-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Our Team</h1>
            <div className="centre flex-wrap w-full gap-5">
                {teamMembers.map((member, index) => (
                    <FadeUp key={index} delay={0.1 + index * 0.1} className="relative group transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 hover:rotate-1 float-animation capsule h-62 p-5 text-sm text-center centre flex-col w-2/5 md:w-1/5 gap-2 shadow-2xs hover:shadow-2xl hover:shadow-purple-500">
                        <div className="absolute w-full h-full border-0 rounded-6xl  bg-gradient-to-r from-red-800/20 to-orange-500/20  opacity-0 group-hover:opacity-30 shadow-2xs group-hover:shadow-2xl group-hover:shadow-red-500 z-0"></div>
                        <img src={member.img} alt={member.name} className='rounded-full h-20 lg:h-30 md:h-40' />
                        <h2 className="font-semibold">{member.name}</h2>
                        <h3>{member.role}</h3>
                        <div className="centre gap-5 text-2xl z-10">
                            {member.instagram && (
                                <div className="capsule p-2">
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                                        <FaInstagram />
                                    </a>
                                </div>
                            )}
                            {member.linkedin && (
                                <div className="capsule p-2">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            )}
                        </div>
                        
                    </FadeUp>
                ))}
            </div>
        </div>
    );
};

export default Team;
