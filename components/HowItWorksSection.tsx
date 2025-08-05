import { ClipboardDocumentCheckIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Sign and Book an Appointment',
    description: 'Fill out our simple online form and schedule your professional installation at a time that works for you.',
    icon: ClipboardDocumentCheckIcon,
    number: '1',
  },
  {
    name: 'We Install High-End Equipment at Cost',
    description: 'Our certified technicians install enterprise-grade security equipment with no markup - you only pay what we pay.',
    icon: WrenchScrewdriverIcon,
    number: '2',
  },
  {
    name: 'Enjoy Month-to-Month Monitoring + High-End Tech',
    description: 'After your commitment period, continue with flexible month-to-month monitoring. No long-term contracts required.',
    icon: ShieldCheckIcon,
    number: '3',
  },
]

export default function HowItWorksSection() {
  return (
    <div id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Simple Process</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            How It Works
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Getting started with LVEC Residential is easy. Our streamlined process gets you protected quickly without the hassle.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <div className="flex items-center gap-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white font-semibold text-lg">
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                </div>
                <dt className="mt-4 flex items-center gap-x-3 text-lg font-semibold text-gray-900">
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}