import { BanknotesIcon, ShieldCheckIcon, HomeIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Ditch the door-to-door sales markup.',
    description:
      'No pushy salespeople, no inflated commissions. We pass the savings directly to you with transparent, honest pricing.',
    icon: BanknotesIcon,
  },
  {
    name: 'Get peace of mind and lower insurance costs.',
    description: 'Professional monitoring 24/7 protects your family and can qualify you for homeowner insurance discounts.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Protect what matters: your Home.',
    description: 'Enterprise-grade security technology adapted for residential use. The same systems that protect businesses now protect your family.',
    icon: HomeIcon,
  },
]

export default function WhySection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Save Money</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Why Choose LVEC Residential?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                We believe in transparent pricing and professional service. By cutting out expensive sales commissions, 
                we pass those savings directly to you while providing enterprise-level security for your home.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="Security monitoring dashboard"
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&h=1442&q=80"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-228 max-w-none rounded-tl-xl bg-gray-800 ring ring-white/10"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}