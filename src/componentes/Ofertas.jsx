import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_Ofertas.scss";

const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/ofertas.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        return response.json();
      })
      .then((data) => setOfertas(data))
      .catch((error) => {
        console.error("Error loading ofertas:", error);
        setError("No se pudieron cargar las ofertas.");
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="oferta-grid-container">
      <h2 className="oferta-title">Ofertas</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="oferta-grid">
        {ofertas.map((oferta) => (
          <div key={oferta.id} className="oferta-card">
            <h3 className="oferta-oferta-title">{oferta.nombre}</h3>
            <img src={oferta["imagen portada"]} alt={oferta.nombre} className="oferta-oferta-img" />
            <hr />
            <div className="comments-section">
              <ul>
                {Array.isArray(oferta["nuestro servicio"]) && oferta["nuestro servicio"].map((comment, index) => (
                  <li key={`${oferta.id}-comment-${index}`}>{comment}</li>
                ))}
              </ul>
            </div>

            <Slider {...settings}>
              {Array.isArray(oferta["imagenes"]) && oferta["imagenes"].map((img, index) => (
                <div key={`${oferta.id}-img-${index}`}>
                  <img src={img} alt={`${oferta.nombre} - ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>

            <div className="oferta-info">
              <p>{oferta.tipo} | {oferta.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
