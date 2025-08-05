'use client'

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    plan: '3-year',
    signature: '',
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your installation.')
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="w-full">
                    <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                      Complete Your Security System Order
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Installation Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                        <div className="col-span-2 sm:col-span-1">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            required
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zip"
                            id="zip"
                            required
                            value={formData.zip}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
                          Select Your Plan
                        </label>
                        <select
                          name="plan"
                          id="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value="3-year">3-Year Savings Plan ($1,000 installation + $55/month)</option>
                          <option value="monthly">Month-to-Month ($3,000 installation + $55/month)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
                          Electronic Signature
                        </label>
                        <input
                          type="text"
                          name="signature"
                          id="signature"
                          required
                          placeholder="Type your full name"
                          value={formData.signature}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="flex items-start">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          required
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
                          I agree to the{' '}
                          <a href="#" className="text-indigo-600 hover:text-indigo-500">
                            terms and conditions
                          </a>{' '}
                          and authorize LVEC Residential to contact me to schedule installation.
                        </label>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-x-3">
                        <button
                          type="button"
                          className="text-sm font-semibold text-gray-900"
                          onClick={onClose}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Complete Order
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}