import React, { useState } from 'react';
import { X, Save, RotateCcw, Download, Plus, Trash2, Image, Heart, Calendar, MapPin, Music } from 'lucide-react';

export default function EditContentModal({ isOpen, onClose, data, onSave, onReset }) {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(data)));
  const [activeTab, setActiveTab] = useState('couple');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleCoupleChange = (person, field, value) => {
    setFormData((prev) => ({
      ...prev,
      couple: {
        ...prev.couple,
        [person]: {
          ...prev.couple[person],
          [field]: value,
        },
      },
    }));
  };

  const handleHeaderChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        [field]: value,
      },
    }));
  };

  const handleStoryChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      story: {
        ...prev.story,
        [field]: value,
      },
    }));
  };

  const handleSaveDateChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      saveTheDate: {
        ...prev.saveTheDate,
        [field]: value,
      },
    }));
  };

  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...formData.events];
    updatedEvents[index] = {
      ...updatedEvents[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      events: updatedEvents,
    }));
  };

  const handleAddEvent = () => {
    const newEvent = {
      id: `evt-${Date.now()}`,
      eventNumber: `Event ${formData.events.length + 1}`,
      name: 'New Celebration',
      date: 'January 27, 2027',
      time: '06:00 PM',
      timingsDisplay: '06:00 PM onwards',
      dressCode: 'Festive Wear',
      venue: formData.venue.address,
      description: 'Join us for this special occasion.',
      mapUrl: formData.venue.mapUrl,
    };
    setFormData((prev) => ({
      ...prev,
      events: [...prev.events, newEvent],
    }));
  };

  const handleDeleteEvent = (index) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.filter((_, i) => i !== index),
    }));
  };

  const handleGalleryChange = (index, field, value) => {
    const updatedGallery = [...formData.gallery];
    updatedGallery[index] = {
      ...updatedGallery[index],
      [field]: value,
    };
    setFormData((prev) => ({
      ...prev,
      gallery: updatedGallery,
    }));
  };

  const handleImageFileUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        callback(loadEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(formData);
    setSuccessMsg('Changes saved and applied!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 1200);
  };

  const handleExportData = () => {
    const dataString = `export const initialWeddingData = ${JSON.stringify(formData, null, 2)};\n`;
    const blob = new Blob([dataString], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'weddingData.js';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#202D3C]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#D2E0EE] flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#D2E0EE] flex items-center justify-between bg-[#F0F4F8]">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#202D3C]">
              Customize Content & Images
            </h2>
            <p className="text-[11px] text-[#6D829B] tracking-wider uppercase font-medium">
              Edit all sections live or export to weddingData.js
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#6D829B] hover:text-[#202D3C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#D2E0EE] bg-white overflow-x-auto text-xs font-semibold uppercase tracking-wider text-[#6D829B]">
          <button
            onClick={() => setActiveTab('couple')}
            className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'couple'
                ? 'border-[#B08968] text-[#B08968] bg-[#F0F4F8]/50'
                : 'border-transparent hover:text-[#202D3C]'
            }`}
          >
            Couple & Parents
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'events'
                ? 'border-[#B08968] text-[#B08968] bg-[#F0F4F8]/50'
                : 'border-transparent hover:text-[#202D3C]'
            }`}
          >
            Events Timeline ({formData.events.length})
          </button>
          <button
            onClick={() => setActiveTab('story')}
            className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'story'
                ? 'border-[#B08968] text-[#B08968] bg-[#F0F4F8]/50'
                : 'border-transparent hover:text-[#202D3C]'
            }`}
          >
            Story & Date
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'gallery'
                ? 'border-[#B08968] text-[#B08968] bg-[#F0F4F8]/50'
                : 'border-transparent hover:text-[#202D3C]'
            }`}
          >
            Gallery Photos ({formData.gallery.length})
          </button>
          <button
            onClick={() => setActiveTab('venue')}
            className={`px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'venue'
                ? 'border-[#B08968] text-[#B08968] bg-[#F0F4F8]/50'
                : 'border-transparent hover:text-[#202D3C]'
            }`}
          >
            Venue & Logistics
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: COUPLE & PARENTS */}
          {activeTab === 'couple' && (
            <div className="space-y-6">
              {/* Header Invocations */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] bg-[#F0F4F8]/40 space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Sacred Header & Invocations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Invocation Text
                    </label>
                    <input
                      type="text"
                      value={formData.header.invocationText}
                      onChange={(e) => handleHeaderChange('invocationText', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white text-[#202D3C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Family Welcome Text
                    </label>
                    <input
                      type="text"
                      value={formData.header.familiesText}
                      onChange={(e) => handleHeaderChange('familiesText', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white text-[#202D3C]"
                    />
                  </div>
                </div>
              </div>

              {/* Groom Details */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-4">
                <div className="flex items-center gap-2 text-[#B08968] font-serif text-lg">
                  <Heart className="w-4 h-4 fill-[#B08968]" />
                  <span>The Groom</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Groom Name
                    </label>
                    <input
                      type="text"
                      value={formData.couple.groom.name}
                      onChange={(e) => handleCoupleChange('groom', 'name', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.couple.groom.role}
                      onChange={(e) => handleCoupleChange('groom', 'role', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Groom Parents / Lineage
                    </label>
                    <input
                      type="text"
                      value={formData.couple.groom.parentage}
                      onChange={(e) => handleCoupleChange('groom', 'parentage', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Groom Photo (URL or Upload)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.couple.groom.image}
                        onChange={(e) => handleCoupleChange('groom', 'image', e.target.value)}
                        className="flex-1 text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                      />
                      <label className="px-3 py-2 bg-[#E5EFF8] text-[#B08968] text-xs rounded border border-[#B08968]/30 cursor-pointer hover:bg-[#B08968] hover:text-white transition-colors">
                        Upload
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageFileUpload(e, (dataUri) => handleCoupleChange('groom', 'image', dataUri))}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bride Details */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-4">
                <div className="flex items-center gap-2 text-[#B08968] font-serif text-lg">
                  <Heart className="w-4 h-4 fill-[#B08968]" />
                  <span>The Bride</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Bride Name
                    </label>
                    <input
                      type="text"
                      value={formData.couple.bride.name}
                      onChange={(e) => handleCoupleChange('bride', 'name', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.couple.bride.role}
                      onChange={(e) => handleCoupleChange('bride', 'role', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Bride Parents / Lineage
                    </label>
                    <input
                      type="text"
                      value={formData.couple.bride.parentage}
                      onChange={(e) => handleCoupleChange('bride', 'parentage', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Bride Photo (URL or Upload)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.couple.bride.image}
                        onChange={(e) => handleCoupleChange('bride', 'image', e.target.value)}
                        className="flex-1 text-xs p-2 rounded border border-[#D2E0EE] bg-white"
                      />
                      <label className="px-3 py-2 bg-[#E5EFF8] text-[#B08968] text-xs rounded border border-[#B08968]/30 cursor-pointer hover:bg-[#B08968] hover:text-white transition-colors">
                        Upload
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageFileUpload(e, (dataUri) => handleCoupleChange('bride', 'image', dataUri))}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EVENTS TIMELINE */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#6D829B]">
                  Manage each ceremony, dress code, time, and venue.
                </p>
                <button
                  onClick={handleAddEvent}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5EFF8] text-[#B08968] border border-[#B08968]/40 hover:bg-[#B08968] hover:text-white text-xs font-semibold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Ceremony</span>
                </button>
              </div>

              {formData.events.map((event, idx) => (
                <div key={event.id || idx} className="p-4 rounded-xl border border-[#D2E0EE] space-y-3 relative bg-white">
                  <div className="flex items-center justify-between border-b border-[#D2E0EE]/50 pb-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                      {event.eventNumber || `Event ${idx + 1}`}
                    </span>
                    <button
                      onClick={() => handleDeleteEvent(idx)}
                      className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 p-1"
                      title="Delete this event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Ceremony Name
                      </label>
                      <input
                        type="text"
                        value={event.name}
                        onChange={(e) => handleEventChange(idx, 'name', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Date Display
                      </label>
                      <input
                        type="text"
                        value={event.date}
                        onChange={(e) => handleEventChange(idx, 'date', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Time
                      </label>
                      <input
                        type="text"
                        value={event.time}
                        onChange={(e) => handleEventChange(idx, 'time', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Dress Code
                      </label>
                      <input
                        type="text"
                        value={event.dressCode}
                        onChange={(e) => handleEventChange(idx, 'dressCode', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Venue
                      </label>
                      <input
                        type="text"
                        value={event.venue}
                        onChange={(e) => handleEventChange(idx, 'venue', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                        Description / Note
                      </label>
                      <textarea
                        rows={2}
                        value={event.description || ''}
                        onChange={(e) => handleEventChange(idx, 'description', e.target.value)}
                        className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: STORY & DATE */}
          {activeTab === 'story' && (
            <div className="space-y-6">
              {/* Save The Date */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Save The Date & Live Countdown
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Display Date String
                    </label>
                    <input
                      type="text"
                      value={formData.saveTheDate.displayDate}
                      onChange={(e) => handleSaveDateChange('displayDate', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Countdown Target (ISO Timestamp)
                    </label>
                    <input
                      type="text"
                      value={formData.saveTheDate.targetDateTime}
                      onChange={(e) => handleSaveDateChange('targetDateTime', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                </div>
              </div>

              {/* Our Story */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Our Story
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Love Story Narrative
                    </label>
                    <textarea
                      rows={3}
                      value={formData.story.quote}
                      onChange={(e) => handleStoryChange('quote', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Tagline / Closing Quote
                    </label>
                    <input
                      type="text"
                      value={formData.story.tagline}
                      onChange={(e) => handleStoryChange('tagline', e.target.value)}
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY PHOTOS */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6D829B]">
                Update image URLs or click upload to replace with your own photos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.gallery.map((item, idx) => (
                  <div key={item.id || idx} className="p-3 rounded-lg border border-[#D2E0EE] flex gap-3 items-center bg-white">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-14 h-16 object-cover rounded border border-[#D2E0EE] bg-[#F0F4F8] shrink-0"
                    />
                    <div className="flex-1 space-y-1.5">
                      <input
                        type="text"
                        placeholder="Caption"
                        value={item.caption || ''}
                        onChange={(e) => handleGalleryChange(idx, 'caption', e.target.value)}
                        className="w-full text-xs p-1.5 rounded border border-[#D2E0EE]"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Image URL"
                          value={item.src}
                          onChange={(e) => handleGalleryChange(idx, 'src', e.target.value)}
                          className="flex-1 text-[11px] p-1.5 rounded border border-[#D2E0EE]"
                        />
                        <label className="px-2 py-1 bg-[#E5EFF8] text-[#B08968] text-[11px] rounded border border-[#B08968]/30 cursor-pointer hover:bg-[#B08968] hover:text-white transition-colors shrink-0 flex items-center">
                          Upload
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageFileUpload(e, (dataUri) => handleGalleryChange(idx, 'src', dataUri))}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: VENUE & LOGISTICS */}
          {activeTab === 'venue' && (
            <div className="space-y-6">
              {/* Main Venue */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Main Venue
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Full Address
                    </label>
                    <input
                      type="text"
                      value={formData.venue.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          venue: { ...prev.venue, address: e.target.value },
                        }))
                      }
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Google Maps URL
                    </label>
                    <input
                      type="text"
                      value={formData.venue.mapUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          venue: { ...prev.venue, mapUrl: e.target.value },
                        }))
                      }
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                </div>
              </div>

              {/* Guest Travel */}
              <div className="p-4 rounded-xl border border-[#D2E0EE] space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#B08968]">
                  Guest Information & Travel
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Card Title
                    </label>
                    <input
                      type="text"
                      value={formData.travel.cardTitle}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          travel: { ...prev.travel, cardTitle: e.target.value },
                        }))
                      }
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#202D3C] mb-1">
                      Transport / Bus Note
                    </label>
                    <input
                      type="text"
                      value={formData.travel.details}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          travel: { ...prev.travel, details: e.target.value },
                        }))
                      }
                      className="w-full text-xs p-2 rounded border border-[#D2E0EE]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-[#D2E0EE] bg-[#F0F4F8] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportData}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#B08968]/50 text-[#B08968] bg-white hover:bg-[#E5EFF8] text-xs font-semibold transition-colors"
              title="Download your modified data file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export weddingData.js</span>
            </button>
            <button
              onClick={() => {
                if (window.confirm('Reset all content back to original defaults?')) {
                  onReset();
                  setFormData(JSON.parse(JSON.stringify(data)));
                  onClose();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#6D829B] hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {successMsg && (
              <span className="text-xs font-semibold text-green-700 animate-pulse">
                {successMsg}
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#D2E0EE] bg-white text-xs font-medium text-[#6D829B] hover:bg-[#F0F4F8]"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#B08968] hover:bg-[#8B6F47] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save & Apply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
