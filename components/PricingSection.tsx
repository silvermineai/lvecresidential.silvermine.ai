'use client'

import { CheckIcon } from '@heroicons/react/20/solid'

interface PricingProps {
  onBuyNowClick: () => void
}

const tiers = [
  {
    name: 'Month-to-Month',
    id: 'tier-monthly',
    href: '#',
    priceMonthly: '$55',
    installationFee: '$3,000',
    description: "Full flexibility with no long-term commitment. Cancel anytime.",
    features: [
      '24/7 Professional Monitoring',
      'Enterprise-grade equipment',
      'Mobile app control',
      'Cancel anytime',
      'Professional installation',
      'Lifetime equipment warranty'
    ],
    featured: false,
  },
  {
    name: '3-Year Savings Plan',
    id: 'tier-threeyear',
    href: '#',
    priceMonthly: '$55',
    installationFee: '$1,000',
    savings: 'Save $2,000',
    description: 'Best value with reduced installation cost. Month-to-month after 3 years.',
    features: [
      'Everything in Month-to-Month, plus:',
      'Save $2,000 on installation',
      '3-year price lock guarantee',
      'Priority customer support',
      'Free equipment upgrades',
      'Month-to-month after 3 years',
    ],
    featured: true,
  },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection({ onBuyNowClick }: PricingProps) {
  return (
    <div id="pricing" className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose Your Protection Plan
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Transparent pricing with no hidden fees. Equipment at cost, professional monitoring, and no door-to-door sales markup.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            {tier.savings && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-green-500 px-4 py-1 text-sm font-semibold text-white">
                  {tier.savings}
                </span>
              </div>
            )}
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex flex-col gap-y-2">
              <span className="text-sm text-gray-500">Installation:</span>
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-3xl font-semibold tracking-tight',
                )}
              >
                {tier.installationFee}
              </span>
              <span className="text-sm text-gray-500 mt-4">Monthly monitoring:</span>
              <span className="flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-900',
                    'text-5xl font-semibold tracking-tight',
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
              </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={onBuyNowClick}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}