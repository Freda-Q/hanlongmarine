const BASE_URL = import.meta.env.BASE_URL;
const withBase = (path: string) => `${BASE_URL}${path.replace(/^\//, "")}`;

export const heroStats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "24/7", label: "Global Support" }
];

export const certifications = [
  "Bureau Veritas",
  "Lloyd's Register",
  "DNV",
  "SGS",
  "ISO 9001",
  "OCIMF MEG4"
];

export const productCategories = [
  {
    id: "marine-fluid-transfer",
    title: "Marine Fluid Transfer",
    description:
      "Ship-to-shore fluid transfer equipment for crude oil, chemical, LNG and LPG terminals with controlled motion envelope and safer vessel interface design.",
    coverImage: withBase("/assets/home-categories/marine-fluid-transfer.png"),
    href: withBase("/products/"),
    items: [
      {
        slug: "marine-loading-arms",
        title: "Marine Loading Arms",
        image: withBase("/assets/marine_loading_arm.png"),
        note: "ERS & QC/DC focused flagship product"
      },
      {
        slug: "jetty-gangways",
        title: "Jetty Gangways",
        image: withBase("/assets/marine_loading_arm.png"),
        note: "Marine access and terminal walkway systems"
      }
    ]
  },
  {
    id: "land-fluid-transfer",
    title: "Land Fluid Transfer",
    description:
      "Depot and terminal loading equipment for truck, railcar and skid-mounted transfer systems with vapor recovery and metering-ready layouts.",
    coverImage: withBase("/assets/home-categories/land-fluid-transfer.png"),
    href: withBase("/products/"),
    items: [
      {
        slug: "truck-railcar-loading-arms",
        title: "Truck & Railcar Loading Arms",
        image: withBase("/assets/truck_loading_arm.png"),
        note: "Top / bottom loading and vapor recovery"
      },
      {
        slug: "integrated-loading-skids",
        title: "Integrated Loading Skids",
        image: withBase("/assets/truck_loading_arm.png"),
        note: "System integration and packaged loading modules"
      }
    ]
  },
  {
    id: "safe-mooring-systems",
    title: "Safe Mooring Systems",
    description:
      "Safety-critical mooring hardware and monitoring systems designed for controlled release, real-time load visibility and hazardous-area compatibility.",
    coverImage: withBase("/assets/home-categories/safe-mooring-systems.png"),
    href: withBase("/products/"),
    items: [
      {
        slug: "quick-release-mooring-hooks",
        title: "Quick Release Mooring Hooks",
        image: withBase("/assets/quick_release_hook.png"),
        note: "Capstan and load monitoring focused"
      },
      {
        slug: "mooring-load-monitoring-system",
        title: "Mooring Load Monitoring System",
        image: withBase("/assets/quick_release_hook.png"),
        note: "Tension monitoring software and field terminals"
      }
    ]
  },
  {
    id: "berthing-aid-systems",
    title: "Berthing Aid Systems",
    description:
      "Laser-guided berthing and environmental monitoring systems that reduce approach risk and improve terminal control visibility.",
    coverImage: withBase("/assets/home-categories/berthing-aid-systems.png"),
    href: withBase("/products/"),
    items: [
      {
        slug: "berthing-aid-systems",
        title: "Laser-Guided Berthing Aid",
        image: withBase("/assets/berthing_aid_system.png"),
        note: "Laser ranging, large displays and environmental integration"
      }
    ]
  }
];

export const companyIntro = {
  title: "Suzhou Hanlong Petrochemical Equipment Co., LTD",
  description:
    "Suzhou Hanlong Petrochemical Equipment Co., LTD is located in Zhangjiagang City, Jiangsu Province, around 80 kilometers from Shanghai and connected by a riverine expressway. The company focuses on fluid handling equipment, petrochemical machinery, port machinery, wharf mooring equipment, cable tension monitoring systems, laser berthing systems, environmental monitoring and control systems, and oil spill detection alarm systems. Hanlong provides design, manufacturing, sales and technical service as a specialized industrial equipment manufacturer.",
  image: withBase("/assets/hero_poster.png")
};

export const aboutCapabilities = [
  {
    title: "Advanced Facilities",
    description:
      "Modern production lines and testing equipment ensure precision manufacturing."
  },
  {
    title: "Quality Control",
    description:
      "Rigorous inspection and testing at every stage to meet international standards."
  },
  {
    title: "Engineered to Perform",
    description:
      "Every system is designed, built and tested for long-term reliability in demanding environments."
  }
];

export const applications = [
  {
    title: "Oil & Gas Terminals",
    description:
      "Marine loading arms, safe mooring systems and berth safety equipment for crude oil and refined product transfer.",
    image: withBase("/assets/hero_poster.png")
  },
  {
    title: "Chemical & Petrochemical",
    description:
      "Safe and efficient handling of hazardous and specialty chemicals.",
    image: withBase("/assets/testing.png")
  },
  {
    title: "Marine & Bulk Terminals",
    description:
      "Engineered for diverse cargoes and demanding marine operations.",
    image: withBase("/assets/workshop.png")
  }
];

export const rfqHighlights = [
  {
    title: "Tailored Solutions",
    description: "Custom-engineered systems for your needs."
  },
  {
    title: "Expert Support",
    description: "From design to installation and beyond."
  },
  {
    title: "Fast & Reliable Response",
    description: "We are here to keep your operations moving."
  }
];

export const ctaItems = [
  {
    title: "RFQ Support",
    description:
      "Submit datasheets, fluid parameters or jetty layout drawings for a more accurate preliminary technical review."
  },
  {
    title: "Class Approval Assistance",
    description:
      "We support major class and project approval expectations including ABS, CCS, BV, DNV and RINA-related documentation needs."
  }
];

export const topLevelPages = [
  { href: BASE_URL, label: "Home" },
  { href: withBase("/engineering-strength/"), label: "About Us" },
  { href: withBase("/products/"), label: "Products" },
  { href: withBase("/case-studies/"), label: "Solutions" },
  { href: withBase("/downloads/"), label: "Resources" },
  { href: withBase("/contact/"), label: "Contact Us" }
];

export const contactInfo = {
  company: "Suzhou Hanlong Petrochemical Equipment Co., LTD",
  address: "Add: 2# South District Baiqiao Village, Zhangjiagang City, Jiangsu Province, China",
  tel: "Tel:",
  mobile: "Mob: (+86)139-2196-7776",
  fax: "Fax:",
  email: "Email: sales@hanlongsz.cn"
};
