'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface CounterNumberProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export default function CounterNumber({
  end,
  suffix = '',
  prefix = '',
  duration = 2.5,
  decimals = 0,
}: CounterNumberProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <span ref={ref} className="stat-number">
      {prefix}
      {inView ? (
        <CountUp end={end} duration={duration} decimals={decimals} />
      ) : (
        '0'
      )}
      {suffix}
    </span>
  )
}
