export interface University {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  country: string;
  city: string;
  flag: string;
  badge: string;
  type: 'Public' | 'Private';
  established: number;
  acceptanceRate: string;
  studentCount: string;
  intlStudentRatio: string;
  tuitionUndergradAnnual: number; // in USD
  tuitionGradAnnual: number; // in USD
  livingCostAnnual: number; // in USD
  currency: string;
  overallRating: number;
  reviewCount: number;
  advisorCount: number;
  bannerImage: string;
  logo: string;
  website: string;
  description: string;
  popularPrograms: string[];
  academics: {
    facultyRatio: string;
    teachingQualityRating: number;
    facultyAccessibilityRating: number;
    workloadRating: number;
    summary: string;
  };
  placements: {
    officialAvgSalary: number;
    studentReportedMedianSalary: number;
    internshipRate: string;
    placementConfidence: 'High' | 'Moderate' | 'Context-Dependent';
    topRecruiters: string[];
    studentNotes: string;
  };
  campus: {
    dormAvailability: string;
    monthlyRentEstimate: number;
    transportQuality: string;
    safetyRating: number;
    foodRating: number;
    summary: string;
  };
  pros: string[];
  cons: string[];
}

export interface Advisor {
  id: string;
  name: string;
  avatar: string;
  universityId: string;
  universityName: string;
  program: string;
  degreeLevel: 'Undergraduate' | 'Master' | 'PhD';
  year: string;
  countryOfOrigin: string;
  languages: string[];
  verifiedStatus: boolean;
  verificationBadge: string;
  rating: number;
  sessionsConducted: number;
  bio: string;
  topics: string[];
  adviceForApplicants: string;
  availability: string;
}

export interface Review {
  id: string;
  universityId: string;
  universityName: string;
  authorName: string;
  authorProgram: string;
  authorYear: string;
  date: string;
  verified: boolean;
  overallRating: number;
  ratings: {
    academics: number;
    faculty: number;
    infrastructure: number;
    placements: number;
    campusLife: number;
  };
  title: string;
  content: string;
  pros: string;
  cons: string;
  advice: string;
  sourceType: 'Student-reported' | 'Officially published' | 'Independently checked';
}

export interface CountryGuide {
  id: string;
  country: string;
  flag: string;
  currency: string;
  avgTuitionPublic: string;
  avgTuitionPrivate: string;
  avgLivingCostMonth: string;
  postStudyWorkVisa: string;
  workDuringStudy: string;
  topIntakes: string;
  officialImmigrationUrl: string;
  overview: string;
  advantages: string[];
  challenges: string[];
}

