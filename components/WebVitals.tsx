'use client'

import { useEffect } from 'react'
import { sendGAEvent } from './GoogleAnalytics'

export function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      try {
        interface WebVitalMetric {
          name: string
          value: number
          rating: string
          delta: number
          id: string
          navigationType: string
        }

        const reportWebVital = (metric: WebVitalMetric) => {
          const body = {
            name: metric.name,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType,
          }

          // Send to Google Analytics
          sendGAEvent(metric.name, 'Web Vitals', metric.rating, Math.round(metric.value))

          // Log to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log('[Web Vital]', body)
          }

          // You could also send to your own analytics endpoint
          // fetch('/api/web-vitals', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(body),
          // })
        }

        // Import web-vitals library dynamically
        import('web-vitals').then(({ onCLS, onINP, onLCP, onFCP, onTTFB }) => {
          onCLS(reportWebVital)
          onINP(reportWebVital)
          onLCP(reportWebVital)
          onFCP(reportWebVital)
          onTTFB(reportWebVital)
        })
      } catch (error) {
        console.error('Failed to load web-vitals:', error)
      }
    }
  }, [])

  return null
}

export default WebVitals