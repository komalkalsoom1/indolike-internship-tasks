const Hero = () => {
    return (
      <div
        className="relative w-full h-screen flex items-center justify-center 
                   bg-contain sm:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('images/p_img6.png')" }}
      >
        {/* Content */}
        <div className="relative text-center text-black px-6 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Style</h1>
          <p className="text-lg mb-6">
            Discover the latest trends and premium quality outfits that redefine fashion.  
            From timeless classics to modern essentials, we bring you the perfect blend  
            of comfort, style, and elegance. Step into confidence with our exclusive collection.
          </p>
          <a
            href="/shop"
            className="bg-white text-black px-6 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;
  