export const UNIVERSITIES: University[] = [
  {
    id: 'mit-usa',
    name: 'Massachusetts Institute of Technology',
    shortName: 'MIT',
    slug: 'mit-usa',
    country: 'United States',
    city: 'Cambridge, MA',
    flag: '🇺🇸',
    badge: 'World #1 Engineering & Tech',
    type: 'Private',
    established: 1861,
    acceptanceRate: '3.9%',
    studentCount: '11,900',
    intlStudentRatio: '33%',
    tuitionUndergradAnnual: 60150,
    tuitionGradAnnual: 62000,
    livingCostAnnual: 22000,
    currency: 'USD',
    overallRating: 4.9,
    reviewCount: 48,
    advisorCount: 6,
    bannerImage: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.mit.edu',
    description: 'Renowned for rigorous scientific and engineering education, intense problem-solving culture, and world-class laboratory ecosystems.',
    popularPrograms: ['Computer Science', 'Artificial Intelligence', 'Mechanical Engineering', 'Physics', 'Economics'],
    academics: {
      facultyRatio: '3:1',
      teachingQualityRating: 4.8,
      facultyAccessibilityRating: 4.6,
      workloadRating: 4.9,
      summary: 'Heavy problem-set (p-set) driven curriculum. Faculty are pioneering researchers, often leading to early undergraduate research (UROP).'
    },
    placements: {
      officialAvgSalary: 126000,
      studentReportedMedianSalary: 118000,
      internshipRate: '94%',
      placementConfidence: 'High',
      topRecruiters: ['Google', 'Microsoft', 'Apple', 'NVIDIA', 'Jane Street', 'NASA'],
      studentNotes: 'Tech and quant roles heavily dominate campus hiring. Less structured pipelines for non-STEM paths, requiring proactive networking.'
    },
    campus: {
      dormAvailability: 'Guaranteed for 4 undergrad years',
      monthlyRentEstimate: 1600,
      transportQuality: 'Direct MBTA Red Line subway access into Boston',
      safetyRating: 4.7,
      foodRating: 3.8,
      summary: 'Kendall Square urban campus. Cold winters, collaborative geek culture, intense hackathon atmosphere.'
    },
    pros: [
      'Peer group is intensely motivated and collaborative, not cutthroat',
      'UROP program funds undergraduate research from freshman year',
      'Unmatched prestige in hardware, software, and quant finance'
    ],
    cons: [
      'Very high pressure and relentless pace throughout terms',
      'Boston winter weather is brutal for tropical students',
      'High cost of living off-campus in Cambridge'
    ]
  },
  {
    id: 'oxford-uk',
    name: 'University of Oxford',
    shortName: 'Oxford',
    slug: 'oxford-uk',
    country: 'United Kingdom',
    city: 'Oxford, Oxfordshire',
    flag: '🇬🇧',
    badge: 'Historic Collegiate Model',
    type: 'Public',
    established: 1096,
    acceptanceRate: '14.5%',
    studentCount: '26,000',
    intlStudentRatio: '45%',
    tuitionUndergradAnnual: 42000,
    tuitionGradAnnual: 38000,
    livingCostAnnual: 18500,
    currency: 'GBP',
    overallRating: 4.8,
    reviewCount: 39,
    advisorCount: 5,
    bannerImage: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.ox.ac.uk',
    description: 'Ancient collegiate university famed for 1-on-1 or 2-on-1 weekly tutorial systems, rigorous essay analysis, and debate traditions.',
    popularPrograms: ['Philosophy, Politics & Economics (PPE)', 'Law', 'Computer Science', 'Medicine', 'History'],
    academics: {
      facultyRatio: '10:1',
      teachingQualityRating: 4.9,
      facultyAccessibilityRating: 4.9,
      workloadRating: 4.8,
      summary: 'The tutorial system is unparalleled: you defend essays directly against world experts each week. 8-week terms are short and furious.'
    },
    placements: {
      officialAvgSalary: 62000,
      studentReportedMedianSalary: 55000,
      internshipRate: '88%',
      placementConfidence: 'High',
      topRecruiters: ['McKinsey & Co', 'Goldman Sachs', 'UK Civil Service', 'DeepMind', 'Barclays'],
      studentNotes: 'Massive brand equity across Europe and the Commonwealth. Consulting, finance, and legal careers have dedicated milkrounds.'
    },
    campus: {
      dormAvailability: 'College-specific accommodation for 2-3 years',
      monthlyRentEstimate: 1100,
      transportQuality: 'Bicycle-centric historic town; 1 hour train to London',
      safetyRating: 4.8,
      foodRating: 4.2,
      summary: 'Collegiate system means small-community dining halls, historic libraries, and formals inside your college.'
    },
    pros: [
      'Tutorial system trains exceptional verbal defense and critical reasoning',
      'College communities provide immediate belonging and welfare support',
      'Lifelong alumni network with global recognition'
    ],
    cons: [
      'Intense 8-week terms leave virtually no buffer for falling behind',
      'Colleges vary widely in endowment, dining quality, and room standards',
      'UK graduate visa rules require strict planning for international job seekers'
    ]
  },
  {
    id: 'tum-germany',
    name: 'Technical University of Munich',
    shortName: 'TUM',
    slug: 'tum-germany',
    country: 'Germany',
    city: 'Munich, Bavaria',
    flag: '🇩🇪',
    badge: 'Europe Tech Hub • Minimal Tuition',
    type: 'Public',
    established: 1868,
    acceptanceRate: '28%',
    studentCount: '52,000',
    intlStudentRatio: '38%',
    tuitionUndergradAnnual: 4000,
    tuitionGradAnnual: 6000,
    livingCostAnnual: 14500,
    currency: 'EUR',
    overallRating: 4.7,
    reviewCount: 34,
    advisorCount: 4,
    bannerImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.tum.de',
    description: 'Germany\'s premier University of Excellence, pioneering automotive engineering, informatics, and industry-partnered applied research.',
    popularPrograms: ['Informatics / CS', 'Mechanical Engineering', 'Management & Technology', 'Robotics', 'Biotechnology'],
    academics: {
      facultyRatio: '18:1',
      teachingQualityRating: 4.6,
      facultyAccessibilityRating: 4.1,
      workloadRating: 4.6,
      summary: 'Very self-directed. Exams count for 100% of final grade in many courses. High dropout filter in first two semesters.'
    },
    placements: {
      officialAvgSalary: 68000,
      studentReportedMedianSalary: 64000,
      internshipRate: '92%',
      placementConfidence: 'High',
      topRecruiters: ['BMW Group', 'Siemens', 'SAP', 'Celonis', 'Infineon', 'Amazon Munich'],
      studentNotes: 'Working student (Werkstudent) culture is huge; almost everyone works 15-20 hours/week in Bavarian tech or automotive giants.'
    },
    campus: {
      dormAvailability: 'Studentenwerk housing has 2-4 semester waitlists',
      monthlyRentEstimate: 850,
      transportQuality: 'Exceptional U-Bahn and S-Bahn network',
      safetyRating: 4.9,
      foodRating: 4.0,
      summary: 'Modern Garching science campus outside city center. Munich is safe, scenic, but housing is notoriously tight.'
    },
    pros: [
      'Incredible value for money compared to US/UK universities',
      'Direct pipeline to German engineering and European tech startup hubs',
      'Generous 18-month post-study work visa in Germany'
    ],
    cons: [
      'Severe student housing shortage in Munich requires months of hunting',
      'High administrative self-reliance; professors do not handhold students',
      'German language proficiency (B1/B2) is vital for full social integration'
    ]
  },
  {
    id: 'nus-singapore',
    name: 'National University of Singapore',
    shortName: 'NUS',
    slug: 'nus-singapore',
    country: 'Singapore',
    city: 'Singapore',
    flag: '🇸🇬',
    badge: 'Asia #1 Global Research University',
    type: 'Public',
    established: 1905,
    acceptanceRate: '5.5%',
    studentCount: '40,000',
    intlStudentRatio: '28%',
    tuitionUndergradAnnual: 24000,
    tuitionGradAnnual: 28000,
    livingCostAnnual: 13000,
    currency: 'SGD',
    overallRating: 4.8,
    reviewCount: 31,
    advisorCount: 4,
    bannerImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.nus.edu.sg',
    description: 'Leading global university in Asia, providing cross-disciplinary education, state-of-the-art labs, and NUS Overseas Colleges (NOC).',
    popularPrograms: ['Computer Science', 'Data Science & AI', 'Business Administration', 'Biomedical Engineering', 'Law'],
    academics: {
      facultyRatio: '14:1',
      teachingQualityRating: 4.7,
      facultyAccessibilityRating: 4.3,
      workloadRating: 4.7,
      summary: 'Bell curve grading (CAP) creates competitive peers. Exceptional breadth of minors and special programs like NOC.'
    },
    placements: {
      officialAvgSalary: 58000,
      studentReportedMedianSalary: 54000,
      internshipRate: '96%',
      placementConfidence: 'High',
      topRecruiters: ['Shopee', 'Grab', 'DBS Bank', 'ByteDance', 'Meta Singapore', 'Temasek'],
      studentNotes: 'Gateway to Southeast Asian tech and finance headquarters. High internship conversion across Singapore tech ecosystem.'
    },
    campus: {
      dormAvailability: 'Kent Ridge halls available with hall activity points',
      monthlyRentEstimate: 950,
      transportQuality: 'World-class MRT and campus internal shuttle bus',
      safetyRating: 5.0,
      foodRating: 4.7,
      summary: 'Kent Ridge lush tropical campus with incredible hawker-style food courts (UTown) and air-conditioned facilities.'
    },
    pros: [
      'Safest, cleanest, and most technologically advanced campus in Asia',
      'NUS Overseas Colleges (NOC) program sends students to Silicon Valley/Tel Aviv',
      'English-taught curriculum with deep Asian regional network'
    ],
    cons: [
      'Bell curve grading system puts psychological stress on class ranking',
      'Hot and humid weather year-round',
      'Strict tuition grant bond requires 3 years working in Singapore for subsidized fee'
    ]
  },
  {
    id: 'utoronto-canada',
    name: 'University of Toronto',
    shortName: 'U of T',
    slug: 'utoronto-canada',
    country: 'Canada',
    city: 'Toronto, Ontario',
    flag: '🇨🇦',
    badge: 'Canada #1 Research Powerhouse',
    type: 'Public',
    established: 1827,
    acceptanceRate: '43%',
    studentCount: '97,000',
    intlStudentRatio: '30%',
    tuitionUndergradAnnual: 45000,
    tuitionGradAnnual: 36000,
    livingCostAnnual: 17500,
    currency: 'CAD',
    overallRating: 4.6,
    reviewCount: 42,
    advisorCount: 5,
    bannerImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.utoronto.ca',
    description: 'Vast research powerhouse in downtown Toronto with three campuses, birthplace of deep learning and insulin, offering deep academic breadth.',
    popularPrograms: ['Computer Science', 'Rotman Commerce', 'Life Sciences', 'Engineering Science', 'Public Policy'],
    academics: {
      facultyRatio: '19:1',
      teachingQualityRating: 4.5,
      facultyAccessibilityRating: 4.0,
      workloadRating: 4.6,
      summary: 'St. George campus has large introductory classes (300+ students). Requires discipline and proactive office hour visits.'
    },
    placements: {
      officialAvgSalary: 64000,
      studentReportedMedianSalary: 59000,
      internshipRate: '90%',
      placementConfidence: 'High',
      topRecruiters: ['RBC', 'TD Bank', 'Amazon Toronto', 'Shopify', 'Deloitte', 'Vector Institute'],
      studentNotes: 'PEY Co-op program allows full 12-16 month paid industry internships, highly valued by North American employers.'
    },
    campus: {
      dormAvailability: 'First-year residence guarantee, off-campus later',
      monthlyRentEstimate: 1400,
      transportQuality: 'Direct TTC subway connection in downtown core',
      safetyRating: 4.6,
      foodRating: 4.5,
      summary: 'Downtown St. George blends gothic stone colleges with modern skyscrapers. Unmatched multicultural food scene.'
    },
    pros: [
      'Birthplace of modern AI with direct ties to Vector Institute and pioneers',
      'PEY Co-op program offers genuine full-year paid engineering internships',
      'Canada PGWP (Post-Graduation Work Permit) offers clear work pathway'
    ],
    cons: [
      'Huge student body can feel impersonal without active club participation',
      'Severe grade deflation in first-year mathematics and sciences',
      'Downtown Toronto rental market is very expensive'
    ]
  },
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    slug: 'iit-bombay',
    country: 'India',
    city: 'Powai, Mumbai',
    flag: '🇮🇳',
    badge: 'India Premier Engineering Institute',
    type: 'Public',
    established: 1958,
    acceptanceRate: '0.8%',
    studentCount: '13,000',
    intlStudentRatio: '3%',
    tuitionUndergradAnnual: 3200,
    tuitionGradAnnual: 2500,
    livingCostAnnual: 2800,
    currency: 'INR',
    overallRating: 4.9,
    reviewCount: 52,
    advisorCount: 6,
    bannerImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80',
    website: 'https://www.iitb.ac.in',
    description: 'Crown jewel of Indian higher education, located along Powai Lake. Noted for extreme selectivity, legendary alumni, and vibrant tech culture.',
    popularPrograms: ['Computer Science & Engineering', 'Electrical Engineering', 'Mechanical', 'Aerospace', 'Design (IDC)'],
    academics: {
      facultyRatio: '12:1',
      teachingQualityRating: 4.7,
      facultyAccessibilityRating: 4.5,
      workloadRating: 4.7,
      summary: 'Peer group of India\'s top rankers. Rigorous core coursework followed by diverse electives and minor disciplines.'
    },
    placements: {
      officialAvgSalary: 28000,
      studentReportedMedianSalary: 24000,
      internshipRate: '98%',
      placementConfidence: 'High',
      topRecruiters: ['Google', 'Microsoft', 'Qualcomm', 'Tower Research', 'Texas Instruments', 'Tata Group'],
      studentNotes: 'Legendary placement season. Domestic salaries range 18-35 LPA with select international quant offers exceeding 1-2 Cr.'
    },
    campus: {
      dormAvailability: '100% on-campus hostel residency',
      monthlyRentEstimate: 120,
      transportQuality: 'Self-contained campus with bicycles, rickshaws at gates',
      safetyRating: 4.9,
      foodRating: 3.9,
      summary: 'Sprawling 550-acre green campus adjacent to Sanjay Gandhi National Park. Hostel life and Mood Indigo cultural fest are legendary.'
    },
    pros: [
      'Top-100 AIR JEE Advanced peer cohort creates unbelievable alumni bond',
      'Thriving entrepreneurship culture through SINE incubator',
      'Extremely subsidized tuition for Indian nationals'
    ],
    cons: [
      'Hostel room infrastructure in older wings needs renovation',
      'Extreme domestic competition for branch changes and placement day-1 slots',
      'Limited international student presence creates insular focus'
    ]
  }
];

