export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    title: "About the Ashram",
    href: "/about",
    children: [
      { title: "About Swamiji", href: "/about/swamiji", description: "Life & spiritual journey of our beloved Swamiji" },
      { title: "Core Values & Philosophy", href: "/about/philosophy", description: "The principles that guide our path" },
      { title: "Message from Swamiji", href: "/about/message", description: "Words of wisdom and guidance" },
      { title: "Ashram History", href: "/about/history", description: "Our journey through the years" },
      { title: "Lineage & Tradition", href: "/about/lineage", description: "The sacred paramapara we follow" },
    ],
  },
  {
    title: "Teachings",
    href: "/teachings",
    children: [
      { title: "Daily Teachings", href: "/teachings/daily", description: "Fresh wisdom for everyday life" },
      { title: "Articles & Essays", href: "/teachings/articles", description: "In-depth explorations of spiritual topics" },
      { title: "Vedanta & Scriptures", href: "/teachings/vedanta", description: "Commentaries on ancient texts" },
      { title: "Meditation & Sadhana", href: "/teachings/meditation", description: "Practical guidance for inner work" },
      { title: "Audio Discourses", href: "/teachings/audio", description: "Listen to Swamiji's talks" },
      { title: "Video Teachings", href: "/teachings/videos", description: "Watch and learn" },
    ],
  },
  {
    title: "Events & Activities",
    href: "/events",
    children: [
      { title: "Upcoming Events", href: "/events/upcoming", description: "Join us in celebration and learning" },
      { title: "Past Events", href: "/events/past", description: "Memories of gatherings gone by" },
      { title: "Retreats & Workshops", href: "/events/retreats", description: "Immersive spiritual experiences" },
      { title: "Festival Celebrations", href: "/events/festivals", description: "Sacred occasions at the ashram" },
      { title: "Event Calendar", href: "/events/calendar", description: "Plan your visit" },
    ],
  },
  {
    title: "Publications",
    href: "/publications",
    children: [
      { title: "Books by Swamiji", href: "/publications/books", description: "Wisdom captured in print" },
      { title: "Articles & PDFs", href: "/publications/articles", description: "Downloadable teachings" },
      { title: "Downloads", href: "/publications/downloads", description: "Free spiritual resources" },
      { title: "Newsletters", href: "/publications/newsletters", description: "Stay connected with ashram news" },
    ],
  },
  {
    title: "Seva & Donations",
    href: "/donate",
    children: [
      { title: "Donate Now", href: "/donate", description: "Support our mission" },
      { title: "Donation Channels", href: "/donate/channels", description: "UPI, Bank Transfer, International Cards" },
      { title: "Donation Impact", href: "/donate/impact", description: "See how your seva makes a difference" },
      { title: "Volunteer", href: "/donate/volunteer", description: "Offer your time and skills" },
      { title: "Fund Transparency", href: "/donate/transparency", description: "Our commitment to accountability" },
    ],
  },
  {
    title: "Media & Gallery",
    href: "/media",
    children: [
      { title: "Photo Gallery", href: "/media/photos", description: "Moments captured at the ashram" },
      { title: "Video Gallery", href: "/media/videos", description: "Visual stories of ashram life" },
      { title: "Ashram Life", href: "/media/life", description: "Daily rhythms of spiritual living" },
      { title: "Media Mentions", href: "/media/press", description: "Coverage and features" },
    ],
  },
  {
    title: "Contact & Visit",
    href: "/contact",
    children: [
      { title: "Contact Information", href: "/contact", description: "Reach out to us" },
      { title: "Visit the Ashram", href: "/contact/visit", description: "Plan your pilgrimage" },
      { title: "Location & Map", href: "/contact/location", description: "Find your way to us" },
      { title: "Accommodation Info", href: "/contact/accommodation", description: "Stay at the ashram" },
      { title: "FAQs", href: "/contact/faq", description: "Common questions answered" },
    ],
  },
];

export const adminNavigation: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Donations & Funds",
    href: "/admin/donations",
    children: [
      { title: "All Donations", href: "/admin/donations" },
      { title: "Donation Channels", href: "/admin/donations/channels" },
      { title: "Transaction History", href: "/admin/donations/transactions" },
      { title: "Donor Management", href: "/admin/donations/donors" },
      { title: "Reports & Analytics", href: "/admin/donations/reports" },
    ],
  },
  {
    title: "Content Management",
    href: "/admin/content",
    children: [
      { title: "Teachings", href: "/admin/content/teachings" },
      { title: "Articles & Blog", href: "/admin/content/articles" },
      { title: "Video & Audio", href: "/admin/content/media" },
      { title: "Gallery", href: "/admin/content/gallery" },
    ],
  },
  {
    title: "Events",
    href: "/admin/events",
    children: [
      { title: "All Events", href: "/admin/events" },
      { title: "Create Event", href: "/admin/events/new" },
      { title: "Registrations", href: "/admin/events/registrations" },
      { title: "Calendar", href: "/admin/events/calendar" },
    ],
  },
  {
    title: "Volunteers",
    href: "/admin/volunteers",
    children: [
      { title: "Applications", href: "/admin/volunteers/applications" },
      { title: "Active Volunteers", href: "/admin/volunteers/active" },
      { title: "Assignments", href: "/admin/volunteers/assignments" },
      { title: "Communication", href: "/admin/volunteers/communication" },
    ],
  },
  {
    title: "Publications",
    href: "/admin/publications",
    children: [
      { title: "Books & PDFs", href: "/admin/publications/books" },
      { title: "Newsletters", href: "/admin/publications/newsletters" },
    ],
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
];

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
];
