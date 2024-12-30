import Slider from "@/components/ui/Slider";
import Separator from "@/components/home/separator/Separator";
import Description from "@/components/home/description/Description";
import Services from "@/components/home/services/Services";
import Newsletter from "@/components/home/newsletter/Newsletter";
import ProductShowcase from "@/components/home/productShowcase/ProductShowcase";
import Navbar from "@/components/home/navbar/Navbar";
import Topbar from "@/components/home/topbar/Topbar";
import Footer from "@/components/home/footer/Footer";

export default function Home() {

  return (
    <div>
      <Topbar />
      <Navbar />
      <Slider />
      <Separator />
      <ProductShowcase />
      <Description />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}
