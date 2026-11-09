/**
 * ====================================================================
 * WEDDING INVITATION CONFIGURATION & CONTENT
 * ====================================================================
 * You can edit any text, dates, venues, dress codes, or image paths below.
 * All changes will automatically reflect across the entire application.
 */

export const initialWeddingData = {
  // Theme & Colors
  theme: {
    primaryBg: '#F0F4F8',
    cardBg: '#FFFFFF',
    textDark: '#202D3C',
    textMuted: '#6D829B',
    accentGold: '#B08968',
    accentLight: '#E5EFF8',
    borderSoft: '#D2E0EE',
  },

  // Header & Sacred Invocation
  header: {
    symbolIcon: '/images/ganesha.svg',
    invocationText: '|| Shree Ganeshaya Namah ||',
    familiesText: 'Together With Their Families',
    invitationNote: 'Request the honour of your presence',
  },

  // Couple Information
  couple: {
    groom: {
      name: 'Jay Surve',
      role: 'The Groom',
      parentage: 'S/o Late Mr. Dinesh & Mrs. Varsha Surve',
      image: '/images/groom.jpg',
      alt: 'Jay Surve',
    },
    bride: {
      name: 'Janvi Rohit',
      role: 'The Bride',
      parentage: 'D/o Mr. Mahesh & Mrs. Aruna Rohit',
      image: '/images/bride.jpg',
      alt: 'Janvi Rohit',
    },
  },

  // Save the Date & Countdown Target (ISO Format)
  saveTheDate: {
    title: 'Save The Date',
    displayDate: 'January 26, 2027',
    targetDateTime: '2027-01-26T17:00:00+05:30', // Used for live countdown calculation
    calendarEvent: {
      title: 'Jay & Janvi Wedding Celebration',
      description: 'Join us to celebrate the wedding of Jay Surve & Janvi Rohit!',
      location: 'Rohitvas, Near Dabhel check post, Chala, Vapi',
      startDate: '20270126T170000',
      endDate: '20270126T230000',
    }
  },

  // Our Love Story
  story: {
    eyebrow: 'Our Story',
    quote: '“Met on Instagram profile slowly knowing each other and shared conversations, and eventually realized that their paths were meant to run side-by-side forever.”',
    tagline: '— A celebration of love, culture, and the beginning of forever.',
  },

  // Celebrations & Events Timeline
  events: [
    {
      id: 'evt-haldi',
      eventNumber: 'Event 1',
      name: 'Haldi Ceremony',
      date: 'January 24, 2027',
      time: '11:00 AM',
      timingsDisplay: '11:00 AM onwards',
      dressCode: 'Festive Yellow & Mustard Attire',
      venue: 'Rohitvas, Umbergaon Town 396170',
      description: 'An auspicious morning filled with joy, turmeric blessings, traditional music, and colorful celebrations.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rohitvas%2C+Umbergaon+Town+396170',
    },
    {
      id: 'evt-sangeet',
      eventNumber: 'Event 2',
      name: 'Sangeet Night',
      date: 'January 25, 2027',
      time: '07:30 PM',
      timingsDisplay: '07:30 PM onwards',
      dressCode: 'Indo-Western Glitz & Glamour',
      venue: 'Rohitvas, Umbergaon Town 396170',
      description: 'An evening filled with stellar dance performances, delicious cocktail toasts, and live musical rhythms that last until midnight.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rohitvas%2C+Umbergaon+Town+396170',
    },
    {
      id: 'evt-pheras',
      eventNumber: 'Event 3',
      name: 'Main Pheras (The Wedding)',
      date: 'January 26, 2027',
      time: '05:00 PM',
      timingsDisplay: '05:00 PM onwards',
      dressCode: 'Traditional Royal Indian Wear',
      venue: 'Rohitvas, Near Dabhel check post, Chala, Vapi',
      description: 'Join us under the stars as Jay and Janvi take their seven sacred vows around the holy fire to unite as one.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rohitvas%2C+Near+Dabhel+check+post%2C+Chala%2C+Vapi',
    },
  ],

  // Photo Memories Gallery
  gallery: [
    { id: 1, src: '/images/gallery-1.jpg', caption: 'Sweet Memories' },
    { id: 2, src: '/images/gallery-2.jpg', caption: 'Cherished Moments' },
    { id: 3, src: '/images/gallery-3.jpg', caption: 'Together Forever' },
    { id: 4, src: '/images/gallery-4.jpg', caption: 'Laughter & Love' },
    { id: 5, src: '/images/gallery-5.jpg', caption: 'Joyful Times' },
    { id: 6, src: '/images/gallery-6.jpg', caption: 'Unforgettable Days' },
    { id: 7, src: '/images/gallery-7.jpg', caption: 'Two Hearts As One' },
    { id: 8, src: '/images/gallery-8.jpg', caption: 'Beginning of Forever' },
  ],

  // Main Venue Details
  venue: {
    title: 'Venue',
    address: 'Rohitvas, Near Dabhel check post, Chala, Vapi',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rohitvas%20%2C%20Near%20Dabhel%20check%20post%20%2C%20Chala%20%2C%20Vapi%20',
  },

  // Stay & Travel Logistics
  travel: {
    eyebrow: 'Guest Information',
    title: 'Stay & Travel',
    cardTitle: 'Getting There',
    details: 'Bus will depart from Umbergaon at 03:00 PM',
  },

  // Background Music
  music: {
    enabled: true,
    audioUrl: '/audio/wedding-music.mp3',
    fallbackAudioUrl: 'https://actions.google.com/sounds/v1/water/rain_heavy.ogg', // or royal chime
    title: 'Royal Indian Sitar & Shehnai',
  },

  // Footer Blessing
  footer: {
    heading: "We can't wait to celebrate with you",
    subtext: 'Made with love for Jay Surve & Janvi Rohit',
  }
};
