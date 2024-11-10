import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Deals from "@/components/Deals";
import NewArrivals from "@/components/NewArrivals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function home (){
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals id={"Deals"}/>
      <NewArrivals id={"NewArrivals"} />
      <Contact id={"Contact"} />
      <Footer />

    </div>
  )

}