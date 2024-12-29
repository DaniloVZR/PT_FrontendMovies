import SliderCard from "@/components/ui/SliderCards";
import styles from "./ProductCard.module.scss";
import { formatToCOP } from "@/utils";

interface SpecificationValue {
  id: string;
  name: string;
  position: number;
  quantity: number;
}

interface ProductCardProps {
  id: string;
  brand: string;
  productName: string;
  price: number;
  imageUrl: string[];
  specifications: SpecificationValue[];
}

const ProductCard = ({ id, brand, productName, price, imageUrl, specifications }: ProductCardProps) => {

  return (
    <article className={styles.productCard}>
      <div className={styles.productCardInfo}>
        <SliderCard images={imageUrl} />
        <div className={styles.sizes}>
          {specifications.length > 0 ? (
            specifications.map((spec, i) => (
              <button
                key={spec.id}
                className={styles.size}
              >
                {spec.name}
              </button>
            ))
          ) : (
            <div>No hay tallas disponibles</div>
          )}
        </div>
      </div>
      <p className={styles.brand}>{brand}</p>
      <p className={styles.description}>{productName}</p>
      <p className={styles.price}>{formatToCOP(price)}</p>
      <button className={styles.buyButton}>
        Agregar al carrito
      </button>
    </article>
  );
};

export default ProductCard;
