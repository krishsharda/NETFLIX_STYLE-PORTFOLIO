import React from 'react'

export default function Section({
  id,
  title,
  subtitle,
  bgClassName,
  overlayClassName,
  children,
}: {
  id?: string
  title?: string
  subtitle?: string
  bgClassName?: string
  overlayClassName?: string
  children?: React.ReactNode
}) {
  return (
    <section id={id} className={`py-12 ${bgClassName || ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative ${overlayClassName || ''} p-6 rounded-2xl`}>
          {title && <h2 className="text-2xl font-bold text-white">{title}</h2>}
          {subtitle && <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  )
}
