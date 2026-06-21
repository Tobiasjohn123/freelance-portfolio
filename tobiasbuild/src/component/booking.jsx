// src/components/booking.jsx
import React, { useMemo, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SLOTS = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

const getMonthLayout = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const startWeekday = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return { startWeekday, daysInMonth };
};

const Booking = () => {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const minBookableDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + 2);
    return d;
  }, [today]);

  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const { startWeekday, daysInMonth } = getMonthLayout(year, month);

  const isAvailableDay = (day) => {
    const date = new Date(year, month, day);
    if (date < minBookableDate) return false;
    const weekday = date.getDay();
    return weekday !== 0 && weekday !== 6;
  };

  const isToday = (day) =>
    year === today.getFullYear() && month === today.getMonth() && day === today.getDate();

  const isSelected = (day) =>
    selectedDate &&
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month &&
    selectedDate.getDate() === day;

  const isPrevDisabled = useMemo(() => {
    const prevMonthDate = new Date(year, month - 1, 1);
    return (
      prevMonthDate.getFullYear() < today.getFullYear() ||
      (prevMonthDate.getFullYear() === today.getFullYear() && prevMonthDate.getMonth() < today.getMonth())
    );
  }, [year, month, today]);

  const handlePrevMonth = () => {
    if (isPrevDisabled) return;
    setViewDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleDaySelect = (day) => {
    if (!isAvailableDay(day)) return;
    setSelectedDate(new Date(year, month, day));
    setSelectedSlot(null);
  };

  // ✅ FINAL REDIRECT FUNCTION
  const handleConfirm = () => {
    if (selectedDate && selectedSlot) {
      setBooked(true);
      
      setTimeout(() => {
        // 🔴 YOUR LIVE CALENDLY LINK
        window.location.href = "https://calendly.com/tobias-dev015/30min";
      }, 1500);
    }
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setBooked(false);
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : '';

  const calendarPadding = Array.from({ length: startWeekday });
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const isFormComplete = selectedDate && selectedSlot;

  return (
    <section className="booking-section" id="booking">
      <div className="container">
        <div className="booking-glass reveal-up">
          <div className="booking-inner">
            <h2 className="booking-title"><span className="gradient-text">Ready to automate your bookings?</span></h2>
            <p className="booking-subtitle">
              Select an available slot below for a 15-minute system audit. No pitch, just pure strategy.
            </p>

            <div className="scheduler-widget">
              {!booked ? (
                <>
                  <div className="scheduler-info">
                    <div className="scheduler-host">
                      <div className="host-avatar">TB</div>
                      <div>
                        <div className="host-name">Tobias Build</div>
                        <div className="host-title">Infrastructure Engineer</div>
                      </div>
                    </div>
                    <h3 className="meeting-title">15-Min Strategy Session</h3>
                    <div className="meeting-meta">
                      <div className="meta-item">
                        <span className="material-symbols-outlined">schedule</span>
                        <span>15 Minutes</span>
                      </div>
                      <div className="meta-item">
                        <span className="material-symbols-outlined">videocam</span>
                        <span>Google Meet Link Provided</span>
                      </div>
                    </div>
                    <p className="meeting-desc">
                      A deep-dive audit of your active acquisition funnel, calendar integrations, and follow-up sequences. We map out a tailored automation roadmap.
                    </p>
                  </div>

                  <div className="scheduler-calendar" id="schedulerCalendar">
                    <div>
                      <div className="calendar-header">
                        <span className="calendar-month">{MONTH_NAMES[month]} {year}</span>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button
                            className="calendar-nav-btn"
                            aria-label="Previous month"
                            onClick={handlePrevMonth}
                            disabled={isPrevDisabled}
                            type="button"
                          >
                            <span className="material-symbols-outlined">chevron_left</span>
                          </button>
                          <button
                            className="calendar-nav-btn"
                            aria-label="Next month"
                            onClick={handleNextMonth}
                            type="button"
                          >
                            <span className="material-symbols-outlined">chevron_right</span>
                          </button>
                        </div>
                      </div>

                      <div className="calendar-grid">
                        <div className="calendar-day-label">Mo</div>
                        <div className="calendar-day-label">Tu</div>
                        <div className="calendar-day-label">We</div>
                        <div className="calendar-day-label">Th</div>
                        <div className="calendar-day-label">Fr</div>
                        <div className="calendar-day-label">Sa</div>
                        <div className="calendar-day-label">Su</div>

                        {calendarPadding.map((_, idx) => (
                          <div key={`pad-${idx}`} className="calendar-day empty"></div>
                        ))}

                        {calendarDays.map((day) => {
                          const available = isAvailableDay(day);
                          const selected = isSelected(day);
                          const todayFlag = isToday(day);
                          return (
                            <div
                              key={`day-${day}`}
                              className={`calendar-day ${available ? 'available' : ''} ${selected ? 'active-day' : ''} ${todayFlag ? 'today' : ''}`}
                              onClick={() => handleDaySelect(day)}
                            >
                              {day}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {selectedDate && (
                      <div className="scheduler-slots open">
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem', fontWeight: 600 }}>
                          Select Time for {formattedSelectedDate}:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {SLOTS.map((slot) => (
                            <div
                              key={slot}
                              className={`slot-btn ${selectedSlot === slot ? 'selected-slot' : ''}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              {slot}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      className={`scheduler-confirm-btn ${isFormComplete ? 'open' : 'disabled'}`}
                      onClick={handleConfirm}
                      disabled={!isFormComplete}
                      type="button"
                    >
                      {isFormComplete ? 'Confirm Session' : 'Select a Date & Time'}
                    </button>
                  </div>
                </>
              ) : (
                <div className="scheduler-success open">
                  <span className="material-symbols-outlined success-icon">check_circle</span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>Session Confirmed!</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                    Your system audit is booked for <strong style={{ color: '#ffffff' }}>{formattedSelectedDate}</strong> at <strong style={{ color: '#ffffff' }}>{selectedSlot}</strong>.
                    <br />
                    You will be redirected to complete your booking details.
                  </p>
                </div>
              )}
            </div>

            <p className="booking-email">
              {/* Prefer email? Reach me at <a href="mailto:tobias@tobiasbuild.dev">tobias@tobiasbuild.dev</a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;