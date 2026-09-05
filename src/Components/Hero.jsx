

function Hero() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="carousel w-full h-100 flex overflow-x-auto snap-x snap-mandatory">
        <div id="slide1" className="carousel-item relative w-full scroll-mt-40">
          <img
            src="https://toohotel.com/wp-content/uploads/2025/06/TOO_restaurant_Panoramique_vue_Paris_nuit_v2.jpg"
            className="w-full object-cover blur-[2px] "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full scroll-mt-40">
          <img
            src="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/2gbCnUK1Tv9FL0vctrefD8.jpeg"
            className="w-full object-cover blur-[2px] "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full scroll-mt-40">
          <img
            alt="Tailwind CSS slide example"
            src="https://www.parents.com/thmb/Pu3l5Cg8PfvKgbaF333cvOoSjHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-PRT-hassle-free-party-food-ideas-kids-will-love-that-wont-break-your-budget-Rachel-Vanni-hero-977-fc9760f172cf4c029ea71cb9c8935419.jpg"
            className="w-full object-cover blur-[2px] "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full scroll-mt-40">
          <img
            alt="Tailwind CSS slide example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EtEfaMLa0exzlqA5QLw9J5vyH62aIwSMxXuyZ9oQrhoEI2CDpmXu1pw&s=10"
            className="w-full object-cover blur-[2px] "
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6 bg-black/40">
        <p className= "text-white text-2xl font-bold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, natus
          nisi! Odio repellendus laboriosam animi impedit labore rem totam neque
          exercitationem repellat consectetur error quos a eligendi omnis,
          dolorem et.
        </p>
      </div>
    </div>
  );
}

export default Hero;
