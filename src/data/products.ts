export type Product = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageNote: string;
  overview: string;
  components: string[];
  parameters: [string, string][];
  applications: string[];
  standards: string[];
};

export const products: Product[] = [
  {
    slug: 'marine-loading-arms',
    title: 'Marine Loading Arms',
    eyebrow: 'Marine Fluid Transfer',
    summary: 'Engineered for safe, zero-leakage fluid transfer in harsh marine environments.',
    image: '/images/placeholder-marine-loading-arm.webp',
    imageNote: 'Replace with night jetty scene showing a marine loading arm connected to a tanker.',
    overview: 'Hanlong marine loading arms are designed for oil, chemical, LNG and LPG terminals that need reliable ship-to-shore transfer, controlled motion envelope, and low-maintenance operation.',
    components: ['Rigid pantograph link system for mechanical balance and reduced jetty load', 'Emergency Release System with dual ball valves for fast, low-spillage separation', 'Hydraulic Quick Connect/Disconnect Coupler to reduce manual flange work', 'Swivel joints, vapor return lines, hydraulic power unit and control cabinet'],
    parameters: [['Nominal Diameter', 'DN100-DN500'], ['Design Pressure', 'Up to 4.0 MPa'], ['Temperature Range', '-196°C to +250°C'], ['Operation', 'Manual, hydraulic or ERS integrated'], ['Materials', 'Carbon steel, stainless steel, low-temperature steel']],
    applications: ['Crude oil and refined product jetties', 'Chemical and petrochemical terminals', 'LNG and cryogenic marine transfer', 'LPG and vapor recovery loading berths'],
    standards: ['OCIMF Design and Construction Specification for Marine Loading Arms', 'ASME B31.3 process piping', 'API flange and pressure component practices', 'Factory hydrostatic and functional acceptance testing']
  },
  {
    slug: 'truck-railcar-loading-arms',
    title: 'Truck & Railcar Loading Arms',
    eyebrow: 'Land Fluid Transfer',
    summary: 'Top and bottom loading arms for safer, faster terminal and depot operations.',
    image: '/images/placeholder-truck-railcar-loading-arm.webp',
    imageNote: 'Replace with truck or railcar loading station photo showing top/bottom loading arms.',
    overview: 'Land loading arms support petroleum, chemical, LPG and solvent transfer with ergonomic reach, vapor recovery options and terminal automation readiness.',
    components: ['Spring balance or counterweight mechanism for smooth operation', 'Drop pipe, loading valve and anti-static grounding interface', 'Vapor recovery arm for closed-loop loading and emission control', 'Swivel joints and parking lock for safe storage'],
    parameters: [['Nominal Diameter', 'DN50-DN200'], ['Loading Type', 'Top loading, bottom loading, vapor return'], ['Media', 'Fuel, solvent, chemical, LPG and additives'], ['Sealing', 'PTFE, Viton, graphite or media-specific seals'], ['Options', 'Overfill protection, grounding, metering, ESD interface']],
    applications: ['Oil depot truck loading bays', 'Railcar loading and unloading stations', 'Chemical distribution terminals', 'LPG and vapor recovery systems'],
    standards: ['API and ASME compatible pressure design', 'ATEX/IECEx electrical options for hazardous areas', 'Terminal ESD and overfill interlock readiness', 'Pressure and leak testing before shipment']
  },
  {
    slug: 'integrated-loading-skids',
    title: 'Integrated Loading Skids',
    eyebrow: 'Skid-Mounted Systems',
    summary: 'Modular fluid loading packages combining arms, metering, valves, controls and safety interlocks.',
    image: '/images/placeholder-loading-skid.webp',
    imageNote: 'Replace with skid-mounted loading system photo or 3D render with valves, meter and control panel.',
    overview: 'Integrated loading skids turn individual mechanical equipment into a ready-to-install process package, reducing site work and improving commissioning certainty.',
    components: ['Loading arm or hose connection module', 'Flow meter, strainer, control valve and ESD valve train', 'PLC control cabinet with local HMI and interlock logic', 'Skid frame, piping, cable tray and instrument junction boxes'],
    parameters: [['Configuration', 'Single or multi-lane loading skid'], ['Flow Range', 'Project-specific metering package'], ['Control', 'Local HMI, PLC, remote DCS interface'], ['Utilities', 'Electric, pneumatic or hydraulic actuators'], ['Documentation', 'P&ID, GA drawings, FAT records and IOM manual']],
    applications: ['Petrochemical truck loading terminals', 'Fuel depot modernization projects', 'Chemical batching and custody transfer', 'EPC projects requiring packaged delivery'],
    standards: ['ASME B31.3 piping design', 'IEC hazardous-area instrumentation options', 'Factory Acceptance Test before dispatch', 'Material traceability and pressure test reports']
  },
  {
    slug: 'quick-release-mooring-hooks',
    title: 'Quick Release Mooring Hooks',
    eyebrow: 'Safe Mooring Systems',
    summary: 'Safe and controlled mooring line release under maximum load.',
    image: '/images/placeholder-quick-release-hook.webp',
    imageNote: 'Replace with QRH unit photo or 3D cutaway showing hooks, capstan and load pins.',
    overview: 'Hanlong quick release hooks improve berth safety by enabling controlled local or remote line release, real-time load monitoring and efficient line handling.',
    components: ['Forged alloy steel hooks with SWL configurations from 30T to 150T', 'Integrated explosion-proof capstan for safer line handling', 'Load pin sensors for mooring load monitoring and alarm thresholds', 'Remote release system via electro-hydraulic or electric actuation'],
    parameters: [['Safe Working Load', '30T, 60T, 100T, 150T or customized'], ['Hook Layout', 'Single, double, triple or quadruple hook assembly'], ['Release Mode', 'Local manual, remote electric or electro-hydraulic'], ['Monitoring', 'Load pin, junction box, control room display'], ['Environment', 'Marine corrosion protection and hazardous-area options']],
    applications: ['Oil, LNG and chemical berths', 'Tanker terminals and jetties', 'High-risk mooring operations', 'Retrofit projects replacing conventional bollards'],
    standards: ['OCIMF MEG4 mooring safety principles', 'ATEX/IECEx options for Zone 1 and Zone 2', 'Factory load testing and release testing', 'Marine-grade coating and corrosion protection']
  },
  {
    slug: 'berthing-aid-systems',
    title: 'Berthing Aid Systems',
    eyebrow: 'Laser-Guided Berthing',
    summary: 'Laser distance, speed and angle guidance for safer vessel approach and berth operations.',
    image: '/images/placeholder-berthing-aid-system.webp',
    imageNote: 'Replace with laser berthing sensors, large LED display and control room dashboard visuals.',
    overview: 'Berthing aid systems support pilots and terminal operators with accurate vessel distance, approach speed, environmental data and visual display integration.',
    components: ['Laser distance sensors mounted on berth structures', 'Large outdoor LED display for pilots and tug operators', 'Wind, tide and current monitoring integration', 'Control room software, alarms and historical event records'],
    parameters: [['Measurement', 'Distance, approach speed and berthing angle'], ['Sensor Type', 'Laser range finder with marine enclosure'], ['Display', 'Outdoor LED board and control room HMI'], ['Integration', 'Mooring load, weather station, CCTV and DCS options'], ['Power & Comms', 'Project-specific wired or fiber network']],
    applications: ['LNG and oil tanker berths', 'Chemical and bulk liquid terminals', 'Ports with restricted approach envelopes', 'Terminal digital safety upgrade projects'],
    standards: ['Marine environmental enclosure practices', 'Hazardous area electrical options when required', 'Site acceptance testing and calibration', 'Operator display and alarm logic documentation']
  }
];

export const productGroups = [
  { name: 'Marine Fluid Transfer', items: ['Marine Loading Arms'] },
  { name: 'Land Fluid Transfer', items: ['Truck & Railcar Loading Arms', 'Integrated Loading Skids'] },
  { name: 'Safe Mooring Systems', items: ['Quick Release Mooring Hooks'] },
  { name: 'Berthing Aid Systems', items: ['Laser-Guided Berthing Aid'] }
];
