/**
 * Jeje Cake Bakery - Image Registry
 *
 * This file contains structured placeholders for image URLs sourced from Cloudinary.
 * These will be populated as assets are uploaded.
 */

export const images = {
  about: {
    main: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106409/pic1_yp9ikt.jpg", // Banner image
    baker:
      "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106374/chiefcooker_b710s4.jpg", // Head Baker profile
  },

  services: [
    {
      title: "Birthday Cakes",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106819/pic3_bdf8zb.jpg",
    },
    {
      title: "Wedding Cakes",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106791/wedding_cakes_tlgkqf.jpg",
    },
    {
      title: "Kitchen Party Cakes",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106816/pic2_wibij9.jpg",
    },
    {
      title: "Graduation Cakes",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106789/graduation_cakes_iqz7jc.jpg",
    },
    {
      title: "Anniversary Cakes",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106789/graduation_cakes_iqz7jc.jpg",
    },
    {
      title: "Custom Themed Events",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106789/graduation_cakes_iqz7jc.jpg",
    },
  ],

  products: [
    {
      name: "Chocolate Birthday Cake",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106484/product2_ciyqao.jpg",
    },
    {
      name: "Vanilla Wedding Tier",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106482/products1_uuz7t5.jpg",
    },
    {
      name: "Red Velvet Bliss",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106479/product3_mjde8l.jpg",
    },
    {
      name: "Fruit Celebration Cake",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106479/product3_mjde8l.jpg",
    },
    {
      name: "Custom Theme Sculptures",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106479/product3_mjde8l.jpg",
    },
    {
      name: "Luxury White Lace",
      image:
        "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106479/product3_mjde8l.jpg",
    },
  ],

  gallery: [
    {
      id: 1,
      category: "Custom Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106409/pic1_yp9ikt.jpg",
      title: "Artistic Creation"
    },
    {
      id: 2,
      category: "Kitchen Party Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106374/chiefcooker_b710s4.jpg",
      title: "Chief Cook Focus"
    },
    {
      id: 3,
      category: "Birthday Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106819/pic3_bdf8zb.jpg",
      title: "Celebration Delight"
    },
    {
      id: 4,
      category: "Wedding Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106816/pic2_wibij9.jpg",
      title: "Elegant Tier"
    },
    {
      id: 5,
      category: "Wedding Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106791/wedding_cakes_tlgkqf.jpg",
      title: "Wedding Masterpiece"
    },
    {
      id: 6,
      category: "Custom Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106789/graduation_cakes_iqz7jc.jpg",
      title: "Graduation Honor"
    },
    {
      id: 7,
      category: "Birthday Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106484/product2_ciyqao.jpg",
      title: "Birthday Wonder"
    },
    {
      id: 8,
      category: "Wedding Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106482/products1_uuz7t5.jpg",
      title: "Royal Icing Tier"
    },
    {
      id: 9,
      category: "Birthday Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106479/product3_mjde8l.jpg",
      title: "Chocolate Berry Bliss"
    },
    {
      id: 10,
      category: "Kitchen Party Cakes",
      src: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106447/pic4_gqinx9.jpg",
      title: "Kitchen Party Setup"
    },
  ], // Populated from Cloudinary assets

  fallback: {
    default: "https://res.cloudinary.com/dl12vf8h5/image/upload/v1775106409/pic1_yp9ikt.jpg", // General purpose fallback
  },
};
