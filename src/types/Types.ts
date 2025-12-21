export type Testimonial = {
  id: number;
  numberOfStars: number;
  testimonialsDesc: string;
  names: string;
  jobPosition: string;
  profileImage: string;
};

export type TestimonialProps = {
  testimonials: Testimonial[];
};
