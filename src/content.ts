import { Drum, Droplets, Landmark, Mic, Shirt, Waves } from "lucide-react";
import { assets } from "./assets";
import type { CraftItem, HeroSlideItem, LookbookItem, NavItem, OrderItem, PatternItem, ProfessionalImageItem } from "./types";

export const links = {
  shopify: "https://abiade-adire.myshopify.com",
  festivalForm: "https://docs.google.com/forms/d/e/1FAIpQLScjVQnCC8UPNSv1fPqj6UPzlFrkhxRgek3n4YIWOZ3gHMyDLw/viewform?usp=header",
  academyForm: "https://docs.google.com/forms/d/e/1FAIpQLSclty8GvOEwHRbMCtRSQNyyIFujNBD48mMNNg7E8RUpfMB4Tw/viewform?usp=header"
} as const;

export const navItems = [
  { href: "#patterns", label: "About", title: "Read about the Abiade Adire Festival" },
  { href: "#craft", label: "Program", title: "Explore the Abiade Adire Festival program" },
  { href: "#orders", label: "Tickets", title: "View Abiade Adire Festival tickets" },
  { href: "#professional", label: "Gallery", title: "View the Abiade Adire Festival gallery" },
  { href: "#contact", label: "Contact", title: "Contact Abiade Adire Festival" }
] satisfies readonly NavItem[];

export const heroSlideItems = [
  {
    id: "hero-blue-adire",
    src: assets.blueLook
  },
  {
    id: "hero-professional-blue-green",
    src: assets.professionalBlueGreen
  },
  {
    id: "hero-cultural-pair",
    src: assets.pairLook
  },
  {
    id: "hero-professional-colour",
    src: assets.professionalBalconyColour
  }
] satisfies readonly HeroSlideItem[];

export const professionalImageItems = [
  {
    id: "maroon-balcony-profile",
    src: assets.professionalMaroon,
    alt: "Model in a maroon and yellow tie-dye Adire shirt leaning on an outdoor railing",
    width: 1600,
    height: 1200
  },
  {
    id: "geometric-shirt",
    src: assets.professionalGeometric,
    alt: "Man in a geometric Adire shirt standing by a balcony railing and looking at his phone",
    width: 1600,
    height: 1200
  },
  {
    id: "blue-green-profile",
    src: assets.professionalBlueGreen,
    alt: "Model in a blue and green tie-dye Adire shirt photographed in profile beside a tiled roof",
    width: 1200,
    height: 1600
  },
  {
    id: "balcony-colour-shirt",
    src: assets.professionalBalconyColour,
    alt: "Woman in a colourful tie-dye Adire top adjusting sunglasses on a balcony",
    width: 1200,
    height: 1600
  },
  {
    id: "monochrome-shirt",
    src: assets.professionalMonochrome,
    alt: "Woman in a black and white tie-dye Adire shirt leaning on a balcony railing",
    width: 1200,
    height: 1600
  }
] satisfies readonly ProfessionalImageItem[];

export const lookbookItems = [
  {
    id: "blue-kaftan",
    className: "lookbook-item lookbook-item--large",
    src: assets.styledBlueKaftan,
    alt: "Woman in a blue patterned kaftan and yellow headwrap standing before a rock wall",
    width: 1635,
    height: 2200,
    title: "Open blue kaftan styled look"
  },
  {
    id: "green-pink-dress",
    className: "lookbook-item",
    src: assets.styledGreenPinkDress,
    alt: "Woman in a green and pink patterned dress standing before a rock wall",
    width: 1467,
    height: 2200,
    title: "Open green and pink dress styled look"
  },
  {
    id: "mens-traditional-suit",
    className: "lookbook-item",
    src: assets.styledMensTraditionalSuit,
    alt: "Man in a patterned traditional suit and cap standing before a rock wall",
    width: 1467,
    height: 2200,
    title: "Open men’s traditional suit styled look"
  },
  {
    id: "blue-gown-full-look",
    className: "lookbook-item",
    src: assets.styledBlueGown,
    alt: "Woman in a flowing blue patterned gown with coral beads standing before a rock wall",
    width: 1467,
    height: 2200,
    title: "Open flowing blue gown styled look"
  },
  {
    id: "striped-tote-detail",
    className: "lookbook-item lookbook-item--wide lookbook-item--detail-wide",
    src: assets.styledStripedToteDetail,
    alt: "Close view of a striped woven tote beside patterned Adire fabric",
    width: 1858,
    height: 2200,
    title: "Open striped tote and Adire detail"
  },
  {
    id: "blue-pantsuit",
    className: "lookbook-item",
    src: assets.styledBluePantsuit,
    alt: "Woman in a blue patterned pantsuit and a dramatic woven hat",
    width: 1467,
    height: 2200,
    title: "Open blue pantsuit styled look"
  },
  {
    id: "yellow-skirt-editorial",
    className: "lookbook-item",
    src: assets.styledYellowSkirt,
    alt: "Woman in a patterned top and yellow skirt posing before a rock wall",
    width: 1654,
    height: 2200,
    title: "Open yellow skirt editorial look"
  },
  {
    id: "mens-batik-set",
    className: "lookbook-item",
    src: assets.styledMensBatikSet,
    alt: "Man in a matching patterned shirt and trousers standing before a rock wall",
    width: 1467,
    height: 2200,
    title: "Open men’s batik set styled look"
  },
  {
    id: "editorial-duo",
    className: "lookbook-item",
    src: assets.styledEditorialDuo,
    alt: "Two models in coordinated Adire looks posing before a rock wall",
    width: 1467,
    height: 2200,
    title: "Open coordinated Adire editorial look"
  },
  {
    id: "purple-batik-portrait",
    className: "lookbook-item lookbook-item--wide lookbook-item--portrait-wide",
    src: assets.styledPurplePortrait,
    alt: "Seated man in a purple patterned traditional outfit and cap holding a wooden staff",
    width: 1579,
    height: 2200,
    title: "Open purple batik portrait"
  },
  {
    id: "teal-studio-look",
    className: "lookbook-item",
    src: assets.styledTealFullLook,
    alt: "Woman in a teal patterned outfit with a white headwrap and woven bag",
    width: 1467,
    height: 2200,
    title: "Open teal studio styled look"
  }
] satisfies readonly LookbookItem[];

