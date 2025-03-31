import ResumeImg from '../assets/resume.avif';

export default function Resume() {
    const config = {
        link:'https://drive.google.com/file/d/1BYvTWtPRc6Nv_LGm1FOUhJmJaIIw5yOK/view?pli=1'
    }    
    
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-20'>
        <div className=' py-5 md:w-1/3 flex justify-center'>
            <img className='m-[30px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume  <a className='btn ' href={config.link}> Download</a></p>
            

        </div>
            
        </div>
    </section>
} 