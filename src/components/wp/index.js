import React from "react";
import "./style/wp.css"; // Asegúrate de crear este archivo CSS

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/543413027862?text=¡Hola!%20Me%20gustaría%20hacer%20una%20consulta%20sobre%20una%20propiedad."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;