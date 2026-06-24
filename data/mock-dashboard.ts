import type { Notification, ChartDataPoint, DashboardStats } from '@/types';

export const dashboardStats: DashboardStats = {
  totalPlayers: 186,
  totalTeams: 8,
  upcomingMatches: 6,
  activeMembers: 412,
  revenueThisMonth: 24850,
  revenueGrowth: 12.4,
  registrationsPending: 14,
  attendanceRate: 78,
};

export const notifications: Notification[] = [
  {
    id: 'n1',
    type: 'match',
    title: 'Match Tomorrow — Kolkata Royals CC',
    message: 'Reminder: Home match vs Kolkata Royals CC at Wankhede Practice Ground, 09:00. 11 players confirmed for the XI.',
    timestamp: '2024-10-18T09:00:00Z',
    isRead: false,
    actionUrl: '/dashboard/fixtures/m-upcoming-1',
  },
  {
    id: 'n2',
    type: 'injury',
    title: 'Vikram Patel — Injury Update',
    message: 'Medical team confirms 6-8 week recovery from a hamstring strain. Physio rehabilitation schedule attached.',
    timestamp: '2024-10-17T14:30:00Z',
    isRead: false,
    actionUrl: '/dashboard/players/p5',
  },
  {
    id: 'n3',
    type: 'payment',
    title: '14 Registration Payments Pending',
    message: 'Annual registration fees outstanding for 14 players. Deadline: October 25.',
    timestamp: '2024-10-16T10:00:00Z',
    isRead: false,
    actionUrl: '/dashboard/members',
  },
  {
    id: 'n4',
    type: 'selection',
    title: 'Playing XI Required — Round 15',
    message: 'Please submit the Playing XI for the Kolkata Royals CC match by 18:00 Friday.',
    timestamp: '2024-10-16T09:00:00Z',
    isRead: true,
    actionUrl: '/dashboard/fixtures/m-upcoming-1',
  },
  {
    id: 'n5',
    type: 'announcement',
    title: 'New Practice Facility Announcement Published',
    message: 'The 2026 net practice facility announcement has been published to the club website.',
    timestamp: '2024-10-15T11:30:00Z',
    isRead: true,
    actionUrl: '/news/new-practice-facility-2026',
  },
  {
    id: 'n6',
    type: 'system',
    title: 'Season Stats Updated',
    message: 'Player and team statistics have been updated following Round 14.',
    timestamp: '2024-10-13T08:00:00Z',
    isRead: true,
  },
];

export const matchPerformanceData: ChartDataPoint[] = [
  { label: 'R8', value: 178, secondary: 134 },
  { label: 'R9', value: 143, secondary: 157 },
  { label: 'R10', value: 198, secondary: 112 },
  { label: 'R11', value: 167, secondary: 141 },
  { label: 'R12', value: 156, secondary: 156 },
  { label: 'R13', value: 168, secondary: 142 },
  { label: 'R14', value: 187, secondary: 134 },
];

export const memberRegistrationData: ChartDataPoint[] = [
  { label: 'Jan', value: 28 },
  { label: 'Feb', value: 15 },
  { label: 'Mar', value: 42 },
  { label: 'Apr', value: 38 },
  { label: 'May', value: 22 },
  { label: 'Jun', value: 18 },
  { label: 'Jul', value: 45 },
  { label: 'Aug', value: 67 },
  { label: 'Sep', value: 54 },
  { label: 'Oct', value: 31 },
];

export const revenueData: ChartDataPoint[] = [
  { label: 'Jan', value: 8200 },
  { label: 'Feb', value: 6100 },
  { label: 'Mar', value: 12400 },
  { label: 'Apr', value: 9800 },
  { label: 'May', value: 7600 },
  { label: 'Jun', value: 11200 },
  { label: 'Jul', value: 15800 },
  { label: 'Aug', value: 21400 },
  { label: 'Sep', value: 19600 },
  { label: 'Oct', value: 24850 },
];

export const attendanceData: ChartDataPoint[] = [
  { label: 'R8', value: 1840 },
  { label: 'R9', value: 1240 },
  { label: 'R10', value: 2180 },
  { label: 'R11', value: 1920 },
  { label: 'R12', value: 2210 },
  { label: 'R13', value: 1620 },
  { label: 'R14', value: 2840 },
];

export const activityFeed = [
  { id: 'af1', type: 'match_result', icon: 'trophy', message: 'Mumbai Lions beat Delhi Strikers CC by 53 runs — dominant display', time: '2 days ago', highlight: true },
  { id: 'af2', type: 'injury', icon: 'alert', message: 'Vikram Patel listed as injured — hamstring strain', time: '3 days ago', highlight: false },
  { id: 'af3', type: 'registration', icon: 'user-plus', message: '3 new youth players registered to the academy', time: '4 days ago', highlight: false },
  { id: 'af4', type: 'announcement', icon: 'megaphone', message: 'New practice facility announcement published', time: '5 days ago', highlight: false },
  { id: 'af5', type: 'match_result', icon: 'trophy', message: 'Mumbai Lions beat Hyderabad Hawks by 26 runs (Away) — superb chase', time: '9 days ago', highlight: true },
  { id: 'af6', type: 'award', icon: 'star', message: 'Arjun Mehta wins MCA Player of the Month — 687 runs this season', time: '10 days ago', highlight: true },
  { id: 'af7', type: 'match_result', icon: 'minus', message: 'Mumbai Lions tied with Chennai Kings CC — thrilling Super Over finish', time: '16 days ago', highlight: false },
  { id: 'af8', type: 'training', icon: 'activity', message: 'Pre-season batting camp completed at Wankhede Practice Nets', time: '3 weeks ago', highlight: false },
];
