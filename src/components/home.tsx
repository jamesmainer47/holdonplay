import Button_s from "./button_s"


export default function Home(){
    return(
        <div className="relative">
            <div className="justify-items-center p-40">
                <h1 className="font-bold text-5xl sm:text-7xl  justify-self-center text-center text-white">Release <br /> World Wide</h1>
                <h2 className="mt-5 text-center text-cyan-300 text-sm">Dont feel Wasted, Dont Give Up <br/> We are here for you!</h2>
                <Button_s/>
                
            </div>
        </div>
    )
}