export const ADVISORS: Advisor[] = [
  {
    id: 'adv-aarav',
    name: 'Aarav Patel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    universityId: 'mit-usa',
    universityName: 'Massachusetts Institute of Technology',
    program: 'Computer Science & AI (Course 6-3)',
    degreeLevel: 'Undergraduate',
    year: '4th Year (Senior)',
    countryOfOrigin: 'India',
    languages: ['English', 'Hindi', 'Gujarati'],
    verifiedStatus: true,
    verificationBadge: 'Verified Student ID & Enrollment Record Checked',
    rating: 4.9,
    sessionsConducted: 42,
    bio: 'Senior at MIT researching reinforcement learning. Completed internships at Jane Street and Microsoft Research. Passionate about helping international applicants navigate college reality.',
    topics: ['Coursework Load & P-sets', 'UROP Research Funding', 'Off-Campus Tech Internships', 'Financial Aid for Internationals'],
    adviceForApplicants: 'Don\'t fixate on GPA alone. Show deep passion projects where you built something end-to-end. Be ready for the work volume here.',
    availability: 'Sat & Sun (10am - 4pm EST)'
  },
  {
    id: 'adv-elena',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    universityId: 'oxford-uk',
    universityName: 'University of Oxford',
    program: 'PPE (Philosophy, Politics & Economics)',
    degreeLevel: 'Undergraduate',
    year: '3rd Year (Finalist)',
    countryOfOrigin: 'France',
    languages: ['English', 'French', 'German'],
    verifiedStatus: true,
    verificationBadge: 'Verified Student ID & College Enrolment Checked',
    rating: 4.95,
    sessionsConducted: 36,
    bio: 'St John’s College student. President of the Oxford International Society. Can answer all your candid questions about college choices, tutorial survival, and UK living costs.',
    topics: ['Tutorial Preparation & Reading', 'College Selection Nuances', 'UK Graduate Visa Reality', 'Living in Oxford on a Budget'],
    adviceForApplicants: 'Your college choice shapes your day-to-day life more than the university itself. Check accommodation guarantees per college!',
    availability: 'Weekday Evenings (6pm - 8pm GMT)'
  },
  {
    id: 'adv-markus',
    name: 'Markus Weber',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    universityId: 'tum-germany',
    universityName: 'Technical University of Munich',
    program: 'M.Sc. Robotics, Cognition & Intelligence',
    degreeLevel: 'Master',
    year: '2nd Year Master',
    countryOfOrigin: 'Germany',
    languages: ['English', 'German'],
    verifiedStatus: true,
    verificationBadge: 'Verified Enrolment Certificate (Immatrikulationsbescheinigung)',
    rating: 4.85,
    sessionsConducted: 29,
    bio: 'Master student working on autonomous drone navigation with BMW TechWorks. Can give unfiltered guidance on Munich housing, German bureaucratic timelines, and Werkstudent salaries.',
    topics: ['Munich Accommodation Hunting', 'Werkstudent Part-time Jobs', 'Blocked Account Requirements', 'Oral Exam Strategies'],
    adviceForApplicants: 'Start looking for WG (shared flat) housing 4 months before your semester starts. The housing bottleneck in Munich is real.',
    availability: 'Thursdays & Saturdays (Flexible)'
  },
  {
    id: 'adv-priya',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    universityId: 'nus-singapore',
    universityName: 'National University of Singapore',
    program: 'B.Comp Data Science & Analytics',
    degreeLevel: 'Undergraduate',
    year: '3rd Year',
    countryOfOrigin: 'Singapore',
    languages: ['English', 'Mandarin'],
    verifiedStatus: true,
    verificationBadge: 'Verified Student ID & Faculty Record Checked',
    rating: 4.9,
    sessionsConducted: 31,
    bio: 'School of Computing student, alumnus of NUS Overseas Colleges (NOC Silicon Valley). Deeply familiar with the bell curve, UTown dorms, and Singapore tech hiring.',
    topics: ['NOC Program Application', 'Bell Curve Survival Guide', 'Kent Ridge Hall Selection', 'Singapore Tuition Grant Bond'],
    adviceForApplicants: 'Understand the 3-year service obligation bond if you take the Singapore MOE Tuition Grant. It is a fantastic option if you want to work here.',
    availability: 'Sundays (2pm - 6pm SGT)'
  },
  {
    id: 'adv-liam',
    name: 'Liam Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    universityId: 'utoronto-canada',
    universityName: 'University of Toronto',
    program: 'B.A.Sc. Engineering Science (ECE)',
    degreeLevel: 'Undergraduate',
    year: '4th Year (PEY Completed)',
    countryOfOrigin: 'Canada',
    languages: ['English', 'Cantonese'],
    verifiedStatus: true,
    verificationBadge: 'Verified TCard & Transcript Validation',
    rating: 4.8,
    sessionsConducted: 27,
    bio: 'EngSci major who just finished a 16-month PEY internship at AMD Markham. Passionate about helping prospective engineers know what EngSci really entails.',
    topics: ['EngSci Drop Rates & Realities', 'PEY Co-op Placement Success', 'Downtown Toronto Rent Hacks', 'Winter Survival Guide'],
    adviceForApplicants: 'EngSci is intense. If you want a more balanced university life, standard Computer Engineering or MechEng might suit you better.',
    availability: 'Fridays & Saturdays'
  },
  {
    id: 'adv-rohan',
    name: 'Rohan Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    universityId: 'iit-bombay',
    universityName: 'Indian Institute of Technology Bombay',
    program: 'B.Tech Electrical Engineering',
    degreeLevel: 'Undergraduate',
    year: '4th Year',
    countryOfOrigin: 'India',
    languages: ['English', 'Hindi', 'Marathi'],
    verifiedStatus: true,
    verificationBadge: 'Verified Roll Number & ASC Portal Record Checked',
    rating: 4.95,
    sessionsConducted: 55,
    bio: 'IIT Bombay final year student. Core team member of Formula Student racing team. Placed in hardware systems. Candid guidance on hostels, branch change, and campus life.',
    topics: ['Branch Change Cutoffs', 'Formula Student / Club Culture', 'Hostel Realities & Mess Food', 'Placement Day-1 Prep'],
    adviceForApplicants: 'Once you clear JEE, the race doesn\'t stop; it just changes. Join tech teams early to build real engineering intuition.',
    availability: 'Evenings (8pm - 10pm IST)'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    universityId: 'mit-usa',
    universityName: 'MIT',
    authorName: 'Alex K. (Class of 2026)',
    authorProgram: 'B.S. EECS',
    authorYear: 'Current Senior',
    date: 'October 2026',
    verified: true,
    overallRating: 4.8,
    ratings: { academics: 5, faculty: 4.8, infrastructure: 5, placements: 5, campusLife: 4.2 },
    title: 'Humbling, transformative, and extraordinarily rigorous',
    content: 'MIT tests your mental endurance like nowhere else. You are surrounded by people who built nuclear reactors in high school, yet everyone collaborates on p-sets in the lounges until 2am. The faculty genuinely want undergrads in their labs.',
    pros: 'Endless research opportunities via UROP, zero academic snobbery, legendary career fairs where every major tech/quant company attends.',
    cons: 'Mental fatigue is real. If you struggle with imposter syndrome, Cambridge winter nights can feel very heavy.',
    advice: 'Learn to ask for help on day one. Office hours and study groups are not remedial here—they are the intended way to learn.',
    sourceType: 'Student-reported'
  },
  {
    id: 'rev-2',
    universityId: 'oxford-uk',
    universityName: 'University of Oxford',
    authorName: 'Sophie M.',
    authorProgram: 'B.A. Jurisprudence (Law)',
    authorYear: 'Finalist',
    date: 'September 2026',
    verified: true,
    overallRating: 4.9,
    ratings: { academics: 5, faculty: 5, infrastructure: 4.7, placements: 4.6, campusLife: 4.8 },
    title: 'The tutorial system is intense but leaves you fearless',
    content: 'Having an Emeritus professor interrogate your 2,000-word essay for 60 minutes twice a week completely changes how you think and argue. The social life in colleges is intimate and charming.',
    pros: 'Unmatched 1-on-1 intellectual training, gorgeous ancient libraries, tight-knit college support systems.',
    cons: 'Short 8-week terms mean getting sick for 4 days can jeopardize your entire term\'s syllabus.',
    advice: 'Read the college prospectus thoroughly before submitting your UCAS preference. Endowment differences affect rent subsidies.',
    sourceType: 'Student-reported'
  },
  {
    id: 'rev-3',
    universityId: 'tum-germany',
    universityName: 'Technical University of Munich',
    authorName: 'Vikram S.',
    authorProgram: 'M.Sc. Informatics',
    authorYear: '2nd Year Master',
    date: 'August 2026',
    verified: true,
    overallRating: 4.6,
    ratings: { academics: 4.7, faculty: 4.2, infrastructure: 4.8, placements: 4.9, campusLife: 4.0 },
    title: 'Top-tier European tech education with exceptional industry links',
    content: 'TUM gives you world-class coursework at virtually no tuition fees. The relationship with BMW, Siemens, and AI labs in Munich opens immediate doors for paid student jobs (Werkstudent) earning €18-24/hour.',
    pros: 'Practically free education of the highest global standard, excellent labs in Garching, easy job market in Bavaria.',
    cons: 'Severe housing crisis in Munich. Complete lack of administrative spoon-feeding; you must manage your own exam registrations and paperwork.',
    advice: 'Secure accommodation BEFORE you arrive in Germany. Learn conversational German even for English programs.',
    sourceType: 'Student-reported'
  },
  {
    id: 'rev-4',
    universityId: 'nus-singapore',
    universityName: 'NUS Singapore',
    authorName: 'Hao R.',
    authorProgram: 'B.Comp Computer Science',
    authorYear: 'Junior',
    date: 'October 2026',
    verified: true,
    overallRating: 4.7,
    ratings: { academics: 4.9, faculty: 4.4, infrastructure: 5, placements: 4.8, campusLife: 4.5 },
    title: 'High pressure, incredible facilities, and gateway to APAC tech',
    content: 'The campus facilities in University Town (UTown) are futuristic. Food courts are incredible and cheap. The bell curve system does make people exam-obsessed, but the overseas opportunities like NOC are life-changing.',
    pros: 'Hyper-modern campus, high safety, unmatched standing with Singapore and Silicon Valley recruiters.',
    cons: 'CAP grading bell curve can breed unnecessary stress over fractions of grade points.',
    advice: 'Apply for the NUS Overseas College (NOC) program as early as possible. It is NUS\'s greatest hidden gem.',
    sourceType: 'Student-reported'
  }
];

