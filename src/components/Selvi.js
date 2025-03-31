import SelviImg from '../assets/kalai.png';
import { AiOutlineGithub,AiOutlineLinkedin, } from "react-icons/ai";

export default function Selvi() {
    const config ={
        subtitle:'Im a Full-Stack developer',
        social:{
            github:'https://github.com/Kalai-Selvi-R',
            linkedin:'https://www.linkedin.com/in/kalai-selvi-r-199995351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    }




    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center '> 
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-selvi-font '>Hi, <br/> Im  <span className='text-black'>KALAISELVI</span>
               <p className='text-2xl '>{config.subtitle}</p>
            </h1>  
            <div className='flex py-10'> 
                <a href={config.social.github}  className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin}  className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>

            </div>
        </div>
        <img className='md:w-1/3' src={SelviImg} />
    </section>

}
