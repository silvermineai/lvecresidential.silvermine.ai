export default function TechSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">High-Tech Protection</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          Enterprise-Grade Security Equipment
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=1200&h=800&q=80"
                className="h-80 object-cover object-left"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Smart Cameras</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">4K HD Video Surveillance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Crystal-clear video monitoring with night vision, motion detection, and AI-powered alerts. 
                  View your property from anywhere, anytime.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                className="h-80 object-cover object-left lg:object-right"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Control Panel</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Touchscreen Command Center</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Intuitive touchscreen control panel with backup cellular connection. Control your entire 
                  security system with ease.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1565636192335-e91d64e66426?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                className="h-80 object-cover object-left"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Door & Window Sensors</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Instant Intrusion Detection</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Know immediately when any door or window is opened with our advanced sensor technology.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                className="h-80 object-cover"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Motion Detectors</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Pet-Immune PIR Sensors</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Advanced motion detection that distinguishes between intruders and your pets.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                className="h-80 object-cover"
              />

              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">Smart Home Integration</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Works with Your Devices</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Seamlessly integrate with smart locks, lights, thermostats, and voice assistants.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}