import { useState, useEffect } from "react";

const images = [
  // "https://images.unsplash.com/photo-1573497019405-b72b9e7c4e7d?auto=format&fit=crop&w=1600&q=80",
  // "https://images.unsplash.com/photo-1584697964389-f1e971d8e52d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1600&q=80",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#002c7a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.8s ease-in-out",
        }}
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.6)",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.6)",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      >
        ›
      </button>
    </div>
  );
}

export default Home;