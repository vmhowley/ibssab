import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useReactToPrint } from 'react-to-print'

export default function Modal ({ open, setOpen, data, setData, send, setSend }) {
  const cancelButtonRef = useRef(null)
  const componentRef = useRef()

  const handleModal = (e) => {
    if (e === 'print') {
      setSend(true)
      setOpen(false)
      alert('printed')
      window.location.reload(true)
    } else {
      setSend(false)
      setOpen(false)
      window.location.reload(true)
    }
  }
  const tc = data.tcact
  const substr = JSON.stringify(tc).substring(12)

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'DOP'
  })
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Datos para imprimir',
    onAfterPrint: () => handleModal('print')
  })
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
<div ref={componentRef} id="hs-ai-modal" className="hs-overlay  size-full fixed top-28 start-0 z-[80]  overflow-y-auto pointer-events-none">
    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto dark:bg-neutral-800">
        <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl dark:bg-neutral-950">
          {/* Close Button */}
          <div className="absolute top-2 end-2">
            <button type="button" onClick={(e) => handleModal('close')} className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm dark:text-neutral-500 dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards" data-hs-remove-element="#hs-ai-modal">
              <span className="sr-only">Close</span>
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          {/* End Close Button */}
          {/* SVG Background Element */}
          <figure className="absolute inset-x-0 bottom-0 -mb-px">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
              <path fill="currentColor" className="fill-white dark:fill-neutral-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
            </svg>
          </figure>
          {/* End SVG Background Element */}
        </div>
        <div className="relative z-10 -mt-12">
          {/* Icon */}
          <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
            <svg className="flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
          {/* End Icon */}
        </div>
        {/* Body */}
        <div className="p-4 sm:p-7 overflow-y-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Recibo de pago
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              Autorizacion #{data.autorizacion}
            </p>
          </div>
          {/* Grid */}
          <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div>
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">Monto:</span>
              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">{USDollar.format(data.monto)}</span>
            </div>
            {/* End Col */}
            <div>
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">Date paid:</span>
              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">April 22, 2020</span>
            </div>
            {/* End Col */}
            <div>
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">Payment method:</span>
              <div className="flex items-center gap-x-2">
                <svg className="size-5" width={400} height={248} viewBox="0 0 400 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                    <path d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z" fill="#EB001B" />
                    <path d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z" fill="#F79E1B" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={400} height="247.2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">●●●● {substr}</span>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-10">
            <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">Summary</h4>
            <ul className="mt-3 flex flex-col">
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Payment to Front</span>
                  <span>$264.00</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Moneda</span>
                  <span>{data.moneda}</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Amount paid</span>
                  <span>$316.8</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Button */}
          <div className="mt-5 flex justify-end gap-x-2">
            {/* <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1={12} x2={12} y1={15} y2={3} /></svg>
              Invoice PDF
            </a> */}
            <a onClick={handlePrint} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width={12} height={8} x={6} y={14} /></svg>
              Print
            </a>
          </div>
          {/* End Buttons */}
          <div className="mt-5 sm:mt-10">
            <p className="text-sm text-gray-500 dark:text-neutral-500">If you have any questions, please contact us at <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">example@site.com</a> or call at <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="tel:+1898345492">+1 898-34-5492</a></p>
          </div>
        </div>
        {/* End Body */}
      </div>
    </div>
  </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
