import Image from 'next/image'
//import pic from './../public/HOLDONPLAY.png'
import picc from '../public/HoldOnPlay logo.png'


export default function Navigation(){
    return(
        <nav className="bg-inherit ">
            <div className='items-center justify-items-center'>
                <h1 className="block items-center justify-items-center text-white text-5xl sm:flex sm:text-6xl md:text-7xl lg:text-9xl font-bold ">
                    <Image src={picc} alt='image 1' className='mb-3 sm:mr-3 w-15 h-15 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-40 lg:h-40' ></Image>
                    Hold<em className='text-cyan-300'>on</em>play
                </h1>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    )
}