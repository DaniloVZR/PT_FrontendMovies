import Slider from "@/components/ui/Slider";
import Separator from "@/components/home/separator/Separator";
import Description from "@/components/home/description/Description";
import Services from "@/components/home/services/Services";
import Newsletter from "@/components/home/newsletter/Newsletter";
import ProductShowcase from "@/components/home/productShowcase/ProductShowcase";
import useCartStore from "@/store/cartStore";

export default function Home() {
  //const values = useCartStore((state) => state);

  return (
    <div>
      <Slider />
      <Separator />
      <ProductShowcase />
      <Description />
      <Services />
      <Newsletter />
    </div>
  );
}
