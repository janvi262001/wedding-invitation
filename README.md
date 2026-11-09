# 💍 Jay & Janvi — Royal Wedding Invitation React Application

A luxury, interactive React wedding invitation web application recreated faithfully from the Wishlys preview design with modular components and full customization capabilities.

---

## ✨ Features & Architecture

- **Interactive Scratch-off Unlock Card**: Authentic metallic scratch-to-reveal card with percentage counter and celebration confetti burst (`canvas-confetti`).
- **Sacred Ganesh Invocation & Royal Card**: Traditional auspicious blessings (`|| Shree Ganeshaya Namah ||`), ornamental gold filigree dividers, corner accents, and family honors.
- **Couple Feature Section**: Elegant arch-framed portraits of the Groom (*Jay Surve*) & Bride (*Janvi Rohit*) with central pulsing heart.
- **Save The Date**: Elegant date card with instant **Add to Google Calendar** integration.
- **Live Countdown Timer**: Real-time ticker counting down Days, Hours, Minutes, and Seconds to the wedding.
- **Our Story**: Beautiful romantic narrative with royal serif typography and gold divider.
- **The Celebrations (Programme Timeline)**:
  - Haldi Ceremony (timings, dress code, venue, directions)
  - Sangeet Night (cocktails, dance, music, dress code, venue)
  - Main Pheras (The Wedding vows under the stars)
- **Memories Photo Gallery**: Responsive multi-column layout with **interactive Lightbox Modal** (zoom, next, previous, captions).
- **Venue & Guest Travel**: Google Maps directions link and bus departure / travel logistics.
- **Floating Music Player**: Ambient shehnai & sitar background audio with play/pause and animated equalizer.
- **Falling Petals & Sparkles**: Floating floral petals effect with toggle button.
- **In-App Visual Content Editor**: Click the **"Edit Content"** button in the navbar to edit any names, parents, dates, venues, dress codes, stories, and photos directly in your browser with live preview and "Export weddingData.js" button!

---

## 📁 Component Structure (Easy Management)

All sections are organized into independent, clean, modular components inside `src/components/`:

```
src/
├── components/
│   ├── Navbar.jsx            # Top bar with monogram, quick links, share button & editor toggle
│   ├── ScratchReveal.jsx     # Interactive scratch card overlay with confetti burst
│   ├── HeroInvitation.jsx    # Sacred Ganesh emblem, family lines, couple names & ornaments
│   ├── CoupleSection.jsx     # Groom & Bride arch-framed portrait cards & pulsing heart
│   ├── SaveTheDateCard.jsx   # Save the date badge & Google Calendar shortcut
│   ├── CountdownTimer.jsx    # Circular live countdown (Days, Hours, Mins, Secs)
│   ├── OurStory.jsx          # Romantic quote card with decorative borders
│   ├── EventsTimeline.jsx    # Vertical celebrations timeline (Haldi, Sangeet, Wedding)
│   ├── Gallery.jsx           # Photo memories grid with full-screen Lightbox viewer
│   ├── VenueTravel.jsx       # Main venue card with directions & Stay/Travel info
│   ├── FooterSection.jsx     # Warm celebratory closing blessings
│   ├── MusicPlayer.jsx       # Floating background music player with equalizer
│   ├── PetalsEffect.jsx      # Gentle falling flower petals & sparkles
│   └── EditContentModal.jsx  # Visual live customization drawer for easy browser editing
├── data/
│   └── weddingData.js        # SINGLE SOURCE OF TRUTH for all text, dates, and images
├── App.jsx                   # Main layout container & state orchestration
├── main.jsx                  # React 18 DOM root
└── index.css                 # Tailwind directives, gold gradients, and custom animations
```

---

## 🎨 How to Change / Edit Content & Images

You have **two easy ways** to update content and photos:

### Method 1: Using the Built-In Visual Editor (No Code Required)
1. Run the app and open it in your browser.
2. Click the **"Edit Content"** button in the top navbar.
3. A customization window will open with tabs for **Couple & Parents**, **Events Timeline**, **Story & Date**, **Gallery Photos**, and **Venue & Logistics**.
4. You can edit any text or upload photos directly from your computer!
5. Click **"Save & Apply"** to see changes instantly, or click **"Export weddingData.js"** to download your updated configuration file.

### Method 2: Editing `src/data/weddingData.js` Directly
Open `src/data/weddingData.js` in your editor. You can customize:
- **Couple Names & Parents**:
  ```javascript
  groom: {
    name: 'Jay Surve',
    role: 'The Groom',
    parentage: 'S/o Late Mr. Dinesh & Mrs. Varsha Surve',
    image: '/images/groom.jpg',
  }
  ```
- **Dates & Countdown**:
  ```javascript
  saveTheDate: {
    displayDate: 'January 26, 2027',
    targetDateTime: '2027-01-26T17:00:00+05:30',
  }
  ```
- **Events & Celebrations**: Add, remove, or modify events in the `events` array.
- **Photos**: Place new photos in `public/images/` and update paths in `weddingData.js`.

---

## 🚀 Running the Project Locally

1. Open your terminal in this directory:
   ```bash
   cd "C:\Users\janvi rohit\.gemini\antigravity\scratch\wedding-invitation"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

4. To create a production build:
   ```bash
   npm run build
   ```
