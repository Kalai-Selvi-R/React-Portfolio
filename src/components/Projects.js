import websiteImg1 from '../assets/calculator-website.webp';
import websiteImg2 from '../assets/recipe-page.jpg';
import websiteImg3 from '../assets/notepad.avif';

export default function Projects() {
    const config = {
        project: [
            {
            image: websiteImg1,
            description:'A calculator is a device or software that can perform mathematical calculations.',
            link:'https://kalai-calculator.glitch.me'
            },
            {
            image : websiteImg2,
            description:'A recipe website.Built with ingredients',
            link:'https://handsome-balanced-swordfish.glitch.me/Recipe-page/'
            },
            {
            image: websiteImg3,
            description:'Notepad is a word processing program, which allows changing of text in a computer file. Notepad was created by the Microsoft corporation.',
            link:'https://newnotepad.glitch.me/'
            }
        ]
    }

    return <section id='Projects' className="flex flex-col py-20 px-6 justify-center bg-primary text-white">
        <div className="md:w-full">
            <div className="flex flex-col px-10 py-5">
               <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold ">Projects</h1>
               <p>These are some of my best project.I have built these with React, MERN and vanilla CSS.Cheack them out.</p>
            </div>
        </div>
        <div className="md:w-full">
           <div className='flex flex-col md:flex-row px-10  gap-7'>
                {config.project.map((project) => (
                    
                        <div className='relative '>
                          <img className='h-[300px] w-[600px]' src={project.image} />
                            <div className='projects-desc'>
                              <p className='text-center px-5 py-7'>{project.description}</p>
                                <div className='flex justify-center'>
                                   <a className='btn'   target='_blank' href= {project.link}>View Project</a>
                                </div>
                            </div>
                            
                        </div>
                    
                ))}
            
            
            </div>
        </div>

    </section>
}