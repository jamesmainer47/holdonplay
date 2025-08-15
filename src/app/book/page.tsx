
import Link from "next/link"


const djs = [
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
    {
        "name" : "Dj Tyga",
        "level" : "Professional",
        "priceperHour" : "30,000/=",
        "priceperSession": "100,000/=",
        "whatsap_no": "+255625250232",
        "instagram_usesrname": "koiso2027"
    },
]
export default function Rent(){
    return (
        <div className="flex flex-col h-auto items-center justify-center p-10 mb-10">
            <h1 className="text-5xl">Book Your Personnel Here for Your Special Event</h1>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book a Dj</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div className="flex gap-10 flex-col items-center "><div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                    </div>
                    <Link href="/book/dj"  className="rounded-full p-5 bg-blue-500  hover:bg-blue-900 font-bold text-2xl">BOOK THE DJ HERE</Link>
                    </div>
                    <div className="p-10 flex flex-row flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div key={dj} className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10">
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book an MC</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div className="p-10 flex flex-row flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div key={dj} className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10">
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book a Producer</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div>
                        <div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                        <button>BOOK HERE</button>
                        </div>
                    </div>
                    <div className="p-10 flex flex-row lg:flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div  className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10" key={dj}>
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book a Band</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div className="p-10 flex flex-row flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div key={dj} className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10">
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book Event Hoster</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                    </div>
                    <div className="p-10 flex flex-row flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div key={dj} className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10">
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-80 text-center p-10 items-center justify-center align-middle self-center">
                <h1 className="text-4xl lg:text-6xl">Book a Musician</h1>
                <div className="  flex flex-col self-center lg:flex-row xl:flex-row p-10 items-center justify-center">
                    <div className="p-10 flex flex-row flex-wrap gap-2">
                        {djs.map((dj) => (
                            <div key={dj} className="flex flex-col bg-blue-700 hover:bg-blue-900  rounded-2xl p-10">
                                <h1 className="font-bold">{dj.name.toUpperCase()}</h1>
                                <p className=" text-red-600">{dj.level}</p>
                                <p className="font-bold ">PER HOUR </p>
                                <p>{dj.priceperHour}</p>
                                <p className="font-bold">PER SESSION</p>
                                <p>{dj.priceperSession}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-30 bg-[url('/forhome/kingofstatenisland.webp')]  bg-cover">
                        <div className="">
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                            <h1>What is Up MotherFuckers</h1>
                            <p>Fuck</p>
                            <p>Fuck</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}