/* =========================================================
   Edit everything about the site from this one file.
   ========================================================= */

export const site = {
  brand: "ResidentialDesk",
  name: "Vivek",
  role: "Real Estate Consultant",
  city: "Your City", // e.g. "Pune"
  phone: "+919999999999", // digits with country code — used for calls & WhatsApp
  phoneDisplay: "+91 99999 99999",
  email: "hello@residentialdesk.com",
  whatsappGreeting: "Hi Vivek, I found you through ResidentialDesk.",
};

export const tel = `tel:${site.phone}`;
export const mail = `mailto:${site.email}`;
export const wa = (text = site.whatsappGreeting) =>
  `https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

export const stats = [
  { value: "10+", label: "Years experience" },
  { value: "250+", label: "Families helped" },
  { value: "4.9", label: "Client rating" },
];

export type Property = {
  title: string;
  location: string;
  status: "For Sale" | "For Rent";
  price: string;
  specs: string[];
  image: string;
};

export const properties: Property[] = [
  {
    title: "Garden Villa",
    location: "Prime Residential Enclave",
    status: "For Sale",
    price: "₹ 3.2 Cr",
    specs: ["4 BHK", "3,200 sq ft", "Private pool"],
    image: "/images/villa.jpg",
  },
  {
    title: "Skyline Residence",
    location: "City Centre",
    status: "For Sale",
    price: "₹ 1.45 Cr",
    specs: ["3 BHK", "1,750 sq ft", "Club access"],
    image: "/images/tower.jpg",
  },
  {
    title: "Urban Loft",
    location: "Business District",
    status: "For Rent",
    price: "₹ 55,000/mo",
    specs: ["2 BHK", "1,100 sq ft", "Furnished"],
    image: "/images/loft.jpg",
  },
];

export const services = [
  { title: "Buying advisory", text: "Shortlisting, site visits, negotiation and legal due diligence — handled with you." },
  { title: "Selling & valuation", text: "Right-price guidance and genuine buyers, not just footfall." },
  { title: "Rentals & leasing", text: "Quality homes and tenants, with clean, simple agreements." },
  { title: "Investment consulting", text: "Growth areas, rental yield and an honest view of the risks." },
];

export const steps = [
  { title: "Talk", text: "A quick call to understand your needs, budget and timeline." },
  { title: "Shortlist", text: "Only homes that genuinely fit — with honest pros and cons." },
  { title: "Visit", text: "Viewings scheduled around you, in person or on video." },
  { title: "Close", text: "Negotiation, paperwork and handover, done right." },
];

export const faqs = [
  { q: "Do you charge buyers a fee?", a: "Fees depend on the deal type. Vivek explains everything upfront on the first call — no surprises." },
  { q: "Which areas do you cover?", a: "Most residential areas across the city and its growth corridors. Ask about a specific location anytime." },
  { q: "Can you help with home loans and paperwork?", a: "Yes. Vivek coordinates with trusted lenders and legal experts so documentation is smooth." },
  { q: "How quickly do you respond?", a: "Usually the same day. WhatsApp is the fastest way to reach him." },
];