export const patternItems = [
  {
    id: "colour",
    title: "Adire Fashion Show",
    description: "Fashion on tradition: styled Adire pieces, movement, texture, and ceremony presented with a contemporary eye.",
    Icon: Droplets
  },
  {
    id: "repeat",
    title: "Cultural Performances",
    description: "Dance, drums, chants, and live cultural displays bring the textile story into rhythm and public celebration.",
    Icon: Waves
  },
  {
    id: "cut",
    title: "Knowledge Sessions",
    description: "Conversations on Yoruba heritage, Adire process, creative enterprise, and the makers preserving the craft.",
    Icon: Mic
  }
] satisfies readonly PatternItem[];

export const craftItems = [
  {
    term: "Adire Fashion Show",
    description: "A vibrant showcase of culture and creativity, where timeless Adire patterns meet modern style, inviting audiences to experience vibrant designs, cultural storytelling, and modern runway artistry inspired by Adire.",
    Icon: Shirt
  },
  {
    term: "Cultural Displays",
    description: "Vibrant dance, drumming, stage performance, chants, and oratory bring Yoruba heritage into full view.",
    Icon: Drum
  },
  {
    term: "Museum of Culture",
    description: "A dedicated cultural space connecting guests with Yoruba history, material culture, artistic heritage, and the wider stories that give Adire its meaning across generations.",
    Icon: Landmark
  },
  {
    term: "Symposium",
    description: "The Symposium is a platform for dialogue, discovery, and collaboration around Nigeria’s iconic hand‑dyed textile tradition. Scholars, artisans, and designers gather to explore Adire’s cultural heritage, modern applications, and its role in empowering communities and shaping global fashion narratives.",
    Icon: Mic
  }
] satisfies readonly CraftItem[];

export const orderItems = [
  {
    step: "01",
    tier: "vip",
    title: "VIP Ticket",
    price: "₦15,000",
    intro: "Step into an unforgettable cultural experience with exclusive VIP access.",
    benefits: [
      "Front-row runway seating at the Adire Fashion Show",
      "Welcome drinks & refreshments on arrival",
      "Exclusive Adire souvenir crafted for VIP guests",
      "Dedicated VIP entrance & seamless check-in",
      "Professional photographs & content captured at the event",
      "Access to Museum of Culture",
      "Closer view of guest artists and direct connection with symposium panelists",
      "Access to a private VIP networking lounge",
      "Priority entry to select festival activities",
      "Special gifts from participating brands & designers"
    ],
    closing: "Celebrate Yoruba culture, creativity, and community in style. This is more than a ticket — it’s a premium cultural experience.",
    href: "https://paystack.shop/pay/adiregoldcircle",
    linkTitle: "Purchase an Abiade Adire Festival VIP ticket on Paystack"
  },
  {
    step: "02",
    tier: "silver",
    title: "Silver Circle Ticket",
    price: "₦7,000",
    intro: "Join the celebration of culture, creativity, and community with your Silver Circle access.",
    benefits: [
      "Priority seating allocation (earlier buyers enjoy front-row advantage)",
      "Light refreshments during the festival",
      "Festival souvenirs to take home",
      "Access to cultural performances and exhibitions",
      "Entry into symposium sessions with thought-provoking panelists",
      "Immersion in the vibrant community celebrating Yoruba heritage and innovation"
    ],
    closing: "Secure your seat early — limited availability. This is more than a ticket; it’s your gateway into the Adire experience.",
    href: "https://paystack.shop/pay/adiresilvercircle",
    linkTitle: "Purchase an Abiade Adire Festival Silver Circle ticket on Paystack"
  },
  {
    step: "03",
    tier: "campus",
    title: "Campus Entry Ticket",
    price: "₦5,000",
    intro: "Experience the festival spirit at a student-friendly price.",
    benefits: [
      "General seating at the Adire Fashion Show",
      "Access to cultural performances and exhibitions",
      "Entry into symposium sessions with inspiring panelists",
      "Participation in festival activities and community experiences",
      "A chance to connect with peers and immerse yourself in Yoruba heritage"
    ],
    closing: "Affordable, vibrant, and inclusive — the Campus Entry ticket is your gateway to culture, creativity, and community.",
    href: "https://paystack.shop/pay/campuscultureentry",
    linkTitle: "Purchase an Abiade Adire Festival Campus Entry ticket on Paystack"
  }
] satisfies readonly OrderItem[];
