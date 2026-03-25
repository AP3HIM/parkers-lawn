// Photos mapped to Parker's real images in /public/images/
// Reviews: image0, image6, image7, image28, image29, image30
// Assign remaining work photos to categories below

export const services = {
  lawncare: {
    title: "Lawn Care",
    tagline: "Consistent, reliable, and always sharp.",
    description:
      "A healthy lawn starts with consistent care. We offer weekly and bi-weekly mowing, edging, fertilization programs, aeration, and overseeding to keep your turf dense, green, and the envy of the neighborhood.",
    features: [
      "Mowing & Edging",
      "Fertilization Programs",
      "Weed Control",
      "Aeration & Overseeding",
      "Mulch & Rock Install",
      "Spring & Fall Cleanup",
    ],
    photos: [
      { src: "/images/image2.jpeg",  alt: "Mulching with foliage",        caption: "Mulching with foliage" },
      { src: "/images/image12.jpeg", alt: "Trees and soil platform",      caption: "Trees and soil platform" },
      { src: "/images/image13.jpeg", alt: "Trees side view",    caption: "Trees side view" },
      { src: "/images/image3.jpeg",  alt: "Wide shot of mulching",     caption: "Wide shot of mulching" },
      { src: "/images/image4.jpeg",  alt: "Mulching garden bed",       caption: "Mulching garden bed" },
      { src: "/images/image5.jpeg",  alt: "Side shot of mulching",  caption: "Side shot of mulching" },
    ]
  },
  landscaping: {
    title: "Landscaping",
    tagline: "Living beauty, professionally crafted.",
    description:
      "We design and install full landscape transformations from native plant gardens to complete yard redesigns. Our team brings your vision to life with plants, mulch, rock, and seasonal color that thrives year after year.",
    features: [
      "Full Landscape Design",
      "Plant & Bed Installation",
      "Mulch & Rock Install",
      "Seasonal Color",
      "Brush Clearing",
      "Grading & Leveling",
    ],
    photos: [
      { src: "/images/image14.jpeg",  alt: "View of trees", caption: "View of trees" },
      { src: "/images/image15.jpeg", alt: "Mulch install",     caption: "Fresh mulch installation" },
      { src: "/images/image24.jpeg",  alt: "Wide shot of mulching",     caption: "Wide shot of mulching" },
      { src: "/images/image25.jpeg",  alt: "Mulching from side",       caption: "Mulching from side" },
      { src: "/images/image26.jpeg",  alt: "Side shot of mulching",  caption: "Side shot of mulching" },
    ]
  },
  hardscapes: {
    title: "Hardscapes",
    tagline: "Built to last. Designed to impress.",
    description:
      "From retaining walls and patios to fire pits and outdoor kitchens, our hardscape installations combine structural integrity with stunning design. Every project is custom-built to complement your home and property.",
    features: [
      "Retaining Walls",
      "Patios & Walkways",
      "Fire Pits",
      "Outdoor Kitchens",
      "Driveways",
      "Edging & Borders",
    ],
    photos: [
      { src: "/images/image10.jpeg", alt: "Retaining wall", caption: "Custom retaining wall" },
      { src: "/images/image24.jpeg", alt: "Brick blocks",    caption: "Brick blocks" },
      { src: "/images/image8.jpeg", alt: "Full shot of wall",       caption: "Full shot of wall" },
      { src: "/images/image9.jpeg", alt: "Retaining Wall",        caption: "Retaining Wall" },
    ]
  },
  specialty: {
    title: "Specialty Services",
    tagline: "The big jobs. Done right.",
    description:
      "Beyond the basics. We handle snow removal, irrigation installs, commercial properties, and large-scale grading. If it is outside, we can handle it.",
    features: [
      "Snow Removal",
      "Irrigation Install",
      "Commercial Services",
      "Brush Clearing",
      "Grading & Leveling",
      "Seasonal Maintenance Plans",
    ],
    photos: [
      { src: "/images/image21.jpeg", alt: "Snow removal",  caption: "Snow removal" },
      { src: "/images/image22.jpeg", alt: "Irrigation",    caption: "Irrigation install" },
      { src: "/images/image23.jpeg", alt: "Commercial",    caption: "Commercial property" },
      { src: "/images/image24.jpeg", alt: "Large job",     caption: "Large-scale project" },
      { src: "/images/image25.jpeg", alt: "Grading",       caption: "Site grading" },
      { src: "/images/image26.jpeg", alt: "Cleared lot",   caption: "Lot clearing" },
    ]
  }
}