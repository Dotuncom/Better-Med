// src/data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Carter",
    role: "Businessman",
    image: "/images/john-carter.jpg",
    quote:
      "My experience at West Hills Hospital was superior and well above medical treatment standards. The physicians, nurses and staff successfully eradicated my disease with unbelievable care and compassion. Their attention to ensuring my well-being was exceptional.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Teacher",
    image: "/images/sophia-williams.jpg",
    quote:
      "I am beyond grateful for the incredible support and professionalism shown by the entire staff. They truly made me feel like family throughout my treatment.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Engineer",
    image: "/images/michael-brown.jpg",
    quote:
      "From the moment I walked in, I felt cared for. The team went above and beyond to provide excellent care and comfort during my stay.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Designer",
    image: "/images/emily-davis.jpg",
    quote:
      "The compassion and professionalism here are unmatched. I couldn’t have asked for a better healthcare experience.",
  },
  {
    id: 5,
    name: "Daniel Thompson",
    role: "Entrepreneur",
    image: "/images/daniel-thompson.jpg",
    quote:
      "The doctors were knowledgeable, attentive, and made sure I fully understood my treatment plan. Truly outstanding service.",
  },
  {
    id: 6,
    name: "Olivia Johnson",
    role: "Writer",
    image: "/images/olivia-johnson.jpg",
    quote:
      "They treated me with kindness and respect at every step. I would recommend them to anyone in need of compassionate medical care.",
  },
  {
    id: 7,
    name: "James Anderson",
    role: "Lawyer",
    image: "/images/james-anderson.jpg",
    quote:
      "This hospital sets the gold standard for patient care. The entire process was smooth, professional, and comforting.",
  },
];
