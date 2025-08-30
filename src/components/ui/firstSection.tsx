
import Link from "next/link"
export default function FirstSection(){
    return (
        <div className="h-dvh flex flex-col justify-center relative align-middle self-center text-justify lg:text-center items-center bg-[url('/hero.jpg')] bg-cover ">
            <h1 className="lg:text-7xl  text-4xl text-center font-bold p-2"><span className="text-blue-400">Music Distribution</span> Services</h1>
            <p className="lg:px-100 p-5 lg:text-3xl  text-2xl sm:px-10 ">Get your Music on Spotify, Apple Music, TikTok, Youtube, Tidal, Tencent and more.</p>
            <p className="lg:px-100 p-5 lg:text-3xl text-2xl sm:px-10 ">Keep 100% ownership of your music and stay in control of your career.</p>
            <button className="rounded-full border-2 bg-blue-400 font-bold border-blue-400 hover:bg-blue-800 p-5">
            <Link href="/sellMusic" className="text-2xl font-bold">
                DISTRIBUTE MY MUSIC ONLINE
            </Link></button>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black "></div>
        </div>
    )
}