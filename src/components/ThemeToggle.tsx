import { useEffect, useState } from 'react'

const storageKey = 'site-theme'

function readInitialTheme(): 'dark' | 'light' {
  try {
    const stored = localStorage.getItem(storageKey)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}

  // fallback to user's OS preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => readInitialTheme())

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, theme)
    } catch {}
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={toggle}
      className="theme-toggle"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
