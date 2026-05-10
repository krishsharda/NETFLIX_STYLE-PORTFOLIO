import { CONTACT } from '../constants'

const contactItems = [
  {
    type: 'email',
    label: 'Email',
    value: CONTACT.email,
    icon: '✉',
    href: `mailto:${CONTACT.email}`,
    color: 'from-brand-500/20 to-brand-500/5',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: CONTACT.phone,
    icon: '📱',
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    type: 'location',
    label: 'Location',
    value: CONTACT.location,
    icon: '📍',
    href: '#',
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: CONTACT.linkedin,
    icon: '💼',
    href: `https://${CONTACT.linkedin}`,
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    type: 'github',
    label: 'GitHub',
    value: CONTACT.github,
    icon: '⚙',
    href: `https://${CONTACT.github}`,
    color: 'from-purple-500/20 to-purple-500/5',
  },
]

export default function Contact() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.type}
            href={item.href}
            target={item.type !== 'location' && item.type !== 'email' && item.type !== 'phone' ? '_blank' : undefined}
            rel={item.type !== 'location' && item.type !== 'email' && item.type !== 'phone' ? 'noopener noreferrer' : undefined}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/20`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 transition-all duration-300 group-hover:from-brand-500/10 group-hover:to-brand-500/5" />

            <div className="relative z-10">
              {/* Icon and Label */}
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-brand-500 transition-colors">
                  {item.label}
                </span>
              </div>

              {/* Value */}
              <p className="text-sm font-medium text-neutral-300 break-all group-hover:text-white transition-colors line-clamp-2">
                {item.value}
              </p>

              {/* Click indicator */}
              <div className="mt-3 inline-block text-xs text-neutral-500 group-hover:text-brand-500 transition-colors">
                {item.type === 'location' ? 'View' : 'Click to connect'} →
              </div>
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl border border-brand-500/0 transition-all duration-300 group-hover:border-brand-500/30" />
          </a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-sm text-center">
        <p className="text-sm text-neutral-400 mb-3">Feel free to reach out through any of the channels above!</p>
        <p className="text-xs text-neutral-500">I typically respond within 24 hours</p>
      </div>
    </div>
  )
}
