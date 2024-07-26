import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import ChildModal from './ChildModal'
import { motion } from 'framer-motion'
import CurrencyInput from 'react-currency-input-field'
import { useAuth } from '../components/AuthProvider'
function ReversoTc (props) {
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const [tab, setTab] = useState(location.pathname)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  const [data, setData] = useState({
    tipo_trans: 'ReversoPagotc',
    cod_afiliado: '1',
    tcact: '',
    moneda: '214',
    cvv2: '',
    expd: '0',
    merty: '123',
    monto: '0',
    numero_ck: '0',
    forma_reverso: '1',
    descripcion: ' ',
    Referencia: '0',
    autorizacion: '0',
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
        className='grid xl:h-full w-full justify-center'
      >
        <form
        id='formu'
          onSubmit={handleSubmit}
          className=' border w-96 shadow dark:bg-neutral-900 p-10 rounded-xl dark:text-white'
        >
          {Object.keys(errors).length === 0 && submit ? '' : ''}
          <div className='sm:grid sm:grid-cols-2 grid grid-flow-cols gap-x-6 gap-y-8 text-sm  items-center'>
            <div className='sm:col-span-3'>
              <div className='pb-2'>
                <h1 className='font-bold text-xl'>Reverso de tarjeta</h1>
              </div>
              <div className='mt-2 '>
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
                  className='block w-full rounded-md ring-1 ring-blue-600 focus:ring-2 focus:ring-blue-600  py-1.5 text-slate-600  shadow-sm  placeholder:text-gray-500 font-bold  sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500 transition ease-in-out delay-100  hover:translate-x-5 hover:scale-110 duration-300'>
                {errors.tcact}
              </p>
            </div>
            <div className='sm:col-span-3'>
              <div className='mt-2'>
                <label htmlFor='Moneda' className='font-semibold'>
                  Moneda
                </label>
                <select
                  name='moneda'
                  id='moneda'
                  value={data.moneda ?? ''}
                  onChange={handleChange}
                  className='block w-full rounded-md aria-checked:bg-red-700 border-0 py-2 text-slate-600  shadow-sm   placeholder:text-gray-500 font-bold   sm:text-sm sm:leading-6 ps-2 '
                >
                  <option value={214}>DOP</option>
                  <option value={840}>USD</option>
                </select>
              </div>
            </div>
            <div className='sm:col-span-3'>
              <div className='mt-2 col-start-2'>
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
                  className='block w-full rounded-md border-0 py-1.5 text-slate-600  shadow-sm  placeholder:text-gray-500 font-bold  sm:text-sm sm:leading-6 ps-3'
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
                <div className='mt-2'>
                  <label htmlFor='forma_reverso' className='font-semibold'>
                    Forma de reverso
                  </label>
                  <select
                    name='forma_reverso'
                    id='forma_reverso'
                    value={data.forma_reverso ?? '2'}
                    onChange={handleChange}
                    className='block w-full rounded-md border-0 py-2 text-slate-600  shadow-sm  placeholder:text-gray-500 font-bold sm:text-sm sm:leading-6 ps-2'
                  >
                    <option value={1}>Efectivo</option>
                    <option value={2}>Cheque</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              className={`col-span-3 transition-all duration-500 ease-in-out transform ${
                data.forma_reverso === '2' && tab === '/tc_payment' ? 'show ' : 'hidden'
              }`}
            >
              <div className='mt-2'>
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
                  className='block w-full rounded-md border-0 py-1.5 text-slate-600  shadow-sm placeholder:text-gray-500 font-bold   sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500'>{errors.numero_ck}</p>
            </div>
            <div
              className={`col-span-3  ${tab === '/tc_reverse' ? 'show' : 'hidden'}`}
            >
              <div className='mt-2'>
                <label htmlFor='autorizacion' className='font-semibold'>
                  Numero de Referencia
                </label>
                <input
                  value={data.autorizacion ?? ''}
                  onChange={handleChange}
                  type='text'
                  name='referencia'
                  id='referencia'
                  autoComplete='autorizacion'
                  className='block w-full rounded-md border-0 py-1.5 text-slate-600  shadow-sm  placeholder:text-gray-500 font-bold  sm:text-sm sm:leading-6 ps-3'
                />
              </div>
              <p className='text-red-500'>{errors.autorizacion}</p>
            </div>
          </div>
          <div className='w-full flex justify-center pt-6'></div>{' '}
          <div className='w-full flex justify-center'>
            <button
              type='submit'
              value='submit'
              className='h-10 font-semibold rounded-xl p-4 flex items-center dark:bg-blue-600'
            >
              {tab === '/tc_reverse' ? 'Reversar' : 'Pagar 💳'}
            </button>
          </div>
          <div className={`fixed bottom-32 bg-yellow-400/20 font-bold  opacity-15 hover:opacity-100 transition-opacity duration-300 ml-52  w-max p-2 rounded-lg  ${location.pathname === '/tc_reverse' ? 'hidden' : 'show'}`}>
            <button onClick={handleReverse}>Reversar 🔁</button>
          </div>
        </form>
      </motion.div>
    </>
  )
}
export default ReversoTc
