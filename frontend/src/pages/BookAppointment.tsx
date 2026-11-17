import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, User, Mail, Phone, MapPin, Check } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import { sendFormSubmission } from '../api/sendFormSubmission'

const BookAppointment: React.FC = () => {
  const [step, setStep] = useState(1) // 1: Select date, 2: Select time, 3: User details, 4: Confirmation
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [timezone, setTimezone] = useState('America/Los Angeles')
  const [isEditingTimezone, setIsEditingTimezone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const timezones = [
    'America/Los Angeles',
    'America/New York',
    'America/Chicago',
    'America/Denver',
    'America/Phoenix',
    'America/Anchorage',
    'Pacific/Honolulu',
    'Europe/London',
    'Europe/Paris',
    'Asia/Dubai',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney',
    'America/Toronto',
    'America/Mexico_City'
  ]

  // Generate next 7 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    return dates
  }

  // Time slots organized by time of day
  const timeSlots = {
    night: ['12:00 AM', '12:20 AM', '12:40 AM', '1:00 AM', '1:20 AM'],
    morning: ['6:00 AM', '6:20 AM', '6:40 AM', '7:00 AM', '7:20 AM'],
    afternoon: ['12:00 PM', '12:20 PM', '12:40 PM', '1:00 PM', '1:20 PM'],
    evening: ['6:00 PM', '6:20 PM', '6:40 PM', '7:00 PM', '7:20 PM']
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const handleSubmit = async () => {
    setSubmitError('')
    setIsSubmitting(true)

    try {
      await sendFormSubmission({
        source: 'Book Appointment Form',
        payload: {
          ...userDetails,
          selectedDate,
          selectedTime,
          timezone,
        },
      })
      setStep(4)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit the form.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageTitle title="Book Appointment - Consultation Phone Call | Alpha Medi Assist" />
      <div className="book-appointment-page">
      {/* Header */}
      <section className="booking-header">
        <div className="container">
          <div className="booking-header-content">
            <Link to="/specialties" className="back-button">
              <ArrowLeft size={16} />
              BACK
            </Link>
            <div className="booking-title">
              <h1>Consultation Phone Call</h1>
              <p>30 minutes</p>
            </div>
            <div className="timezone-display">
              {isEditingTimezone ? (
                <div className="timezone-edit">
                  <select
                    value={timezone}
                    onChange={(e) => {
                      setTimezone(e.target.value)
                      setIsEditingTimezone(false)
                    }}
                    className="timezone-select"
                    autoFocus
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                  <button
                    className="timezone-cancel"
                    onClick={() => setIsEditingTimezone(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span>Your timezone: {timezone}</span>
                  <button
                    className="edit-timezone"
                    onClick={() => setIsEditingTimezone(true)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2"/>
                      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="booking-content">
        <div className="container">
          <div className="booking-card">
            {step === 1 && (
              <div className="step-content">
                <h2>Select a date</h2>
                <div className="date-picker">
                  {generateDates().map((date, index) => (
                    <button
                      key={index}
                      className={`date-option ${selectedDate === date.toDateString() ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedDate(date.toDateString())
                        setStep(2)
                      }}
                    >
                      <div className="date-day">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      <div className="date-full">{formatDate(date)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <h2>Select a time on {selectedDate && formatDate(new Date(selectedDate))}</h2>
                <div className="time-slots">
                  {Object.entries(timeSlots).map(([period, times]) => (
                    <div key={period} className="time-period">
                      <div className="period-icon">
                        {period === 'night' && <span>🌙</span>}
                        {period === 'morning' && <span>🌅</span>}
                        {period === 'afternoon' && <span>☀️</span>}
                        {period === 'evening' && <span>🌇</span>}
                      </div>
                      <h3 className="period-title">{period.charAt(0).toUpperCase() + period.slice(1)}</h3>
                      <div className="time-buttons">
                        {times.map((time) => (
                          <button
                            key={time}
                            className={`time-option ${selectedTime === time ? 'selected' : ''}`}
                            onClick={() => {
                              setSelectedTime(time)
                              setStep(3)
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step-content">
                <h2>You are booking: Consultation Phone Call</h2>
                <p className="booking-details">
                  {selectedDate && formatDate(new Date(selectedDate))} {selectedTime} - {selectedTime.replace(/(\d+):(\d+)/, (_match, hour, min) => {
                    const endHour = parseInt(hour) + (parseInt(min) + 30 >= 60 ? 1 : 0)
                    const endMin = (parseInt(min) + 30) % 60
                    return `${endHour}:${endMin.toString().padStart(2, '0')}`
                  })} {timezone}
                </p>
                
                <form className="booking-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={16} />
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={16} />
                      Phone*
                    </label>
                    <div className="phone-input">
                      <select className="country-code">
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter a phone number"
                        required
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">
                      <MapPin size={16} />
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={userDetails.address}
                      onChange={(e) => setUserDetails({...userDetails, address: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">
                      <MapPin size={16} />
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      value={userDetails.city}
                      onChange={(e) => setUserDetails({...userDetails, city: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">
                      <MapPin size={16} />
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      required
                      value={userDetails.state}
                      onChange={(e) => setUserDetails({...userDetails, state: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zip">
                      <MapPin size={16} />
                      Zip*
                    </label>
                    <input
                      type="text"
                      id="zip"
                      required
                      value={userDetails.zip}
                      onChange={(e) => setUserDetails({...userDetails, zip: e.target.value})}
                    />
                  </div>

                  {submitError && <p className="form-error-message">{submitError}</p>}
                  <button type="submit" className="book-button" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'BOOK THIS APPOINTMENT'}
                  </button>
                </form>
              </div>
            )}

            {step === 4 && (
              <div className="step-content confirmation">
                <div className="confirmation-icon">
                  <Check size={48} />
                </div>
                <h2>Appointment Booked Successfully!</h2>
                <p>Your consultation has been scheduled for:</p>
                <div className="confirmation-details">
                  <p><strong>Date:</strong> {selectedDate && formatDate(new Date(selectedDate))}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Duration:</strong> 30 minutes</p>
                  <p><strong>Type:</strong> Consultation Phone Call</p>
                </div>
                <p className="confirmation-message">
                  You will receive a confirmation email shortly with further details.
                </p>
                <div className="confirmation-actions">
                  <Link to="/specialties" className="btn btn-primary">
                    Back to Specialties
                  </Link>
                  <Link to="/" className="btn btn-outline">
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default BookAppointment
