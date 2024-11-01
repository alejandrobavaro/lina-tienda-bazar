import React, { useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [email, setEmail] = useState("");

  const images = [
    "./img/04-img-banners/banner-lina-tienda-bazar-1.jpeg",
    "./img/04-img-banners/banner-lina-tienda-bazar-2.jpeg",
    "./img/04-img-banners/banner-lina-tienda-bazar-3.jpeg",
    "./img/04-img-banners/banner-lina-tienda-bazar-4.jpeg",
    "./img/04-img-banners/banner-lina-tienda-bazar-5.jpeg",
    "./img/04-img-banners/banner-lina-tienda-bazar-6.jpeg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSubscribeClick = () => {
    setShowSubscriptionForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Suscripción enviada:", email);
    setShowSubscriptionForm(false);
    
    // Mostrar el mensaje de confirmación
    toast.success("¡Gracias! Ya te suscribiste a nuestra cadena de novedades Lina Bazar.");
  };

  return (
    <main className="mainContent">
     <ToastContainer 
      position="top-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      newestOnTop={false} 
      closeOnClick 
      rtl={false} 
      pauseOnFocusLoss 
      draggable 
      pauseOnHover 
      className="my-toast-container" // Clase para aplicar estilos personalizados
    /> {/* Contenedor para mostrar las notificaciones de toast */}

      {/* Sección de Banners */}
      <section className="bannerSection">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carouselItem">
              <img src={image} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Sección de Ofertas */}
      <section className="offersSection">
        <h2 className="sectionTitle">Ofertas Exclusivas</h2>
        <div className="offersGrid">
          <div className="offerItem">
            <img src="./img/06-tienda/tienda16-a.png" alt="Descuento de Invierno" className="offerImage" />
            <h3 className="offerTitle">Descuento de Invierno</h3>
            <p className="offerDescription">
              Aprovecha hasta un 50% de descuento en toda la colección de invierno.
            </p>
          </div>
          <div className="offerItem">
            <img src="./img/06-tienda/tienda16-b.png" alt="Nuevos Accesorios" className="offerImage" />
            <h3 className="offerTitle">Nuevos Accesorios</h3>
            <p className="offerDescription">
              Diseños únicos y elegantes para complementar tu estilo. ¡Descúbrelos ahora!
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Nuevos Productos */}
      <section className="newArrivalsSection">
        <h2 className="sectionTitle">Nuevas Incorporaciones</h2>
        <div className="productsGrid">
          <div className="productItem">
            <img src="./img/06-tienda/tienda12-a.png" alt="Collares Minimalistas" className="productImage" />
            <h3 className="productTitle">Bolso Moderno</h3>
            <p className="productDescription">Elegancia y versatilidad en un solo accesorio.</p>
          </div>
          <div className="productItem">
            <img src="./img/06-tienda/tienda12-d.png" alt="Collares Minimalistas" className="productImage" />
            <h3 className="productTitle">Cartera Urbana</h3>
            <p className="productDescription">Perfecta para el día a día con un toque de estilo.</p>
          </div>
          <div className="productItem">
            <img src="./img/06-tienda/tienda10-a.png" alt="Collares Minimalistas" className="productImage" />
            <h3 className="productTitle">Collares Minimalistas</h3>
            <p className="productDescription">Detalles únicos para una presencia sutil pero elegante.</p>
          </div>
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="subscriptionSection">
        <img 
          src="./img/04-img-banners/bannerlinaofertas1.png" 
          alt="Collares Minimalistas" 
          className="productImage" 
        />
        <hr />
        <button className="subscribeButton" onClick={handleSubscribeClick}>Suscribirse</button>
      </section>

      {/* Formulario de Suscripción */}
      {showSubscriptionForm && (
        <div className="subscriptionFormOverlay">
          <form onSubmit={handleFormSubmit} className="subscriptionForm">
            <h2>Suscríbete a Nuestras Noticias</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit" className="submitButton">Enviar</button>
            <button type="button" onClick={() => setShowSubscriptionForm(false)} className="closeButton">Cerrar</button>
          </form>
        </div>
      )}
    </main>
  );
}

export default MainContent;
