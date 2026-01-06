export const siteContent = {
  brand: {
    name: 'Deva SEA FOOD',
    tagline: 'Frozen Sea Food • Import & Export',
    locationLine: 'Cold-chain focused sourcing, processing, and global distribution.',
    address: '3/13, Bye pass road, Madathur, Tuticorin District, Tamil Nadu state, India',
  },
  nav: [
    { id: 'about', label: 'About Us' },
    { id: 'vision-mission-goals', label: 'Vision' },
    { id: 'what-we-offer', label: 'Offer' },
    { id: 'facility', label: 'Facility' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Get a Quote' },
  ],
  hero: {
    headline: 'Where the Sea Meets Expertise',
    subhead:
      'Premium Seafood, Sustainably Sourced, Meticulously Processed, and Exported Worldwide.',
    backgroundVideo: {
      /** Put your file at `public/hero-ocean.mp4` (or change this path). */
      src: '/hero-ocean.mp4',
      /** Optional poster image (recommended) like `public/hero-ocean.jpg`. */
      poster: '/hero-ocean.jpg',
      enabled: true,
    },
    ctas: {
      primary: { label: 'Request a Quote', href: '#contact' },
      secondary: { label: 'Explore Portfolio', href: '#portfolio' },
    },
    chips: [
      '6+ Export Regions Served',
      '7+ Years of Industry Experience',
      'HACCP & EU - Compliant Operations',
      '24/7 - Cold Chain Monitoring',
    ],
  },
  stats: [
    { label: 'Cold-chain handling', value: '24/7' },
    { label: 'Export-ready packing', value: 'Flexible' },
    { label: 'Quality checks', value: 'Multi-step' },
    { label: 'Lead time focus', value: 'Fast' },
  ],
  portfolio: {
    title: 'Our Seafood Portfolio',
    subtitle:
      'Click a product to view available sub-products (cuts/pack options). We also support custom buyer specifications.',
    products: [
      {
        name: 'Pasteurized Crab meat',
        scientific: 'Portunus spp',
        tags: ['Meat'],
        subProducts: ['Colossal', 'Jumbo', 'Super lump', 'Backfin lump', 'Special', 'Claw', 'Cocktail claw'],
      },
      {
        name: 'Grouper',
        scientific: 'Epinephelus spp',
        tags: ['Whole', 'Fillet'],
        subProducts: ['Fillets', 'Fingers'],
      },
      {
        name: 'Mahi Mahi',
        scientific: 'Coryphaene hippurus',
        tags: ['Whole', 'Meat'],
        subProducts: ['Portions', 'Fingers'],
      },
      {
        name: 'Red Snapper',
        scientific: 'Lutjanus spp',
        tags: ['Whole', 'Fillet'],
        subProducts: ['Whole', 'Fillet'],
      },
      {
        name: 'Indian squid',
        scientific: 'Uroteuthis duvaucelii',
        tags: ['Whole', 'Rings'],
        subProducts: ['Whole', 'Rings', 'Tubes'],
      },
      {
        name: 'Octopus',
        scientific: 'Octopus cyanea',
        tags: ['Whole', 'Meat'],
        subProducts: ['Whole', 'Tentacles', 'Cuts'],
      },
      {
        name: 'Slipper Lobster',
        scientific: 'Thenus orientalis',
        tags: ['Whole', 'Meat'],
        subProducts: ['Whole', 'Tail meat'],
      },
      {
        name: 'Vannamei shrimps',
        scientific: 'Litopenaeus vannamei',
        tags: ['Whole', 'Peeled'],
        subProducts: ['Whole', 'Peeled', 'Deveined', 'PDTO', 'PD'],
      },
    ],
    note: 'Many more premium seafood range available on request.',
  },
  about: {
    title: 'Quality Without Compromise.',
    subtitle: '',
    body: [
      'Deva Sea Food is a distinguished Indian exporter of premium seafood, supplying leading importers, distributors, and foodservice brands across global markets.',
      'Inspired by the rich coastal legacy of southern India, we integrate time-honoured harvesting practices with modern processing and preservation technologies. From responsible sourcing through trusted coastal communities to precisely controlled processing, packaging, and cold-chain logistics, every stage is meticulously managed to retain natural flavour, texture, and purity.',
      'Our disciplined, quality-driven approach ensures that every consignment reflects consistency, reliability, and uncompromising international standards. Guided by integrity and excellence, we have built enduring partnerships with clients who value authenticity, trust, and long-term collaboration.',
    ],
  },
  vmg: {
    title: 'Our Vision, Mission & Values',
    subtitle: 'Clear principles that guide how we source, process, and deliver seafood worldwide.',
    cards: [
      {
        title: 'Vision',
        body: 'To be a globally respected exporter of premium seafood, recognized for integrity, consistent quality, and responsible sourcing across international markets.',
        bullets: [
          'Integrity-led international reputation',
          'Consistency across every consignment',
          'Responsible sourcing for long-term ocean health',
        ],
      },
      {
        title: 'Mission',
        body: 'To responsibly source, process, and export premium seafood by preserving natural quality, ensuring food safety, and delivering reliable value through precision-driven operations and strong partnerships.',
        bullets: [
          'Preserve natural flavour, texture, and purity',
          'Food-safety discipline and export compliance',
          'Reliable delivery through strong partnerships',
        ],
      },
      {
        title: 'Values',
        body: '',
        bullets: [
          'Integrity – Ethical, transparent, and accountable in every engagement',
          'Quality First – No compromise at any stage of sourcing or processing',
          'Responsibility – Sustainable practices that respect oceans and communities',
          'Reliability – Consistency our partners can depend on',
          'Partnership – Building long-term, trust-based global relationships',
        ],
      },
    ],
  },
  offer: {
    titleSmall: 'What we offer?',
    headline: 'Looking for freshness, quality, and consistency in every shipment?',
    points: [
      {
        title: 'Premium Seafood Expertise',
        body: 'Decades of experience in sourcing and exporting high-quality seafood with deep knowledge of coastal harvesting practices.',
      },
      {
        title: 'Uncompromising Quality & Safety',
        body: 'All products undergo rigorous quality checks and comply with international food safety standards.',
      },
      {
        title: 'End-to-End Cold Chain Management',
        body: 'Advanced processing, freezing, and logistics ensure freshness and integrity from ocean to customer.',
      },
      {
        title: 'Consistency & Traceability',
        body: 'Every consignment is reliably graded, packed, and fully traceable, ensuring predictable quality for our partners.',
      },
      {
        title: 'Reliable Global Partner',
        body: 'We deliver on-time, maintain transparent communication, and build long-term, trust-based relationships with our clients.',
      },
    ],
  },
  facility: {
    titleSmall: 'Facility',
    headline: 'Inside our processing & cold-chain setup.',
    subtitle:
      'Built for hygiene, food safety, and cold-chain reliability—designed to protect flavour, texture, and purity from processing to dispatch.',
    highlights: [
      'Hygienic processing workflow',
      'Controlled freezing & cold storage',
      'Export-ready packing & labeling',
      'Cold-chain handling & loading discipline',
    ],
    images: [
      { src: '/facility-1.jpg', alt: 'Facility photo 1' },
      { src: '/facility-2.jpg', alt: 'Facility photo 2' },
      { src: '/facility-3.jpg', alt: 'Facility photo 3' },
      { src: '/facility-4.jpg', alt: 'Facility photo 4' },
    ],
  },
  importExport: {
    title: 'Import & Export',
    subtitle:
      'We support documentation, packing standards, and cold-chain coordination for cross-border shipments.',
    badges: ['HS Code Support', 'Packing List', 'COO', 'Health Certificate'],
    features: [
      {
        title: 'Export documentation',
        body: 'Invoice, packing list, certificates, and shipment coordination built into the workflow.',
      },
      {
        title: 'Market-ready packing',
        body: 'Bulk, retail, private label, and multilingual labeling options for different regions.',
      },
      {
        title: 'Cold-chain visibility',
        body: 'Reefer planning, handover checkpoints, and temperature handling SOPs.',
      },
    ],
  },
  quality: {
    title: 'Quality, end-to-end',
    subtitle: 'A predictable process that protects taste, texture, and safety.',
    steps: [
      { title: 'Sourcing', body: 'Reliable suppliers, seasonal selection, and lot traceability.' },
      { title: 'Processing', body: 'Hygiene-first handling with inspection checkpoints.' },
      { title: 'IQF / Freezing', body: 'Rapid freezing to lock in freshness and reduce drip loss.' },
      { title: 'Packing', body: 'Export-ready cartons, specs, and labeling per market needs.' },
      { title: 'Shipping', body: 'Reefer coordination and documentation for smoother clearance.' },
    ],
  },
  coldChain: {
    title: 'Cold-chain logistics',
    subtitle: 'Built for frozen reliability from storage to destination.',
    cards: [
      { title: 'Storage', body: 'Frozen storage discipline, clean handling, and FIFO.' },
      { title: 'Reefer containers', body: 'Planning for export lanes with temperature continuity.' },
      { title: 'Packaging', body: 'Moisture barriers, carton strength, and pallet stability.' },
      { title: 'Tracking mindset', body: 'Checkpoint thinking for fewer surprises in transit.' },
    ],
  },
  testimonials: {
    title: 'What buyers like',
    subtitle: 'Simple, consistent, and shipment-ready.',
    items: [
      {
        quote:
          'Clean documentation, predictable packing, and great communication. The product arrives exactly as specified.',
        name: 'Procurement Lead',
        meta: 'Food Service Buyer',
      },
      {
        quote: 'Cold-chain discipline shows. Texture and glaze consistency are solid across lots.',
        name: 'Import Manager',
        meta: 'Trading Company',
      },
      {
        quote:
          'Fast iteration on pack sizes and labeling. We got to market quickly with a private label run.',
        name: 'Category Owner',
        meta: 'Retail',
      },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Do you support import & export paperwork?',
        a: 'Yes — we can coordinate standard export documentation and align packing/labelling to buyer requirements.',
      },
      {
        q: 'Can you do custom packaging or private label?',
        a: 'Yes — we can discuss carton specs, pack weights, and labeling needs for your market.',
      },
      {
        q: 'What is your typical MOQ?',
        a: 'MOQ depends on product type and pack spec. Send your requirement and we’ll respond with options.',
      },
      {
        q: 'Do you do IQF?',
        a: 'We support IQF-ready product formats based on category and buyer specification.',
      },
    ],
  },
  certifications: {
    title: 'Certifications & Compliance',
    description:
      'We adhere to strict regulatory and certification requirements to ensure product safety, quality, and compliance.',
    logos: [
      {
        name: 'FSSAI',
        src: '/certifications/fssai.png',
        alt: 'FSSAI Certification',
      },
      {
        name: 'EU',
        src: '/certifications/eu.png',
        alt: 'European Union Compliance',
      },
      {
        name: 'Export Inspection Council',
        src: '/certifications/eic.png',
        alt: 'Export Inspection Council Certification',
      },
      {
        name: 'FSSC 22000',
        src: '/certifications/fssc22000.png',
        alt: 'FSSC 22000 Food Safety Certification',
      },
      {
        name: 'GMP',
        src: '/certifications/gmp.png',
        alt: 'Good Manufacturing Practice Certification',
      },
      {
        name: 'HACCP',
        src: '/certifications/haccp.png',
        alt: 'HACCP Certified',
      },
    ],
  },
  contact: {
    title: 'Request a quote',
    subtitle: 'Tell us what you need. We\'ll reply with pricing, lead time, and packing options.',
    quick: [
      { label: 'Email', value: 'sales@devaseafood.com' },
      { label: 'Phone', value: '+919443706600' },
      { label: 'WhatsApp', value: '+919443706600' },
    ],
    emails: ['sales@devaseafood.com', 'raja@devaseafood.com'],
    phone: '+919443706600',
    address: '3/13, Bye pass road, Madathur, Tuticorin District, Tamil Nadu state, India',
  },
} as const