export const COUNTRY_GUIDES: CountryGuide[] = [
  {
    id: 'guide-usa',
    country: 'United States',
    flag: '🇺🇸',
    currency: 'USD ($)',
    avgTuitionPublic: '$25,000 - $45,000 / year',
    avgTuitionPrivate: '$50,000 - $65,000 / year',
    avgLivingCostMonth: '$1,500 - $2,500 / month',
    postStudyWorkVisa: 'OPT (1 year) + 24-month STEM Extension (3 years total for STEM)',
    workDuringStudy: 'Up to 20 hrs/week on-campus during term; CPT off-campus after 1st year',
    topIntakes: 'Fall (August/September) & Spring (January)',
    officialImmigrationUrl: 'https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors',
    overview: 'The United States remains the world\'s largest international higher education destination, characterized by flexible multidisciplinary curricula, world-leading research endowments, and expansive alumni networks.',
    advantages: [
      'Unmatched research funding and laboratory facilities',
      'Flexible major declaration until sophomore year in most colleges',
      'Massive corporate hiring pipelines in technology, finance, and healthcare'
    ],
    challenges: [
      'Very high overall tuition and living expenses',
      'H-1B lottery uncertainty for long-term post-study work',
      'Healthcare and off-campus housing can be complex for newcomers'
    ]
  },
  {
    id: 'guide-germany',
    country: 'Germany',
    flag: '🇩🇪',
    currency: 'EUR (€)',
    avgTuitionPublic: '€0 - €4,000 / year (Nominal admin semester fees)',
    avgTuitionPrivate: '€10,000 - €22,000 / year',
    avgLivingCostMonth: '€950 - €1,300 / month',
    postStudyWorkVisa: '18-Month Jobseeker Visa post-graduation with path to EU Blue Card',
    workDuringStudy: '140 full days or 280 half days per calendar year (recently expanded)',
    topIntakes: 'Winter (October) & Summer (April)',
    officialImmigrationUrl: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany',
    overview: 'Germany provides public university tuition exemptions even for non-EU students in most federal states, combined with Europe\'s strongest industrial and engineering job market.',
    advantages: [
      'Virtually tuition-free education at world-ranked public institutions',
      'Generous 18-month post-study search visa and clear EU Blue Card pathway',
      'Strong Werkstudent model allows students to finance their living costs'
    ],
    challenges: [
      'Strict German bureaucracy and mandatory blocked account (€11,904/year)',
      'Severe student housing bottlenecks in Munich, Berlin, and Frankfurt',
      'German language fluency (B2+) required for broader social and small-company hiring'
    ]
  },
  {
    id: 'guide-uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP (£)',
    avgTuitionPublic: '£18,000 - £38,000 / year',
    avgTuitionPrivate: '£25,000 - £45,000 / year',
    avgLivingCostMonth: '£1,100 - £1,800 / month (Higher in London)',
    postStudyWorkVisa: 'Graduate Route: 2 years (3 years for PhD graduates)',
    workDuringStudy: 'Up to 20 hrs/week during term-time for degree-level students',
    topIntakes: 'Autumn (September/October) & Spring (January)',
    officialImmigrationUrl: 'https://www.gov.uk/graduate-visa',
    overview: 'The UK offers condensed degrees (3-year Bachelor\'s, 1-year Master\'s), world-renowned academic heritage, and an established 2-year Graduate Route work visa.',
    advantages: [
      'Shorter 1-year Master\'s degrees reduce total time and living costs',
      'Globally respected degrees with strong Commonwealth & European recognition',
      'No employer sponsorship required for the 2-year Graduate Route visa'
    ],
    challenges: [
      'High international student tuition without widespread undergraduate scholarships',
      'Strict minimum salary thresholds for skilled worker visa transitions',
      'High cost of living in London and southeastern England'
    ]
  },
  {
    id: 'guide-singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    currency: 'SGD ($)',
    avgTuitionPublic: 'S$18,000 - S$35,000 / year (With MOE Tuition Grant)',
    avgTuitionPrivate: 'S$20,000 - S$40,000 / year',
    avgLivingCostMonth: 'S$1,100 - S$1,800 / month',
    postStudyWorkVisa: '1-Year Long Term Visit Pass (LTVP) for local university graduates',
    workDuringStudy: 'Up to 16 hrs/week during term at approved institutions',
    topIntakes: 'August (Main Semester 1) & January',
    officialImmigrationUrl: 'https://www.ica.gov.sg/reside/LTVP/apply-LTVP',
    overview: 'Singapore is the educational and financial nexus of Asia, providing English-taught education, unmatched personal safety, and direct headquarters access for multinational firms.',
    advantages: [
      'Safest, cleanest, and most technologically integrated urban campus environment in the world',
      'MOE Tuition Grant can reduce tuition by up to 50% in exchange for a 3-year service bond',
      'Hub for global tech, venture capital, and multinational APAC headquarters'
    ],
    challenges: [
      'High cost of living and private rental accommodation',
      'Competitive bell curve grading system in local universities',
      'Tropical climate with year-round high humidity'
    ]
  }
];

