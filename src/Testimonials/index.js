import "./Testimonials.css";
import React, { useEffect } from "react";
import { TESTIMONIALS } from "./TestimonialsData";
import SingleTestimonial from "./SingleTestimonial";

function Testimonials() {
  useEffect(() => {});
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle"></span>

      <div className="testimonial__container container swiper-container">
        <div className="">
          {TESTIMONIALS.map((item) => (
            <SingleTestimonial item={item} key={item.review} />
          ))}
        </div>
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>
  );
}

export default Testimonials;
