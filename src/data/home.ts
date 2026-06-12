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
    coverImage: withBase("/assets/delivery/marine-loading-systems.jpg"),
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
    coverImage: withBase("/assets/delivery/land-loading-systems.jpg"),
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
    coverImage: withBase("/assets/delivery/mooring-safety-systems.jpg"),
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
    coverImage: withBase("/assets/delivery/access-loading-platforms.jpg"),
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

export const whyMetrics = [
  { value: "200+", label: "Global Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Engineering Professionals" }
];

export const whyCapabilities = [
  {
    icon: "⚙️",
    title: "In-House Engineering Design",
    description:
      "Full 3D CAD modeling, FEA stress analysis and hydraulic simulation for project-specific requirements."
  },
  {
    icon: "🏭",
    title: "Verified Manufacturing Facility",
    description:
      "18,000m² factory in Zhangjiagang with CNC machining centers, heavy fabrication and dedicated test platforms."
  },
  {
    icon: "🔬",
    title: "Rigorous Quality Control",
    description:
      "NDT, UT, MT and RT inspection with full material traceability and third-party inspection support."
  },
  {
    icon: "🌍",
    title: "Global Project Experience",
    description:
      "Proven delivery across oil terminals, LNG jetties, chemical wharves and port infrastructure projects."
  },
  {
    icon: "📋",
    title: "International Standards Compliance",
    description:
      "Designed and tested to OCIMF, ASME, EN, API and customer-specific standards with full documentation."
  }
];

export const factoryGallery = [
  {
    image: withBase("/assets/delivery/project-case-1.jpg"),
    alt: "Marine loading arm on-site commissioning",
    label: "Marine Loading Arm — On-Site Commissioning",
    size: "large"
  },
  {
    image: withBase("/assets/delivery/project-case-2.jpg"),
    alt: "LNG truck loading station",
    label: "LNG Truck Loading Station",
    size: "medium"
  },
  {
    image: withBase("/assets/delivery/mooring-safety-systems.jpg"),
    alt: "Quick release mooring hooks",
    label: "QRH Mooring System",
    size: "medium"
  },
  {
    image: withBase("/assets/delivery/project-case-3.jpg"),
    alt: "Petrochemical terminal",
    label: "Petrochemical Terminal",
    size: "medium"
  },
  {
    image: withBase("/assets/delivery/project-case-4.jpg"),
    alt: "Port infrastructure project",
    label: "Port Infrastructure",
    size: "medium"
  }
];

export const factoryProofs = [
  { icon: "🔧", label: "CNC Machining Center" },
  { icon: "⚡", label: "Heavy Fabrication" },
  { icon: "🔩", label: "Welding Workshop" },
  { icon: "🧪", label: "Pressure Test Platform" },
  { icon: "📦", label: "Assembly & Inspection" }
];

export const engineeringHighlights = [
  { title: "3D CAD Modeling", description: "Full parametric 3D design with interference checking and assembly simulation", tag: "SolidWorks / AutoCAD" },
  { title: "FEA Analysis", description: "Finite element stress and fatigue analysis for critical structural components", tag: "ANSYS / FEA" },
  { title: "Hydraulic Simulation", description: "Fluid dynamics and pressure drop calculation for optimal system performance", tag: "CFD Analysis" },
  { title: "Custom Engineering", description: "Non-standard configurations designed to meet unique project requirements", tag: "ETO Solutions" }
];

export const qualityCertificates = [
  { name: "ISO 9001", description: "Quality Management System — full production process control" },
  { name: "ATEX", description: "European explosive atmosphere directive compliance for Zone 1 & 2" },
  { name: "IECEx", description: "International explosive atmosphere certification for hazardous applications" },
  { name: "OCIMF", description: "Oil Companies International Marine Forum mooring equipment guideline alignment" },
  { name: "ASME", description: "Pressure vessel and piping design practice for critical process systems" },
  { name: "CE Mark", description: "European conformity for machinery and pressure equipment directives" }
];

export const qualityTests = [
  { icon: "🔊", name: "NDT", description: "Non-destructive testing for surface and subsurface defect detection" },
  { icon: "📡", name: "UT", description: "Ultrasonic testing for weld quality and wall thickness verification" },
  { icon: "🧲", name: "MT", description: "Magnetic particle testing for surface crack detection in ferrous materials" },
  { icon: "☢️", name: "RT", description: "Radiographic testing for internal weld inspection to ASME standards" },
  { icon: "⚖️", name: "Load Test", description: "Proof load and SWL verification for lifting and mooring equipment" },
  { icon: "📋", name: "Traceability", description: "Full material traceability from mill certificate to final test report" }
];

export const projectCases = [
  {
    image: withBase("/assets/delivery/project-case-1.jpg"),
    location: "Asia Pacific",
    title: "Petrochemical Terminal Loading Arm",
    type: "Marine Loading Arm · DN200 · Hydraulic"
  },
  {
    image: withBase("/assets/delivery/project-case-2.jpg"),
    location: "China · Xinjiang",
    title: "LNG Truck Loading Station",
    type: "Truck Loading Arms · 12 Bays · Cryogenic"
  },
  {
    image: withBase("/assets/delivery/mooring-safety-systems.jpg"),
    location: "Middle East",
    title: "Oil Terminal Mooring System",
    type: "QRH · SWL 60T × 4 · Hydraulic Release"
  },
  {
    image: withBase("/assets/delivery/project-case-3.jpg"),
    location: "China · Coastal Terminal",
    title: "Petrochemical Terminal Expansion",
    type: "Terminal Loading Bay · Multi-Product Transfer"
  },
  {
    image: withBase("/assets/delivery/project-case-4.jpg"),
    location: "Port Infrastructure",
    title: "Bulk & Chemical Port Infrastructure",
    type: "Skid Platforms · Utility Piping · Access Systems"
  },
  {
    image: withBase("/assets/delivery/project-case-5.jpg"),
    location: "Regional Distribution Hub",
    title: "Integrated Jetty & Transfer Package",
    type: "Marine Access · Process Structure · Delivery Support"
  }
];

export const downloadResources = [
  { icon: "📘", title: "Product Catalog", description: "Complete product range overview with specifications and configurations" },
  { icon: "📐", title: "Technical Datasheets", description: "Detailed dimensional drawings and performance specifications" },
  { icon: "🏆", title: "Certifications", description: "ISO 9001, ATEX, IECEx and other quality certifications" },
  { icon: "🔧", title: "Installation Manuals", description: "Operation and maintenance documentation for all product lines" }
];

export const rfqContactMethods = [
  { icon: "💬", label: "WHATSAPP", value: "+86 139 2196 7776", href: "https://wa.me/8613921967776" },
  { icon: "✉️", label: "EMAIL", value: "sales@hanlongsz.cn", href: "mailto:sales@hanlongsz.cn" },
  { icon: "📞", label: "PHONE", value: "+86 139 2196 7776", href: "tel:+8613921967776" },
  { icon: "📍", label: "FACTORY ADDRESS", value: "Zhangjiagang, Jiangsu, China" }
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
