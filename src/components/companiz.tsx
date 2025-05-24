import pic1 from './../public/5.png'
import pic2 from './../public/13.png'
import pic3 from './../public/20.png'
import pic4 from './../public/21.png'
import pic5 from './../public/25.png'
import pic6 from './../public/29.png'
import pic7 from './../public/6.png'
import Image from 'next/image'
export default function Companiz(){
    return(
        <div className='align-bottom mt-15 md:mt-35 lg:mt-25'>
            <ul className='w-60 sm:w-100  md:w-120 lg:w-170 justify-self-center flex font-bold' >
                <li className='animate-bounce'><Image src={pic1} alt='image 1' ></Image></li>
                <li className='animate-bounce'><Image src={pic2} alt='image 1'></Image></li>
                <li className='animate-bounce'><Image src={pic3} alt='image 1'></Image></li>
                <li className='animate-bounce'><Image src={pic4} alt='image 1'></Image></li>
                <li className='animate-bounce'><Image src={pic5} alt='image 1'></Image></li>
                <li className='animate-bounce'><Image src={pic6} alt='image 1'></Image></li>
                <li className='animate-bounce'><Image src={pic7} alt='image 1'></Image></li>
            </ul>
        </div>
    )
}
