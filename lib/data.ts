// Real content sourced from appletonlittleparadise.com and the ALP Facebook page (facebook.com/ALPBeachREAL).
// Swap image URLs for locally-hosted, higher-res photography whenever it's ready —
// see the README for the recommended /public/photos structure.

export const site = {
  name: "Appleton Little Paradise",
  full: "Appleton Little Paradise Beach Resort & Restaurant",
  address: "Bridge of Sitio Talisay, Brgy. Capalong, Real, Quezon",
  phones: ["+63 998 593 2521", "+63 919 068 2125"],
  email: "appleton.little.paradise1@gmail.com",
  facebook: "https://www.facebook.com/ALPBeachREAL",
  instagram: "https://www.instagram.com/appletonbeachresort",
  tiktok: "https://www.tiktok.com/@appletonbeachresort",
  messenger: "https://m.me/ALPBeachREAL",
  mapsQuery:
    "https://www.google.com/maps/search/?api=1&query=Appleton+Little+Paradise+Beach+Resort+Real+Quezon",
  established: 2018,
};

export const IMG = {
  about: "https://appletonlittleparadise.com/wp-content/uploads/2024/01/About-Image.png",
  facilityWide: [
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/ALP-1.jpg",
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/ALP-2.jpg",
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/ALP-3.jpg",
  ],
  amenities: [
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-1.jpg",
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-2.jpg",
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-3.jpg",
    "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-4.jpg",
  ],
  gallery: [
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/1.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/2.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/3.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/4.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/5.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/6.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/7.jpg",
    "https://appletonlittleparadise.com/wp-content/gallery/facilities/8.jpg",
  ],
};

// The Estuary Line — signature wayfinding rail. Each node mirrors the real
// route a guest takes: off the highway, over the bridge, into the grounds,
// to the table, along the shore, and out to the water to book their stay.
export const estuaryNodes = [
  { id: "arrival", label: "Highway", sub: "01" },
  { id: "stay", label: "Bridge", sub: "02" },
  { id: "grounds", label: "Grounds", sub: "03" },
  { id: "table", label: "Table", sub: "04" },
  { id: "shore", label: "Shore", sub: "05" },
  { id: "booking", label: "Sea", sub: "06" },
];

export const rooms = [
  {
    name: "Seaside Villa",
    tag: "Signature",
    desc: "The resort's largest private villa, set closest to the waterline — a full living area, multiple beds, and a wraparound view of the estuary mouth.",
    price: "₱12,500",
    unit: "/ night · up to 10 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Seaside-Villa.jpg",
    status: "open",
  },
  {
    name: "StoneHouse Big Deluxe",
    tag: "Family",
    desc: "Stone-walled and river-facing, built for multi-family groups who want air-conditioned comfort without leaving the water's edge.",
    price: "₱8,900",
    unit: "/ night · up to 8 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/StoneHouse-Big-Deluxe.jpg",
    status: "limited",
  },
  {
    name: "StoneHouse",
    tag: "Classic",
    desc: "The original stone cottage — cool, quiet, and shaded by farm trees, a short walk from both the pool and the riverbank.",
    price: "₱5,600",
    unit: "/ night · up to 6 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/StoneHouse.jpg",
    status: "open",
  },
  {
    name: "Ocean View Room",
    tag: "Couples",
    desc: "A compact, air-conditioned room angled toward open water — our quietest option for couples chasing a sunrise.",
    price: "₱4,200",
    unit: "/ night · up to 2 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Ocean-View.jpg",
    status: "open",
  },
  {
    name: "Beach House",
    tag: "Groups",
    desc: "Raised on stilts just off the sand, with a shared porch built for barkada nights that spill past sundown.",
    price: "₱6,800",
    unit: "/ night · up to 8 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Beach-House.jpg",
    status: "limited",
  },
  {
    name: "Nipa Hut",
    tag: "Classic",
    desc: "A traditional bamboo-and-nipa cottage, elevated and open-air — the most requested room for its breeze and its price.",
    price: "₱2,800",
    unit: "/ night · up to 4 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Nipa-Hut.jpg",
    status: "open",
  },
  {
    name: "Open Cottage",
    tag: "Day use",
    desc: "A shaded, open-sided cottage on the sand for day-trippers — a table, a breeze, and a place to keep your things.",
    price: "₱1,200",
    unit: "/ day · up to 6 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Open-Cottage.jpg",
    status: "ahead",
  },
  {
    name: "Apartment",
    tag: "Extended stay",
    desc: "A self-contained unit with its own kitchenette — built for guests staying several nights or working remotely by the water.",
    price: "₱7,400",
    unit: "/ night · up to 6 guests",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Apartment.jpg",
    status: "open",
  },
];

