import React, { useId, useState } from 'react'
import { Calculator, ArrowRight, Info } from 'lucide-react'
import { prefillLead } from '../utils/leadEvents'
import { trackEvent } from '../analytics'
import '../styles/lead.css'

const usd = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

interface SliderProps {
  label: string
  hint: string
  value: number
  min: number
  max: number
  step: number
  format: (n: number) => string
  onChange: (n: number) => void
}

const Slider: React.FC<SliderProps> = ({ label, hint, value, min, max, step, format, onChange }) => {
  const id = useId()
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="calc-field">
      <div className="calc-label">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{format(value)}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--calc-pct': `${pct}%` } as React.CSSProperties}
      />
      <p className="calc-hint">{hint}</p>
    </div>
  )
}

/**
 * Interactive estimate of revenue lost to unrecovered denials. Every input is
 * the visitor's own number; the defaults are only starting points and the
 * formula is shown in full, so the result is never presented as a promise.
 */
const RevenueLeakCalculator: React.FC = () => {
  const [collections, setCollections] = useState(100000)
  const [denialRate, setDenialRate] = useState(10)
  const [unrecovered, setUnrecovered] = useState(40)
  const [target, setTarget] = useState(5)
  const [touched, setTouched] = useState(false)

  const touch = <T,>(fn: (v: T) => void) => (v: T) => {
    if (!touched) {
      setTouched(true)
      trackEvent('calculator_used', { page_path: location.pathname })
    }
    fn(v)
  }

  const monthlyLost = collections * (denialRate / 100) * (unrecovered / 100)
  const annualLost = monthlyLost * 12
  const effectiveTarget = Math.min(target, denialRate)
  const annualGain = collections * ((denialRate - effectiveTarget) / 100) * (unrecovered / 100) * 12

  const sendToForm = () => {
    trackEvent('calculator_cta', { page_path: location.pathname })
    prefillLead(
      `Calculator estimate: ${usd(collections)}/month collections, ${denialRate}% denial rate, ` +
        `${unrecovered}% of denied dollars not recovered, about ${usd(annualLost)}/year at risk. ` +
        'Please review our real numbers.'
    )
  }

  return (
    <section className="calc" aria-labelledby="calc-title">
      <div className="calc-head">
        <span className="calc-icon"><Calculator size={22} aria-hidden="true" /></span>
        <div>
          <h2 id="calc-title">How much revenue are denials costing you?</h2>
          <p>Move the sliders to match your practice. Nothing is sent until you choose to.</p>
        </div>
      </div>
      <div className="calc-grid">
        <div className="calc-inputs">
          <Slider label="Monthly collections" hint="What your practice collects in a typical month." value={collections} min={10000} max={1000000} step={5000} format={usd} onChange={touch(setCollections)} />
          <Slider label="Claim denial rate" hint="Share of claims denied on first submission. Check your clearinghouse or PM reports." value={denialRate} min={1} max={30} step={1} format={(n) => `${n}%`} onChange={touch(setDenialRate)} />
          <Slider label="Denied dollars never recovered" hint="Denials that are written off or never reworked before the filing limit." value={unrecovered} min={0} max={100} step={5} format={(n) => `${n}%`} onChange={touch(setUnrecovered)} />
          <Slider label="Target denial rate" hint="The rate you would like to reach with cleaner front-end and coding work." value={target} min={1} max={20} step={1} format={(n) => `${n}%`} onChange={touch(setTarget)} />
        </div>
        <div className="calc-result" aria-live="polite">
          <p className="calc-result-label">Estimated revenue lost to denials</p>
          <p className="calc-big">{usd(annualLost)}<span>/year</span></p>
          <p className="calc-sub">{usd(monthlyLost)} per month</p>
          <div className="calc-gain">
            <p>Reaching a {effectiveTarget}% denial rate would keep about</p>
            <strong>{usd(annualGain)}<span>/year</span></strong>
          </div>
          <button type="button" className="calc-cta" onClick={sendToForm}>
            Check my real numbers for free <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="calc-note">
            <Info size={14} aria-hidden="true" /> Estimate only: monthly collections × denial rate × share not recovered × 12.
            Your actual figures depend on payer mix and specialty.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RevenueLeakCalculator
