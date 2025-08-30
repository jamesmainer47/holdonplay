import { FaStar, FaSun, FaRocket } from "react-icons/fa"

export default function News(){
    return (
        <div className="scrollme  overflow-x-scroll text-blue-500  ">
            <ul className="flex-row flex gap-20 w-1200">
                <li >HOP</li>
                <li><FaSun size={20} className="text-blue-500"/></li>
                <li >hold ON play</li>
                <li >Your Music Distribution Company</li>
                <li >We have our ways to do things</li>
                <li><FaRocket size={20} className="text-blue-500"/></li>
                <li >Available at Nkuhungu DOdoma</li>
                <li >Music is Power, Amplify It</li>
                <li >Make sure you plug in those Headphones</li>
                <li ><FaStar size={20} className="text-blue-500"/></li>
            </ul>
        </div>
    )
}