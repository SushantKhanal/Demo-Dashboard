import React, { useEffect } from "react";

function SingleTestimonial({ item }) {
  useEffect(() => {});
  return (
    <div className="testimonial__content swiper-slide">
      <div className="testimonial__data">
        <div className="testimonial__header">
          <img src={item.img} alt="" className="testimonial__img" />

          <div>
            <h3 className="testimonial__name">{item.name}</h3>
            <span className="testimonial__client">{item.position}</span>
          </div>
        </div>

        <div>
          <i className="uil uil-star testimonial__icon-star"></i>
          <i className="uil uil-star testimonial__icon-star"></i>
          <i className="uil uil-star testimonial__icon-star"></i>
          <i className="uil uil-star testimonial__icon-star"></i>
          <i className="uil uil-star testimonial__icon-star"></i>
        </div>
      </div>

      <p className="testimonial__description">{item.review}</p>
    </div>
  );
}

export default SingleTestimonial;
