import Navigation from "@/components/navigation"
import Home from "@/components/home"
import Footer from "@/components/footer"


export default function Page(){
    return(
        <section className="bg-black">
            <div className="h-screen bg-no-repeat bg-home fill object-cover p-8">
                <Navigation/>
                <Home/>
                <Footer/>
            </div>
        </section>
    )
}