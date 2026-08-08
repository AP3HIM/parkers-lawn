// Photos mapped to Parker's real images in /public/images/
// Reviews: image0, image6, image7, image28, image29, image30
//
// Photos are grouped into "projects" per service category. Each project has a
// name (shown as a header on the service page) and a list of photos. Add new
// photos by pushing into an existing project's `photos` array, or add a brand
// new project by adding another { name, photos: [] } entry.
//
// Empty projects (photos: []) are placeholders — the gallery will show a
// "Photos coming soon" message until images are added.

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
    projects: [
      {
        name: "Mowing & Edging",
        photos: [
          { src: "/extraimg4/image6.jpeg", alt: "Mowing lines", caption: "Mowing lines" },
          { src: "/extraimg4/image5.jpeg", alt: "Mowing lines with tree", caption: "Mowing lines with tree" },
          { src: "/images/image36.jpg", alt: "Mowing lines", caption: "Mowing lines" },
          { src: "/images/image37.jpg", alt: "Mowing lines", caption: "Mowing lines" },
          { src: "/images/image32.jpg", alt: "Mowing lines wide shot", caption: "Mowing lines wide shot" },
        ],
      },
      {
        name: "Tree & Bed Care",
        photos: [
          { src: "/images/image12.jpeg", alt: "Trees and soil platform", caption: "Trees and soil platform" },
          { src: "/images/image13.jpeg", alt: "Trees side view", caption: "Trees side view" },
        ],
      },
    ],
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
    projects: [
      {
        name: "Landscape Design",
        photos: [],
      },
      {
        name: "Rock & Stone Beds",
        photos: [
          { src: "/extraimg/image14.jpeg", alt: "Rocks", caption: "Rocks" },
          { src: "/extraimg/image13.jpeg", alt: "Rocks", caption: "Rocks" },
          { src: "/extraimg/image12.jpeg", alt: "Rocks", caption: "Rocks" },
        ],
      },
      {
        name: "Flower Beds",
        photos: [
          { src: "/extraimg5/image0.jpeg", alt: "Flowers", caption: "Flowers against house" },
          { src: "/extraimg5/image3.jpeg", alt: "Flowers", caption: "Flowers" },
          { src: "/extraimg5/image6.jpeg", alt: "Flowers", caption: "Flowers" },
          { src: "/extraimg5/image7.jpeg", alt: "Flowers", caption: "Flowers" },
          { src: "/images/image14.jpeg", alt: "View of trees", caption: "View of trees" },
        ],
      },
      {
        name: "Mulch Installs",
        photos: [
          { src: "/images/image15.jpeg", alt: "Mulch install", caption: "Fresh mulch installation" },
          { src: "/images/image24.jpeg", alt: "Wide shot of mulching", caption: "Wide shot of mulching" },
          { src: "/images/image25.jpeg", alt: "Mulching from side", caption: "Mulching from side" },
        ],
      },
      {
        name: "Natural Mulch",
        photos: [],
      },
      {
        name: "Black Mulch Project",
        photos: [],
      },
      {
        name: "Paver Patios",
        photos: [],
      },
    ],
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
    projects: [
      {
        name: "Retaining Walls",
        photos: [
          { src: "/extraimg5/image26.jpeg", alt: "Retaining wall", caption: "Retaining wall" },
          { src: "/extraimg5/image22.jpeg", alt: "Retaining wall", caption: "Retaining wall" },
          { src: "/extraimg5/image20.jpeg", alt: "Retaining wall", caption: "Retaining wall" },
          { src: "/extraimg5/image19.jpeg", alt: "Retaining wall", caption: "Retaining wall" },
          { src: "/images/image10.jpeg", alt: "Retaining wall", caption: "Custom retaining wall" },
          { src: "/images/image8.jpeg", alt: "Full shot of wall", caption: "Full shot of wall" },
          { src: "/images/image9.jpeg", alt: "Retaining Wall", caption: "Retaining Wall" },
        ],
      },
      {
        name: "Patios & Walkways",
        photos: [],
      },
      {
        name: "Luxury Outdoor Living",
        photos: [
          { src: "/hardscaping/luxury/IMG_8619.jpg", alt: "Paver patio with tropical mural wall", caption: "Large-format paver patio with hand-painted tropical mural backdrop" },
          { src: "/hardscaping/luxury/IMG_8621.jpg", alt: "Porcelain paver patio close-up", caption: "Large-format porcelain paver installation" },
          { src: "/hardscaping/luxury/IMG_8622.jpg", alt: "Paver walkway along mural wall", caption: "Paver walkway framing the mural-wrapped garage" },
          { src: "/hardscaping/luxury/IMG_8629.jpg", alt: "Finished paver patio", caption: "Finished paver patio, sealed and ready to enjoy" },
          { src: "/hardscaping/luxury/IMG_8454.jpg", alt: "Paver walkway beside black aluminum fence", caption: "Paver walkway along the side yard with aluminum fencing" },
          { src: "/hardscaping/luxury/IMG_8455.jpg", alt: "Paver patio corner detail", caption: "Paver patio corner detail along the home's foundation" },
          { src: "/hardscaping/luxury/IMG_8456.jpg", alt: "Retaining wall with aluminum fence", caption: "Retaining wall topped with black aluminum fencing" },
          { src: "/hardscaping/luxury/IMG_8457.jpg", alt: "Hardscape project detail", caption: "Hardscape project detail" },
          { src: "/hardscaping/luxury/IMG_8458.jpg", alt: "Hardscape project detail", caption: "Hardscape project detail" },
          {
            type: "video",
            src: "/hardscaping/luxury/IMG_8459.mp4",
            poster: "/hardscaping/luxury/IMG_8459_poster.jpg",
            alt: "Luxury patio walkthrough video",
            caption: "Walkthrough of the finished patio space",
          },
          {
            type: "video",
            src: "/hardscaping/luxury/IMG_8460.mp4",
            poster: "/hardscaping/luxury/IMG_8460_poster.jpg",
            alt: "Luxury patio walkthrough video",
            caption: "Walkthrough of the finished patio space",
          },
        ],
      },
      {
        name: "Practical Outdoor Living",
        photos: [
          { src: "/hardscaping/practical/IMG_8319.jpg", alt: "Paver patio pad under shade tree", caption: "Flagstone-style paver patio freshly installed under a shade tree" },
          { src: "/hardscaping/practical/IMG_8320.jpg", alt: "Paver patio pad detail", caption: "Paver patio pad detail" },
          { src: "/hardscaping/practical/IMG_8322.jpg", alt: "Paver patio wide shot", caption: "Paver patio wide shot" },
          { src: "/hardscaping/practical/IMG_8324.jpg", alt: "Crew member with finished paver pad", caption: "Parker's crew wrapping up a paver patio install" },
          { src: "/hardscaping/practical/IMG_8329.jpg", alt: "Paver patio finished shot", caption: "Paver patio finished shot" },
          { src: "/hardscaping/practical/IMG_8094.jpg", alt: "Paver pad with black mulch edging in garden bed", caption: "Small paver pad set into a mulched garden bed" },
          { src: "/hardscaping/practical/IMG_8095.jpg", alt: "Paver pad in garden bed, alternate angle", caption: "Paver pad in garden bed, alternate angle" },
          { src: "/hardscaping/practical/IMG_8251.jpg", alt: "Newly installed paver pad", caption: "Newly installed paver pad, ready for edging" },
          { src: "/hardscaping/practical/IMG_8252.jpg", alt: "Paver pad detail", caption: "Paver pad detail" },
          { src: "/hardscaping/practical/IMG_8253.jpg", alt: "Paver pad detail", caption: "Paver pad detail" },
          { src: "/hardscaping/practical/IMG_8254.jpg", alt: "Paver pad finished with edging", caption: "Paver pad finished with edging" },
          { src: "/hardscaping/practical/IMG_8521.jpg", alt: "Retaining wall with built-in steps", caption: "Low retaining wall with built-in steps along the driveway" },
          { src: "/hardscaping/practical/IMG_8522.jpg", alt: "Retaining wall detail", caption: "Retaining wall detail" },
          { src: "/hardscaping/practical/IMG_8524.jpg", alt: "Retaining wall finished shot", caption: "Retaining wall finished shot" },
          {
            type: "video",
            src: "/hardscaping/practical/IMG_8096.mp4",
            poster: "/hardscaping/practical/IMG_8096_poster.jpg",
            alt: "Hardscape project walkthrough video",
            caption: "Project walkthrough",
          },
          {
            type: "video",
            src: "/hardscaping/practical/IMG_8257.mp4",
            poster: "/hardscaping/practical/IMG_8257_poster.jpg",
            alt: "Hardscape project walkthrough video",
            caption: "Project walkthrough",
          },
          {
            type: "video",
            src: "/hardscaping/practical/IMG_8523.mp4",
            poster: "/hardscaping/practical/IMG_8523_poster.jpg",
            alt: "Retaining wall walkthrough video",
            caption: "Retaining wall walkthrough",
          },
        ],
      },
    ],
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
    projects: [
      {
        name: "Snow Removal",
        photos: [
          { src: "/extraimg5/image24.jpeg", alt: "Snow removal", caption: "Snow removal" },
          { src: "/images/image33.jpg", alt: "Snow removal", caption: "Snow removal" },
          { src: "/images/image34.jpg", alt: "Snow removal", caption: "Snow removal" },
          { src: "/images/image35.jpg", alt: "Snow removal", caption: "Snow removal" },
          { src: "/images/image36.jpeg", alt: "Snow removal", caption: "Snow removal" },
        ],
      },
      {
        name: "Aeration",
        photos: [
          { src: "/images/image38.jpg", alt: "Aeration", caption: "Aeration" },
          { src: "/images/image39.jpg", alt: "Aeration", caption: "Aeration" },
        ],
      },
    ],
  },
}

// Convenience helper: flattens every project's photos for a service into one
// array, for anywhere that just needs "the first photo" or "all photos".
export const getAllPhotos = (svc) => svc.projects.flatMap((p) => p.photos)

// Returns the first available photo for a service, skipping empty
// placeholder projects. Falls back to null if nothing has been added yet.
export const getCoverPhoto = (svc) => getAllPhotos(svc)[0] || null
