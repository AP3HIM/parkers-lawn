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
      "Mowing Packages",
      "Fertilization Programs",
      "Weed Control",
      "Aeration & Overseeding",
      "Mulch & Rock Install",
      "Spring & Fall Cleanup",
    ],
    photos: [
      { src: "/extraimg4/image6.jpeg",  alt: "Mowing lines",        caption: "Mowing lines" },
      { src: "/extraimg4/image5.jpeg",  alt: "Mowing lines with tree",        caption: "Mowing lines with tree" },
      { src: "/images/image36.jpg",  alt: "Mowing lines",  caption: "Mowing lines" },
      { src: "/images/image37.jpg",  alt: "Mowing lines",  caption: "Mowing lines" },
      { src: "/images/image32.jpg",  alt: "Mowing lines wide shot",        caption: "Mowing lines wide shot" },
      { src: "/images/image12.jpeg", alt: "Trees and soil platform",      caption: "Trees and soil platform" },
      { src: "/images/image13.jpeg", alt: "Trees side view",    caption: "Trees side view" },
    ]
  },
  landscaping: {
    title: "Landscaping",
    tagline: "Living beauty, professionally crafted.",
    description:
      "We design and install full landscape transformations from native plant gardens to complete yard redesigns. Our team brings your vision to life with plants, mulch, rock, and seasonal color that thrives year after year.",
    features: [
      "Shrub Trimming and Removal",
      "Plant & Bed Installation",
      "Mulch & Rock Install",
      "Seasonal Color",
      "Brush Clearing",
      "Grading & Leveling",
    ],
    photos: [
      { src: "/extraimg/image14.jpeg",  alt: "Rocks", caption: "Rocks" },
      { src: "/extraimg/image13.jpeg",  alt: "Rocks", caption: "Rocks" },
      { src: "/extraimg/image12.jpeg",  alt: "Rocks", caption: "Rocks" },
      { src: "/extraimg5/image0.jpeg",  alt: "Flowers", caption: "Flowers against house" },
      { src: "/extraimg5/image3.jpeg",  alt: "Flowers", caption: "Flowers" },
      { src: "/extraimg5/image6.jpeg",  alt: "Flowers", caption: "Flowers" },
      { src: "/extraimg5/image7.jpeg",  alt: "Flowers", caption: "Flowers" },
      { src: "/images/image14.jpeg",  alt: "View of trees", caption: "View of trees" },
      { src: "/images/image15.jpeg", alt: "Mulch install",     caption: "Fresh mulch installation" },
      { src: "/images/image24.jpeg",  alt: "Wide shot of mulching",     caption: "Wide shot of mulching" },
      { src: "/images/image25.jpeg",  alt: "Mulching from side",       caption: "Mulching from side" },
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
      "Driveways",
      "Edging & Borders",
    ],
    photos: [
      { src: "/extraimg5/image26.jpeg",  alt: "Retaining wall", caption: "Retaining wall" },
      { src: "/extraimg5/image22.jpeg",  alt: "Retaining wall", caption: "Retaining wall" },
      { src: "/extraimg5/image20.jpeg",  alt: "Retaining wall", caption: "Retaining wall" },
      { src: "/extraimg5/image19.jpeg",  alt: "Retaining wall", caption: "Retaining wall" },
      { src: "/images/image10.jpeg", alt: "Retaining wall", caption: "Custom retaining wall" },
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
      "Commercial and Residential Snow Removal",
      "Irrigation Install",
      "Commercial Services",
      "Brush Clearing",
      "Grading & Leveling",
      "Seasonal Maintenance Plans",
    ],
    photos: [
      { src: "/extraimg5/image24.jpeg",  alt: "Snow removal", caption: "Snow removal" },
      { src: "/images/image33.jpg",  alt: "Snow removal",  caption: "Snow removal" },
      { src: "/images/image34.jpg",  alt: "Snow removal",  caption: "Snow removal" },
      { src: "/images/image35.jpg",  alt: "Snow removal",  caption: "Snow removal" },
      { src: "/images/image38.jpg",  alt: "Aeration",  caption: "Aeration" },
      { src: "/images/image39.jpg",  alt: "Aeration",  caption: "Aeration" },
      { src: "/images/image36.jpeg",  alt: "Snow removal",  caption: "Snow removal" },
    ]
  }
}