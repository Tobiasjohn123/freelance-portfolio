// src/components/SuccessMessage.jsx
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const SuccessMessage = ({ formattedSelectedDate, selectedSlot, onReset }) => {
  return (
    <div className="scheduler-success open">
      <MdCheckCircle className="success-icon" size={52} />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>
        Session Confirmed!
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
        Your system audit is booked for <strong style={{ color: '#ffffff' }}>{formattedSelectedDate}</strong> at <strong style={{ color: '#ffffff' }}>{selectedSlot}</strong>.
        <br />
        You will be redirected to complete your booking details.
      </p>
      {/* Optional: Add a reset button if you want them to book again */}
    
    </div>
  );
};

export default SuccessMessage;