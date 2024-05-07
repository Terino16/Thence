
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextCarousel = () => {
    const settings = {
        dots: true,
        dotsClass: 'slick-dots custom-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

  return (
    <div className=''>
      <style>{`
        .slick-dots {
          right: 190px;
        }
        .slick-dots li button:before {
          color: green !important;
        }
        .custom-dots li.slick-active button:before {
            
          color: green !important;
        }
       
      `}</style>
    <Slider {...settings}>
      <div  className="text-2xl font-Manrope font-semibold">Enhance fortune 50 <br /> company’s insights teams <br />
            research capabilities
      </div>
      <div className="text-2xl font-Manrope font-semibold">Enhance fortune 50 <br /> company’s insights teams <br />
            research capabilities
      </div>
      <div className="text-2xl font-Manrope font-semibold">Enhance fortune 50 <br /> company’s insights teams <br />
            research capabilities
      </div>
    </Slider>
    </div>
  );
};

export default TextCarousel;
