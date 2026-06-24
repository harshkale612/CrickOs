import type { Club } from '@/types';

export const mockClubs: Club[] = [
  {
    id: 'mumbai-lions',
    name: 'Mumbai Lions CC',
    shortName: 'Lions',
    logo: '/images/clubs/lions-logo.svg',
    banner: '/images/clubs/lions-banner.jpg',
    city: 'Mumbai',
    province: 'Maharashtra',
    country: 'India',
    founded: 1987,
    division: 'Mumbai Cricket Association — Premier Division',
    description:
      'One of India\'s most decorated club cricket sides, Mumbai Lions CC has been a cornerstone of Mumbai cricket for over three decades. Renowned for producing elite Indian talent and competing at the highest levels of club cricket across the country.',
    colors: { primary: '#DC2626', secondary: '#1E3A5F' },
    stats: {
      totalPlayers: 186,
      totalTeams: 8,
      seasonsPlayed: 37,
      leagueTitles: 12,
      winRate: 68,
      totalMembers: 412,
    },
    contact: {
      address: 'Wankhede Stadium Complex, Marine Lines',
      city: 'Mumbai, MH 400020',
      phone: '+91 22 6655 0178',
      email: 'info@mumbailionscc.in',
      website: 'www.mumbailionscc.in',
    },
    socialMedia: {
      twitter: '@MumbaiLionsCC',
      instagram: '@mumbailionscc',
      facebook: 'MumbaiLionsCC',
      youtube: 'MumbaiLionsCricket',
    },
    sponsors: [
      { id: 's1', name: 'Tata Group', logo: '/images/sponsors/tata.svg', tier: 'platinum' },
      { id: 's2', name: 'Air India', logo: '/images/sponsors/airindia.svg', tier: 'gold' },
      { id: 's3', name: 'HDFC Bank', logo: '/images/sponsors/hdfc.svg', tier: 'gold' },
      { id: 's4', name: 'Reliance Retail', logo: '/images/sponsors/reliance.svg', tier: 'silver' },
      { id: 's5', name: 'Chai Point', logo: '/images/sponsors/chaipoint.svg', tier: 'silver' },
      { id: 's6', name: 'MRF Tyres', logo: '/images/sponsors/mrf.svg', tier: 'bronze' },
    ],
    achievements: [
      { id: 'a1', title: 'MCA Premier Division Champions', year: 2023, description: 'Undefeated season with a dominant final against Delhi Strikers CC.', type: 'championship' },
      { id: 'a2', title: 'BCCI Club Championship', year: 2021, description: 'National champions after defeating Karnataka Panthers in Bengaluru.', type: 'championship' },
      { id: 'a3', title: 'Maharashtra Cricket Cup', year: 2022, description: 'Knockout cup victory after a tense final, winning by 18 runs.', type: 'cup' },
      { id: 'a4', title: 'Youth Development Award', year: 2023, description: 'MCA recognition for outstanding junior pathway programmes.', type: 'award' },
      { id: 'a5', title: '1000 Registered Members', year: 2020, description: 'Club milestone of surpassing 1,000 registered players and members.', type: 'milestone' },
    ],
  },
  {
    id: 'bangalore-eagles',
    name: 'Bangalore Eagles CC',
    shortName: 'Eagles',
    logo: '/images/clubs/eagles-logo.svg',
    banner: '/images/clubs/eagles-banner.jpg',
    city: 'Bengaluru',
    province: 'Karnataka',
    country: 'India',
    founded: 1993,
    division: 'Karnataka State Cricket Association — Premier Division',
    description:
      'The Bangalore Eagles are a powerhouse in South Indian club cricket, known for their aggressive batting and strong community ties across Greater Bengaluru.',
    colors: { primary: '#1E3A5F', secondary: '#F59E0B' },
    stats: {
      totalPlayers: 152,
      totalTeams: 6,
      seasonsPlayed: 31,
      leagueTitles: 8,
      winRate: 61,
      totalMembers: 330,
    },
    contact: {
      address: '1050 M.G. Road',
      city: 'Bengaluru, KA 560001',
      phone: '+91 80 4455 0234',
      email: 'info@bangaloreeaglescc.in',
      website: 'www.bangaloreeaglescc.in',
    },
    socialMedia: {
      twitter: '@BangaloreEagles',
      instagram: '@bangaloreeaglescc',
      facebook: 'BangaloreEaglesCC',
    },
    sponsors: [
      { id: 's7', name: 'Infosys', logo: '/images/sponsors/infosys.svg', tier: 'platinum' },
      { id: 's8', name: 'Namma Metro', logo: '/images/sponsors/nammametro.svg', tier: 'gold' },
    ],
    achievements: [
      { id: 'a6', title: 'KSCA Premier Champions', year: 2022, description: 'Dominant South India campaign.', type: 'championship' },
      { id: 'a7', title: 'South Zone Cricket Cup', year: 2023, description: 'Inter-state club competition victory.', type: 'cup' },
    ],
  },
  {
    id: 'delhi-strikers',
    name: 'Delhi Strikers CC',
    shortName: 'Strikers',
    logo: '/images/clubs/strikers-logo.svg',
    banner: '/images/clubs/strikers-banner.jpg',
    city: 'Delhi',
    province: 'Delhi',
    country: 'India',
    founded: 1978,
    division: 'Delhi District Cricket Association — Premier Division',
    description:
      'The Delhi Strikers are the pride of the capital, with a rich cricketing history and a passionate fanbase that fills the Feroz Shah Kotla Practice Ground every home match.',
    colors: { primary: '#F59E0B', secondary: '#DC2626' },
    stats: {
      totalPlayers: 174,
      totalTeams: 7,
      seasonsPlayed: 46,
      leagueTitles: 15,
      winRate: 72,
      totalMembers: 456,
    },
    contact: {
      address: 'Feroz Shah Kotla Ground, Bahadur Shah Zafar Marg',
      city: 'New Delhi, DL 110002',
      phone: '+91 11 2345 0312',
      email: 'contact@delhistrikers.in',
      website: 'www.delhistrikers.in',
    },
    socialMedia: {
      twitter: '@DelhiStrikersCC',
      instagram: '@delhistrikers',
      facebook: 'DelhiStrikersCC',
    },
    sponsors: [
      { id: 's9', name: 'ONGC', logo: '/images/sponsors/ongc.svg', tier: 'platinum' },
      { id: 's10', name: 'Punjab National Bank', logo: '/images/sponsors/pnb.svg', tier: 'gold' },
    ],
    achievements: [
      { id: 'a8', title: 'DDCA Premier Champions', year: 2023, description: 'Back-to-back title.', type: 'championship' },
    ],
  },
];

export const getClubById = (id: string) => mockClubs.find(c => c.id === id);
export const primaryClub = mockClubs[0];
