import React, { useState, useEffect } from 'react';
import "./CarrosselDeImagens.css";

const images = [
  '../../../public/images/imagemIndex1.jpg',
  '../../../public/images/imagemIndex2.jpg',
  '../../../public/images/imagemIndex3.jpg',
  '../../../public/images/imagemIndex4.jpg',
];

function CarrosselDeImagens() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avança para a próxima imagem, reinicia se estiver na última imagem
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // 10 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carrossel">
      <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`}/>
    </div>
  );
}

export default CarrosselDeImagens;