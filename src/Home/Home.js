import Logo from '../Assets/Logo.png';
import Hero from '../Assets/Hero.webp';

function Home() {
  return (
    <div className="flex flex-col md:flex-row">
        <div className='p-8'>
            <div className=' h-72 w-72'>
                <img src={Logo} alt="Logo" className='h-full w-full'/>
            </div>
            <div className="text-7xl text-left p-7 font-semibold">Welcome To <br/> Our Team</div>
        </div>
        <div className="grow">
            <div className='p-10'>
                <img src={Hero} alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Home