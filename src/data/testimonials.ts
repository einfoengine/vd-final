export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  mediaType?: "video" | "image";
  videoUrl?: string;
  thumbnail: string;
  quote: string;
  rating: number;
}

export const testimonialsData: {
  testimonials: Testimonial[];
  autoplay: boolean;
  interval: number;
} = {
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      mediaType: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
      quote:
        "Working with this team has transformed our digital presence. Their expertise in web development and marketing strategy delivered results beyond our expectations. Our conversion rates increased by 250% in just three months!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Brands Co.",
      mediaType: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=300&fit=crop",
      quote:
        "The level of professionalism and creativity is outstanding. They understood our vision perfectly and brought it to life with a stunning website and comprehensive digital marketing campaign. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "StartupHub",
      mediaType: "video",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=300&fit=crop",
      quote:
        "From concept to launch, every step was seamless. The team's attention to detail and commitment to quality is unmatched. Our new platform has received incredible feedback from users!",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Head of Digital",
      company: "Enterprise Solutions",
      mediaType: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=300&fit=crop",
      quote:
        "Their strategic approach to digital marketing and SEO has significantly improved our online visibility. We've seen a 300% increase in organic traffic and our brand awareness has skyrocketed.",
      rating: 5,
    },
  ],
  autoplay: true,
  interval: 6000,
};