export const FAQS = [
  {
    question: 'Is Gradastra really 100% free for students?',
    answer: 'Yes, permanently. Every feature—university exploration, data analysis, college comparisons, and consultations with verified senior students—is 100% free for students. We do not sell subscriptions, paywall reviews, or charge for mentorship.'
  },
  {
    question: 'How do you make money if you don\'t take university commissions?',
    answer: 'Unlike traditional admission agents who earn $3,000 to $8,000 per student sent to partner colleges, Gradastra operates on an independent non-commission charter. We refuse admission placement fees, sponsored university rankings, or lead sales. Platform operations are supported by independent grants, non-intrusive ethical sponsorships, and transparent voluntary contributions.'
  },
  {
    question: 'How are student advisors verified?',
    answer: 'Prospective senior advisors must submit official proof of current university enrollment (e.g., student ID card, official enrollment certificate, or verifiable university portal transcript). Our moderation team manually reviews documents before awarding the Verified Student badge. Private identity documents are never published or shared.'
  },
  {
    question: 'What is the "Talk to a Senior" consultation process?',
    answer: 'Once you find an advisor matching your university, major, or target country, you can submit a free consultation request with your specific questions. The advisor accepts and connects with you via platform messaging or an external meeting link (Google Meet / Zoom). You get unvarnished, peer-to-peer advice on workload, professors, dorms, and local realities.'
  },
  {
    question: 'Why do you distinguish "Officially Published" vs "Student-Reported" data?',
    answer: 'Universities frequently publish optimistic placement averages or selective statistics that may not reflect median student experiences. Gradastra presents both official university disclosures and anonymous, aggregated student-reported metrics side-by-side with clear confidence tags so you can see the complete picture.'
  },
  {
    question: 'Can universities pay to remove negative reviews?',
    answer: 'Never. As outlined in Section 11 of the Gradastra PRD, we do not suppress legitimate student criticism or permit institutions to edit student sentiment. We only moderate content that violates safety policies, defamation laws, or contains fabricated claims.'
  }
];
