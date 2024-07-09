import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Warning } from 'phosphor-react'
import axios from 'axios'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CryptoJS from 'crypto-js'
export default function Modal ({ open, setOpen, data, setData, send, setSend }) {
  const cancelButtonRef = useRef(null)
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const errorToast = (e) => {
    toast.error(e)
    setTimeout(reset, 3200)
  }

  function reset () {
    window.location.reload(true)
  }

  const fetchDat = async () => {

    const url = 'http://192.168.1.220:5731/subagent/pagotc'
    const headers = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    try {
      const result = await axios.post(
        url,
        data,
        { timeout: 5000 },
        headers)

      if (result) {
        setData(result.data)
        if (result.data.success !== true) {
          errorToast(result.data.errmsg)
        } else {
          setSend(true)
        }
      }
    } catch (error) {
      errorToast(error.message)
      console.log(error)
    }
  }

  const handleModal = (e) => {
    if (e === 'send') {
      setOpen(false)
      fetchDat()
    } else {
      setSend(false)
      setOpen(false)
    }
  }

  return (
    <>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover={false}
theme="dark"
transition: Bounce
/>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="dark:bg-neutral-800 dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start ">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Warning className="h-6 w-6 text-orange-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 ">
                      ATENCIÓN!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm">
                          Esta a punto de realizar una transacción irreversible,
                          seguro que desea realizar esta transacción?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dark:bg-[#202326] bg-gray-50 px-4 py-3 sm:flex gap-2 sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={(e) => handleModal('send')}
                  >
                    Acepto
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={(e) => handleModal('close')}
                    ref={cancelButtonRef}
                    >
                    Editar o cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
</>
  )
}
