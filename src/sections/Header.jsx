import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Header.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <section id="inicio" className="header__container">
        <article className="">
          <h1>Bienvenidos a Exploradores del Rey</h1>
          <HashLink smooth to="#contacto">
            Contacto
          </HashLink>
        </article>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          modules={[
            Autoplay,
            EffectFade,
            Scrollbar,
            Keyboard,
            Navigation,
            Pagination,
            EffectCreative,
          ]}
          className="carousel__container"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Header;
