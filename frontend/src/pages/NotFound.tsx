import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'

const NotFound: React.FC = () => (
  <>
    <PageTitle
      title="Page Not Found | Alpha Medi Assist"
      description="The page you are looking for could not be found."
      noindex
    />
    <section className="section">
      <div className="container">
        <div className="card text-center" style={{ padding: '3rem 2rem', maxWidth: 720, margin: '0 auto' }}>
          <h1>Page Not Found</h1>
          <p>The page you are looking for may have moved. Try one of these instead:</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/services" className="btn btn-outline">Services</Link>
            <Link to="/medical-billing-specialities" className="btn btn-outline">Specialties</Link>
            <Link to="/contact" className="btn btn-outline">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default NotFound
