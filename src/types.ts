export interface Waypoint {
  id: string;
  label: string;
  sectorName: string;
  coordinates: string;
  elevation: string;
  iconName: string;
  description: string;
  x: number; // Percentage on map (0-100)
  y: number; // Percentage on map (0-100)
}

export interface Expedition {
  id: string;
  code: string;
  title: string;
  category: string;
  status: "Completed" | "In Orbit" | "Active Fieldwork";
  objective: string;
  challenge: string;
  approach: string;
  outcome: string;
  tech: string[];
  github: string;
  demoUrl?: string;
  image?: string;
  coordinates: string;
  elevation: string;
  date: string;
}

export interface EquipmentCategory {
  category: string;
  kitPouch: string;
  description: string;
  tools: {
    name: string;
    level: string; // e.g. "Primary Weapon", "Core Instrument", "Field Tested"
    logo: string;
    purpose: string;
  }[];
}

export interface JourneyLogEntry {
  logId: string;
  dateRange: string;
  title: string;
  institution: string;
  location: string;
  coordinates: string;
  role: string;
  type: "academic" | "expedition" | "certification";
  fieldNotes: string[];
  skillsApplied: string[];
}

export interface Discovery {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  coordinates: string;
  pdfUrl?: string;
  category: "Elite Certification" | "Academic Milestone" | "Specialization";
  description: string;
  badges: string[];
}
