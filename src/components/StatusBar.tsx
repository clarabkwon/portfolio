import { useEffect, useState } from 'react'

interface StatusBarProps {
  location?: string
  status?: string
}

export function StatusBar({
  location = '/ROOT/PROJECT_SEEDS/',
  status = 'EXPLORING',
}: StatusBarProps) {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-sage text-bg-cream px-4 py-1 flex justify-between text-xs font-bold border-t-4 border-sage font-mono">
      <div className="flex gap-4">
        <span>STATUS: {status}</span>
        <span className="hidden sm:inline text-peri-light">|</span>
        <span className="hidden sm:inline">LOC: {location}</span>
      </div>
      <div>
        SYS_TIME: <span className="text-peri-light">{time}</span>
      </div>
    </div>
  )
}
