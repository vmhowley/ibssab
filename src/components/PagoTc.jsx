import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import ChildModal from './ChildModal'
import { motion } from 'framer-motion'
import CurrencyInput from 'react-currency-input-field'
import { useAuth } from '../components/AuthProvider'
function PagoTc (props) {
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const tab = location.pathname
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  const [data, setData] = useState({
    tipo_trans: 'Pagotc',
    cod_afiliado: 1,
    tcact: '',
    moneda: '214',
    cvv2: '0',
    expd: '0',
    merty: '123',
    monto: '0',
    numero_ck: '0',
    forma_pago: '1',
    descripcion: 'Prueba de Parceo',
    Referencia: '20240216091401000000001',
    autorizacion: '',
    usuario: auth.user,
    success: '',
    errcod: '',
    errmsg: ''
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateValues(data))
    setSubmit(true)
  }
  const handleReverse = (e) => {
    e.preventDefault()
    location.pathname = '/tc_reverse'
  }

  const finishSubmit = (e) => {
    setOpen(true)
    console.log(data)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      setData({ ...data, cod_afiliado: '1' })
      finishSubmit()
    }
  }, [errors])

  //  Validacion de formulario

  const validateValues = (inputValues) => {
    const errors = {}
    if (inputValues.tcact.length === 0) {
      errors.tcact = 'Favor llenar campo'
    }
    if (inputValues.tcact.length < 19 && inputValues.tcact.length > 0) {
      errors.tcact = 'Numero de tcact invalido'
    }
    if (inputValues.monto.length === 0) {
      errors.monto = 'Favor llenar campo'
    }
    if (inputValues.autorizacion.length === 0 && tab === '/tc_reverse') {
      errors.autorizacion = 'Favor llenar campo'
    }
    return errors
  }

  function ccFormat (value) {
    if (Number.isInteger(value)) {
      return value.toString()
    }
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
          <ChildModal open={send} setOpen={setSend} data={data} setData={setData} send={send} setSend={setSend}/>
      {Object.keys(errors).length === 0 && submit
        ? (
          <Modal open={open} setOpen={setOpen} data={data} setData={setData} send={send} setSend={setSend}/>
          )
        : (
            null
          )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        className='bg-zinc-800 rounded-xl dark:text-white  shadow-md '
      >
        <form
        id='formu'
          onSubmit={handleSubmit}
          className='flex p-5 py-16'
        >
          <div className='grid  gap-y-5 text-sm justify-center  '>
            <div className='sm:col-span-1'>
              <div className='pb-2'>
                <h1 className='font-bold text-xl'>Pago de tarjeta</h1>
              </div>
              <div className='mt-2 grid gap-2 sm:col-span-2'>
                <label htmlFor='tcact' className='font-semibold'>
                  Numero de Tarjeta
                </label>
                <input
                  value={ccFormat(data.tcact)}
                  onChange={handleChange}
                  type='tel'
                  maxLength='19'
                  name='tcact'
                  id='tcact'
                  placeholder='xxxx xxxx xxxx xxxx'
                  autoComplete='tcact'
                  className='block w-96 rounded-md border-0 ring-1 py-2   shadow-sm placeholder:dark:text-white dark:bg-white/5 font-bold   sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500 transition ease-in-out delay-100  hover:translate-x-5 hover:scale-110 duration-300'>
                {errors.tcact}
              </p>
            </div>
            <div className='sm:col-span-3'>
              <div className='mt-2 grid gap-2'>
                <label htmlFor='Moneda' className='font-semibold'>
                  Moneda
                </label>
                <select
                  name='moneda'
                  id='moneda'
                  value={data.moneda ?? ''}
                  onChange={handleChange}
                  className='block w-96 rounded-md aria-checked:bg-red-700 border-0 py-2  shadow-sm   placeholder:dark:text-white dark:bg-white/5 font-bold   sm:text-sm sm:leading-6 ps-2 '
                >
                  <option value={214}>DOP</option>
                  <option value={840}>USD</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <div className='mt-2 grid gap-2 col-start-2'>
                <label htmlFor='monto' className='font-semibold'>
                  Monto
                </label>
                <CurrencyInput
                  prefix='$'
                  decimalSeparator='.'
                  groupSeparator=','
                  placeholder='$1,000'
                  value={data.monto ?? ''}
                  onValueChange={(value, name, values) =>
                    setData({ ...data, [name]: value })
                  }
                  id='monto'
                  name='monto'
                  type='text'
                  autoComplete='monto'
                  className='block w-96 rounded-md border-0 py-1.5  shadow-sm  placeholder:dark:text-white dark:bg-white/5 font-bold  sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500'>{errors.monto}</p>
            </div>
            <div
              className={`sm:col-span-3 ${
                tab === '/tc_reverse' ? 'hidden' : 'show'
              }`}
            >
              <div className=' grid col-span-2 '>
                <div className='mt-2 grid gap-2'>
                  <label htmlFor='forma_pago' className='font-semibold'>
                    Forma de pago
                  </label>
                  <select
                    name='forma_pago'
                    id='forma_pago'
                    value={data.forma_pago ?? '2'}
                    onChange={handleChange}
                    className='block w-96 rounded-md border-0 py-2   shadow-sm  placeholder:dark:text-white dark:bg-white/5 font-bold sm:text-sm sm:leading-6 ps-2'
                  >
                    <option value={1}>Efectivo</option>
                    <option value={2}>Cheque</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`col-span-3 transition-all duration-500 ease-in-out transform ${
                data.forma_pago === '2' && tab === '/tc_payment' ? 'show ' : 'hidden'
              }`}
            >
              <div className='mt-2 grid gap-2'>
                <label htmlFor='numero_ck' className='font-semibold'>
                  Numero de cheque
                </label>
                <input
                  value={data.numero_ck ?? ''}
                  onChange={handleChange}
                  type='tel'
                  name='numero_ck'
                  id='numero_ck'
                  autoComplete='numero-numero_ck'
                  className='block w-96 rounded-md border-0 py-1.5 shadow-sm placeholder:dark:text-white dark:bg-white/5 font-bold   sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500'>{errors.numero_ck}</p>
            </div>
            <div
              className={`col-span-3  ${tab === '/tc_reverse' ? 'show' : 'hidden'}`}
            >
              <div className='mt-2 grid gap-2'>
                <label htmlFor='autorizacion' className='font-semibold'>
                  Numero de autorización
                </label>
                <input
                  value={data.autorizacion ?? ''}
                  onChange={handleChange}
                  type='text'
                  name='autorizacion'
                  id='autorizacion'
                  autoComplete='autorizacion'
                  className='block w-96 rounded-md border-0 py-1.5 text-slate-600  shadow-sm  placeholder:dark:text-white dark:bg-white/5 font-bold  sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500'>{errors.autorizacion}</p>
            </div>
            <div className='grid justify-center gap-2  pt-5'>
            <button
              type='submit'
              value='submit'
              className='h-10 w-96 font-semibold rounded-xl p-4 place-content-center grid dark:bg-zinc-600 hover:bg-green-700'
            >
              {tab === '/tc_reverse' ? 'Reversar' : 'Pagar'}
            </button>
            <button 
            onClick={handleReverse}
            className='h-10 font-semibold rounded-xl p-4 place-content-center grid dark:bg-zinc-600 hover:bg-yellow-700'
            >Reversar 🔁</button>
          </div>
          </div>
          
        </form>
      </motion.div>
    </>
  )
}
export default PagoTc
