import ProductCard from "../productCard/ProductCard";
import styles from "./ProductShowcase.module.scss";

interface Image {
  imageUrl: string;
  imageText: string;
}

interface Item {
  images: Image[];
}

interface SpecificationValue {
  id: string;
  name: string;
  position: number;
  quantity: number;
}

interface SkuSpecification {
  values: SpecificationValue[];
}

interface Product {
  productId: string;
  brand: string;
  productName: string;
  price: number;
  items: Item[];
  skuSpecifications: SkuSpecification[];
}

const ProductShowcase = async () => {
  try {
    const response = await fetch('https://api-catalog-main-production.up.railway.app/api/product', {
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: Product[] = await response.json();

    if (!data.length) {
      return (
        <section className={styles.productShowcaseContainer}>
          <div className={styles.emptyState}>
            No hay productos disponibles en este momento
          </div>
        </section>
      );
    }

    return (
      <section className={styles.productShowcaseContainer}>
        <div className={styles.productShowcaseContent}>
          {data.map((product) => {
            const imageUrls = product.items[0]?.images.map(img => img.imageUrl) || [];
            const specifications = product.skuSpecifications[0]?.values || [];

            return (
              <ProductCard
                key={product.productId}
                id={product.productId}
                brand={product.brand}
                productName={product.productName || "Descripción no disponible"}
                price={product.price}
                imageUrl={imageUrls}
                specifications={specifications} // Ahora pasamos directamente el array de values
              />
            );
          })}
        </div>
      </section>
    );
  } catch (error) {
    return (
      <section className={styles.productShowcaseContainer}>
        <div className={styles.errorState}>
          <p>Lo sentimos, ha ocurrido un error al cargar los productos.</p>
        </div>
      </section>
    );
  }
};

export default ProductShowcase;