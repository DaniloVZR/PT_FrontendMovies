import styles from "./Description.module.scss";

const Description = () => {
  return (
    <section className={styles.description}>
      <h2>Tienda de ropa online para hombre y mujer</h2>
      <p>
        ¡Sabemos que lo tuyo no es precisamente lo convencional! Y en Movies tenemos todo el estilo y los diseños que siempre quisiste encontrar En <b>nuestra de ropa online</b> hay un espacio para todos. No importa cuales sean tus preferencias, si eres más de series clásicas o de las más actuales, si te mueres por el universo Marvel o en definitiva llevas contigo DC Comics hasta el final. ¡Recuerda! Movies es más que una <b>tienda de ropa de superhéroes</b>, de series o películas; nosotros somos quienes junto a ti, hacemos que la historia continúe. dándote la posibilidad de llevar siempre contigo las colecciones oficiales, las cápsulas originales y las prendas más icónicas del mercado; ¿hombre o mujer? ¡Whatever!, aquí también hay una sección desde todos los gustos.
      </p>
      <span>Ver más</span>
    </section>
  );
};

export default Description;