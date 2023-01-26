import { useSwiper } from "swiper/react";

function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div
        className="swiper-button-prev"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>
      <div
        className="swiper-button-next"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
    </div>
  );
}

export default SlideButtons;
