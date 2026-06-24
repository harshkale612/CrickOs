import type { League, LeagueStanding } from '@/types';

export const mockStandings: LeagueStanding[] = [
  {
    position: 1, teamId: 'mumbai-lions', teamName: 'Mumbai Lions CC', teamShortName: 'MUM', teamLogo: '',
    played: 14, won: 11, drawn: 1, lost: 2,
    pointsFor: 2614, pointsAgainst: 1987, pointsDiff: 627,
    runsFor: 2614, bonusPoints: 8, points: 54,
    form: ['W', 'W', 'D', 'W', 'W'], isUserTeam: true,
  },
  {
    position: 2, teamId: 'delhi-strikers', teamName: 'Delhi Strikers CC', teamShortName: 'DEL', teamLogo: '',
    played: 14, won: 10, drawn: 0, lost: 4,
    pointsFor: 2487, pointsAgainst: 2201, pointsDiff: 286,
    runsFor: 2487, bonusPoints: 6, points: 46,
    form: ['L', 'W', 'W', 'W', 'W'],
  },
  {
    position: 3, teamId: 'chennai-kings', teamName: 'Chennai Kings CC', teamShortName: 'CHN', teamLogo: '',
    played: 14, won: 9, drawn: 1, lost: 4,
    pointsFor: 2341, pointsAgainst: 2198, pointsDiff: 143,
    runsFor: 2341, bonusPoints: 5, points: 43,
    form: ['W', 'L', 'W', 'D', 'W'],
  },
  {
    position: 4, teamId: 'bangalore-eagles', teamName: 'Bangalore Eagles CC', teamShortName: 'BLR', teamLogo: '',
    played: 14, won: 8, drawn: 2, lost: 4,
    pointsFor: 2287, pointsAgainst: 2241, pointsDiff: 46,
    runsFor: 2287, bonusPoints: 4, points: 40,
    form: ['D', 'W', 'W', 'L', 'W'],
  },
  {
    position: 5, teamId: 'hyderabad-hawks', teamName: 'Hyderabad Hawks CC', teamShortName: 'HYD', teamLogo: '',
    played: 14, won: 7, drawn: 1, lost: 6,
    pointsFor: 2198, pointsAgainst: 2267, pointsDiff: -69,
    runsFor: 2198, bonusPoints: 5, points: 35,
    form: ['L', 'W', 'L', 'W', 'D'],
  },
  {
    position: 6, teamId: 'kolkata-royals', teamName: 'Kolkata Royals CC', teamShortName: 'KOL', teamLogo: '',
    played: 14, won: 6, drawn: 0, lost: 8,
    pointsFor: 2087, pointsAgainst: 2341, pointsDiff: -254,
    runsFor: 2087, bonusPoints: 4, points: 28,
    form: ['L', 'L', 'W', 'L', 'W'],
  },
  {
    position: 7, teamId: 'pune-warriors', teamName: 'Pune Warriors CC', teamShortName: 'PUN', teamLogo: '',
    played: 14, won: 4, drawn: 1, lost: 9,
    pointsFor: 1954, pointsAgainst: 2487, pointsDiff: -533,
    runsFor: 1954, bonusPoints: 3, points: 21,
    form: ['L', 'D', 'L', 'W', 'L'],
  },
  {
    position: 8, teamId: 'jaipur-panthers', teamName: 'Jaipur Panthers CC', teamShortName: 'JAI', teamLogo: '',
    played: 14, won: 3, drawn: 0, lost: 11,
    pointsFor: 1834, pointsAgainst: 2654, pointsDiff: -820,
    runsFor: 1834, bonusPoints: 2, points: 14,
    form: ['L', 'L', 'L', 'W', 'L'],
  },
];

export const mockLeagues: League[] = [
  {
    id: 'mca-premier',
    name: 'Mumbai Cricket Association Premier Division',
    shortName: 'MCA Premier',
    country: 'India',
    province: 'Maharashtra',
    season: '2024',
    division: 'Premier',
    description: 'The highest level of club cricket in Mumbai, featuring 8 of the city\'s top clubs competing for the MCA Premier Division championship and automatic entry into the BCCI Club Championship.',
    standings: mockStandings,
    fixtures: [],
  },
  {
    id: 'ksca-premier',
    name: 'Karnataka State Cricket Association Premier League',
    shortName: 'KSCA Premier',
    country: 'India',
    province: 'Karnataka',
    season: '2024',
    division: 'Premier',
    description: 'The premier club cricket competition in Karnataka.',
    standings: [
      {
        position: 1, teamId: 'delhi-strikers', teamName: 'Delhi Strikers CC', teamShortName: 'DEL', teamLogo: '',
        played: 14, won: 12, drawn: 0, lost: 2,
        pointsFor: 2754, pointsAgainst: 1987, pointsDiff: 767,
        runsFor: 2754, bonusPoints: 10, points: 58,
        form: ['W', 'W', 'W', 'W', 'W'],
      },
      {
        position: 2, teamId: 'bangalore-eagles', teamName: 'Bangalore Eagles CC', teamShortName: 'BLR', teamLogo: '',
        played: 14, won: 11, drawn: 0, lost: 3,
        pointsFor: 2632, pointsAgainst: 2123, pointsDiff: 509,
        runsFor: 2632, bonusPoints: 7, points: 51,
        form: ['W', 'L', 'W', 'W', 'W'],
      },
    ],
    fixtures: [],
  },
];

export const getLeagueById = (id: string) => mockLeagues.find(l => l.id === id);