export const statusMap: Record<string, { label: string; className: string }> = {
  open: { label: "Open today", className: "bg-tide-light/20 text-tide" },
  limited: { label: "Filling fast", className: "bg-brass/20 text-brass-dark" },
  ahead: { label: "Book ahead", className: "bg-ember/15 text-ember" },
};

export const amenitiesList = [
  { icon: "waves", label: "Ocean & riverfront", desc: "The rare address where a river and the Pacific meet on the same shoreline." },
  { icon: "droplets", label: "Adult & baby pools", desc: "Two freshwater pools, separated for little ones and grown-ups alike." },
  { icon: "flame", label: "Bonfire place", desc: "A fixed fire pit on the sand for the nights the karaoke goes quiet." },
  { icon: "tent", label: "Riverside glamping", desc: "Furnished tents pitched along the riverbank for a softer kind of camping." },
  { icon: "utensils-crossed", label: "Seafood restaurant", desc: "Grilled, steamed, and stewed catch, sourced same-day from local bangkeros." },
  { icon: "music", label: "Riverside videoke bar", desc: "Free videoke at the riverside beach bar — bring the whole barkada." },
  { icon: "waves-ladder", label: "Heated jacuzzi", desc: "For the nights the sea breeze runs cooler than expected." },
  { icon: "car", label: "Onsite parking", desc: "Covered, gated parking included with every overnight stay." },
  { icon: "sprout", label: "Farm play area", desc: "A working farm patch and play area for the kids to run loose." },
];

export const dishes = [
  {
    tag: "Signature",
    name: "Grilled bangus, whole",
    desc: "Milkfish grilled over coconut husk and stuffed with tomato and onion — the same recipe since 2018.",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-3.jpg",
  },
  {
    tag: "House recipe",
    name: "Bagnet kare-kare",
    desc: "Crisp bagnet folded into peanut kare-kare — the dish guests name first when asked what to order again.",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-2.jpg",
  },
  {
    tag: "Riverside bar",
    name: "Street food & grill",
    desc: "Skewers and street-food classics off the wash-and-grill station, best eaten barefoot on the sand.",
    img: "https://appletonlittleparadise.com/wp-content/uploads/2024/02/Amenities-4.jpg",
  },
];

export const testimonials = [
  {
    quote: "The owner and staff were all amazing — the customer service just shows how happy they are to have you there.",
    name: "Google review",
    context: "Overnight guest",
  },
  {
    quote: "You get more than what you pay for. Very clean, very accommodating from check-in to check-out.",
    name: "Google review",
    context: "Weekend group",
  },
  {
    quote: "Relaxing place with good food — I keep coming back for the bagnet kare-kare alone.",
    name: "Google review",
    context: "Repeat guest",
  },
];

export const faqs = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in is from 2:00 PM and check-out is by 12:00 noon. Early check-in and late check-out can be arranged on request, depending on turnover.",
  },
  {
    q: "How far is Appleton from Manila, and what's the road like?",
    a: "Roughly three hours by car via the Marilaque route (Marikina–Infanta–Real). The road is fully paved and a well-travelled weekend drive.",
  },
  {
    q: "Can we book a day-use cottage without staying overnight?",
    a: "Yes — the Open Cottage is available for day use, and the pools, restaurant, and riverside bar are open to day visitors seven days a week.",
  },
  {
    q: "Is the beach sandy or rocky, and is it safe for kids?",
    a: "Appleton sits where a river meets the open Pacific, so the shoreline is a mix of dark volcanic sand and rock with a noticeable current at the river mouth. The adult and baby pools are the calmer option for younger children.",
  },
  {
    q: "Do you take walk-ins, or should we book ahead?",
    a: "Walk-ins are welcome, but rooms and cottages fill quickly on weekends and holidays — booking direct through this site or by phone guarantees your rate and room.",
  },
  {
    q: "Can we reserve the function hall for a private event?",
    a: "Yes — the function hall and riverside bar can be reserved for reunions, birthdays, and celebrations. Message us on Facebook or call ahead to check the calendar.",
  },
];
