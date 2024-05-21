import React, { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import { motion } from 'framer-motion'
function CompraRetiro () {
  const [open, setOpen] = useState(false)
  const initialValue = {
    tcact: '',
    moneda: '214',
    monto: '',
    forma_pago: '1',
    cheque: '',
    autorizacion: ''
  }
  const [data, setData] = useState(initialValue)
  const [tab, setTab] = useState('compra')
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(data))
    setSubmit(true)
  }
  const finishSubmit = () => {
    console.log(data)
    setOpen(true)
  }

  useEffect(() => {
    console.log(errors)
    if (Object.keys(errors).length === 0 && submit) {
      finishSubmit()
    }
  }, [errors])

  const validateValues = (inputValues) => {
    const errors = {}
    if (inputValues.tcact.length === 0) {
      errors.tcact = 'Favor llenar campo'
    }
    if (inputValues.tcact.length < 19 && inputValues.tcact.length > 0) {
      errors.tcact = 'Numero de tarjeta invalido'
    }
    if (inputValues.monto.length === 0) {
      errors.monto = 'Favor llenar campo'
    }
    if (inputValues.forma_pago === '2' && inputValues.cheque.length === 0 && tab === 'pago') {
      errors.cheque = 'Favor llenar campo'
    }
    if (inputValues.autorizacion.length === 0 && tab === 'reverso') {
      errors.autorizacion = 'Favor llenar campo'
    }
    return errors
  }

  function ccFormat (value) {
    const v = value
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .substr(0, 16)
    const parts = []
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4))
    }

    return parts.length > 1 ? parts.join(' ') : value
  }

  return (
    <>
    {Object.keys(errors).length === 0 && submit ? <Modal open={open} setOpen={setOpen} data={data} setData={setData} /> : '' }
      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    exit={{ opacity: 0 }}
      className="grid h-max justify-center p-8 xl:pl-36 xl:pr-36 ">
        <form
        onSubmit={handleSubmit}
          className="w-max h-max border  shadow dark:bg-[#333b44] p-10 rounded-md "
        >
          {Object.keys(errors).length === 0 && submit ? 'Formulario enviado' : '' }
          <div className="mt-10 sm:grid sm:grid-cols-2 grid grid-flow-cols gap-x-6 gap-y-8 text-sm text-slate-600 ">
            <div className="sm:col-span-1">
              <div className="mt-2 ">
              <label htmlFor="" className="font-semibold">Numero de tarjeta</label>
                <input
                  value={ccFormat(data.tcact)}
                  onChange={handleChange}
                  type="tel"
                  maxLength="19"
                  name="tcact"
                  id="tcact"
                  placeholder="xxxx xxxx xxxx xxxx"
                  autoComplete="tcact"
                  className="block w-full rounded-md  py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
              <p className='text-red-500'>{errors.tcact}</p>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
              <label htmlFor="" className="font-semibold">Moneda</label>
                <select name="moneda" id="moneda" value={data.moneda ?? ''} onChange={handleChange} className="block w-full aria-checked:bg-red-700 border-0 py-2 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-2 ">
                  <option value={214}>DOP</option>
                  <option value={840}>USD</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <div className="mt-2">
                <label htmlFor="" className="font-semibold">Monto</label>
                <input
                  value={data.monto ?? ''}
                  onChange={handleChange}
                  id="monto"
                  name="monto"
                  type="monto"
                  autoComplete="monto"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
              <p className='text-red-500'>{errors.monto}</p>
            </div>
            <div className={`sm:col-span-1 ${tab === 'reverso' ? 'hidden' : 'show'}`}>
              <div className="mt-2 grid ">
                <label htmlFor="" className="font-semibold">Forma de pago</label>
                <select name="forma_pago" id="forma_pago" value={data.forma_pago ?? ''} onChange={handleChange} className="block w-full rounded-md border-0 py-2 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-2">
                  <option value={1}>Efectivo</option>
                  <option value={2}>Cheque</option>
                </select>
              </div>
            </div>
            <div className={`col-span-1 transition-all duration-500 ease-in-out transform ${data.forma_pago === '2' && tab === 'pago' ? 'show ' : 'hidden'}`}>
              <div className="mt-2">
                <label htmlFor="cheque" className='font-semibold'>Numero de cheque</label>
                <input
                  value={data.cheque ?? ''}
                  onChange={handleChange}
                  type="tel"
                  name="cheque"
                  id="cheque"
                  autoComplete="numero-cheque"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
              <p className='text-red-500'>{errors.cheque}</p>
            </div>
            <div className={`col-span-1  ${tab === 'reverso' ? 'show' : 'hidden'}`}>
              <div className="mt-2">
              <label htmlFor="" className="font-semibold">Numero de autorizacion</label>

                <input
                  value={data.autorizacion ?? ''}
                  onChange={handleChange}
                  type="text"
                  name="autorizacion"
                  id="autorizacion"
                  autoComplete="autorizacion"
                  className="block w-full rounded-md border-0 py-1.5 text-slate-600 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ps-3"
                />
              </div>
              <p className='text-red-500'>{errors.autorizacion}</p>
            </div>
          </div>
          <div className="w-full flex justify-center pt-6">
          </div>{' '}
          <div className='w-full flex justify-center'>
          <button type="submit" value="submit" className={`h-10 font-semibold rounded-xl p-4 flex items-center hover:text-red-500 ${Object.keys(errors).length === 0 && submit ? 'text-green-500 w-max p-2 rounded-full mt-4 bg-green-300/20 ' : 'bg-red-300/20 text-red-500'}>`}>{Object.keys(errors).length === 0 && submit ? 'Formulario enviado ✔' : 'Agregar' }
</button>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default CompraRetiro
