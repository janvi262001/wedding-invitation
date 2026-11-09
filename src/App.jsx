import React, { useState, useEffect } from 'react';
import { initialWeddingData } from './data/weddingData';
import Navbar from './components/Navbar';
import ScratchReveal from './components/ScratchReveal';
import HeroInvitation from './components/HeroInvitation';
import CoupleSection from './components/CoupleSection';
import SaveTheDateCard from './components/SaveTheDateCard';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import EventsTimeline from './components/EventsTimeline';
import Gallery from './components/Gallery';
import VenueTravel from './components/VenueTravel';
import FooterSection from './components/FooterSection';
import MusicPlayer from './components/MusicPlayer';
import PetalsEffect from './components/PetalsEffect';
import EditContentModal from './components/EditContentModal';

export default function App() {
  // Load custom data from localStorage if user previously edited it, otherwise default
  const [weddingData, setWeddingData] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_invitation_data');
      return saved ? JSON.parse(saved) : initialWeddingData;
    } catch (e) {
      return initialWeddingData;
    }
  });

  const [isScratchUnlocked, setIsScratchUnlocked] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  const handleSaveData = (newData) => {
    setWeddingData(newData);
    try {
      localStorage.setItem('wedding_invitation_data', JSON.stringify(newData));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  };

  const handleResetData = () => {
    setWeddingData(initialWeddingData);
    try {
      localStorage.removeItem('wedding_invitation_data');
    } catch (e) {}
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#202D3C] flex flex-col items-center selection:bg-amber-200 selection:text-amber-900 relative">
      {/* Falling Flower Petals / Sparkles Effect */}
      <PetalsEffect enabled={petalsEnabled} />

      {/* Interactive Scratch-off Card Overlay (Appears until unlocked or scratched) */}
      {!isScratchUnlocked && (
        <ScratchReveal
          couple={weddingData.couple}
          onRevealed={() => setIsScratchUnlocked(true)}
        />
      )}

      {/* Main Sticky Navbar with Quick Navigation & Actions */}
      <Navbar
        couple={weddingData.couple}
        onOpenEditor={() => setIsEditorOpen(true)}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled(!petalsEnabled)}
      />

      {/* Main Invitation Page Container matching Wishlys layout */}
      <main className="w-full max-w-2xl px-4 sm:px-6 py-8 sm:py-14 space-y-12 sm:space-y-16 relative z-10 transition-opacity duration-700">
        {/* Section 1: Sacred Invocation & Names Card */}
        <section id="hero">
          <HeroInvitation
            header={weddingData.header}
            couple={weddingData.couple}
          />
        </section>

        {/* Scroll Nudge Hint */}
        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6D829B] animate-bounce font-medium">
            Scroll to Explore ↓
          </p>
        </div>

        {/* Section 2: Couple Arched Photos with Pulsing Heart */}
        <section id="couple">
          <CoupleSection couple={weddingData.couple} />
        </section>

        {/* Section 3: Save The Date Box with Google Calendar Integration */}
        <section id="date">
          <SaveTheDateCard saveTheDate={weddingData.saveTheDate} />
        </section>

        {/* Section 4: Live Countdown Timer to Forever */}
        <section id="countdown">
          <CountdownTimer targetDate={weddingData.saveTheDate.targetDateTime} />
        </section>

        {/* Section 5: Our Love Story */}
        <section id="story">
          <OurStory story={weddingData.story} />
        </section>

        {/* Section 6: Programme & The Celebrations Timeline */}
        <section id="programme">
          <EventsTimeline events={weddingData.events} />
        </section>

        {/* Section 7: Photo Memories Gallery with Lightbox */}
        <section id="memories">
          <Gallery gallery={weddingData.gallery} />
        </section>

        {/* Section 8: Main Venue & Guest Stay / Travel */}
        <section id="travel">
          <VenueTravel
            venue={weddingData.venue}
            travel={weddingData.travel}
          />
        </section>

        {/* Section 9: Footer Blessing */}
        <footer id="footer">
          <FooterSection
            footer={weddingData.footer}
            couple={weddingData.couple}
          />
        </footer>
      </main>

      {/* Floating Background Music Player */}
      <MusicPlayer music={weddingData.music} />

      {/* Visual Content Customization Modal Drawer */}
      <EditContentModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={weddingData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
