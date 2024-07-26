import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import ChildModal from './ChildModal'
import { motion } from 'framer-motion'
import CurrencyInput from 'react-currency-input-field'
import { useAuth } from './AuthProvider'
import { Button } from '@mui/material'
import DrFlag from '../assets/images/dr-flag.png'
function PagoTc(props) {
  const auth = useAuth()
  const [moned, setMoned] = useState('')
  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const tab = location.pathname
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)
  const [monedDesc, setMonedDesc] = useState('DOP')

  const [data, setData] = useState({
    // No enviar valor en blanco siempre inicializar el campo con valor = 0
    tipo_trans: 'Pagotc',
    cod_afiliado: '1',
    tcact: '',
    moneda: '214',
    cvv2: '0',
    expd: '0',
    merty: '123',
    monto: '',
    numero_ck: '0',
    forma_pago: '1',
    descripcion: '0',
    Referencia: '1252354125',
    autorizacion: '0',
    usuario: auth.user,
    success: '',
    errcod: '',
    errmsg: '',
  })

  const flags = {
    DOP: <img src={DrFlag} alt='' className='w-4 mr-2' />,
    USD: (
      <svg
        aria-hidden='true'
        className='h-3 me-2'
        viewBox='0 0 15 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='0.5' width='14' height='12' rx='2' fill='white' />
        <g mask='url(#mask0_12694_49953)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z'
            fill='#D02F44'
          />
          <rect x='0.5' width='6' height='5.6' fill='#46467F' />
          <g filter='url(#filter0_d_12694_49953)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z'
              fill='url(#paint0_linear_12694_49953)'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_12694_49953'
            x='1.1665'
            y='0.800049'
            width='4.6665'
            height='5'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_12694_49953'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_12694_49953'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_12694_49953'
            x1='1.1665'
            y1='0.800049'
            x2='1.1665'
            y2='4.80005'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='1' stopColor='#F0F0F0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    EUR: '',
  }

  const [country, setCountry] = useState(flags.DOP)

  const handleMoned = (e) => {
    setMonedDesc(e.target.id)
    if (monedDesc === 'USD') {
      setCountry(flags.USD)
    } else {
      if (e.target.id === 'DOP') {
        setCountry(flags.DOP)
      }
      setData({ ...data, [e.target.name]: e.target.value })
    }
    setMoned(false)
  }

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
      errors.tcact = 'Digite el numero de Tarjeta'
    }
    if (inputValues.tcact.length < 19 && inputValues.tcact.length > 0) {
      errors.tcact = 'Numero de tarjeta incorrecto'
    }
    if (inputValues.monto.length < 2) {
      errors.monto = 'Digite el Monto de la transacción'
    }
    if (inputValues.autorizacion.length === 0 && tab === '/tc_reverse') {
      errors.autorizacion = 'Favor llenar campo'
    }
    return errors
  }

  function ccFormat(value) {
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
      <ChildModal
        open={send}
        setOpen={setSend}
        data={data}
        setData={setData}
        send={send}
        setSend={setSend}
        monedDesc={monedDesc}
        setMonedDesc={setMonedDesc}
      />
      {Object.keys(errors).length === 0 && submit ? (
        <Modal
          open={open}
          setOpen={setOpen}
          data={data}
          setData={setData}
          send={send}
          setSend={setSend}
        />
      ) : null}
      <motion.div
        animate={{ x: 100, scale: 1 }}
        className='dark:bg-zinc-800 bg-gray-100/70 border rounded-xl dark:text-white  shadow-md relative right-24 '
      >
        <form id='formu' onSubmit={handleSubmit} className='flex p-10'>
          <div className='grid  gap-y-8 text-sm  sm:col-span-1  '>
          <div className=''>
          <h1 className='font-semibold  text-xl'>Pago de Tarjeta</h1>
          </div>
          <div className='mt-2 grid gap-2 '>
              <label htmlFor='tcact' className='font-semibold'>
                Numero de Tarjeta
              </label>
              <input
                onError={(e) => {
                  ccFormat(e.target.value)
                }}
                value={ccFormat(data.tcact)}
                onChange={handleChange}
                type='tel'
                maxLength='19'
                name='tcact'
                id='tcact'
                placeholder='xxxx xxxx xxxx xxxx'
                autoComplete='tcact'
                className='block w-96 rounded-md border-0 ring-1 py-2  text-sm tracking-wider  shadow-sm placeholder:dark:text-white dark:bg-white/5 sm:leading-6 ps-3'
              />
            </div>
                  {errors.tcact ? <p className='text-red-500 animate-shake'>
                    {errors.tcact} </p> : null}
            <div className='sm:col-span-1 '>
              
              <div className='mt-2 grid gap-2 '>
                <label htmlFor='moneda' className='font-semibold'>
                  Moneda
                </label>
                <button
                  id='moneda'
                  onClick={() => {
                    !moned ? setMoned(true) : setMoned(false)
                  }}
                  data-dropdown-toggle='dropdown-states'
                  className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-5  text-sm tracking-wider text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
                  type='button'
                >
                  <div className=' w-full flex justify-between items-center'>
                    <div className='flex items-center'>
                      {country} {monedDesc}
                    </div>
                    <svg
                      className='w-2.5 h-2.5 relative'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m1 1 4 4 4-4'
                      />
                    </svg>
                  </div>
                </button>

                <div
                  id='moneda'
                  className={`z-10 relative  bg-white divide-y divide-gray-100 transition ease-in-out delay-150 rounded-lg shadow  dark:bg-gray-700 ${
                    moned ? 'show' : 'hidden'
                  }`}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-200'
                    aria-labelledby='states-button'
                  >
                    <li>
                      <button
                        type='button'
                        onClick={handleMoned}
                        name='moneda'
                        id='DOP'
                        value={'214'}
                        className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        <div className='inline-flex items-center'>
                          <img src={DrFlag} alt='' className='w-4 mr-2' />
                          DOP
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        onClick={handleMoned}
                        name='moneda'
                        id='USD'
                        value={'840'}
                        className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        <div className='inline-flex items-center'>
                          {flags.USD}
                          USD
                        </div>
                      </button>
                    </li>
                    <li>
                      <button
                        type='button'
                        onClick={handleMoned}
                        name='moneda'
                        id='EUR'
                        value={'978'}
                        className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        <div className='inline-flex items-center'>
                          <svg
                            aria-hidden='true'
                            className='h-3.5 w-3.5 rounded-full me-2'
                            xmlns='http://www.w3.org/2000/svg'
                            id='flag-icon-css-it'
                            viewBox='0 0 512 512'
                          >
                            <g fillRule='evenodd' strokeWidth='1pt'>
                              <path fill='#fff' d='M0 0h512v512H0z' />
                              <path fill='#009246' d='M0 0h170.7v512H0z' />
                              <path
                                fill='#ce2b37'
                                d='M341.3 0H512v512H341.3z'
                              />
                            </g>
                          </svg>
                          EUR
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='sm:col-span-1'>
              <div className='mt-2 grid gap-2'>
                <label htmlFor='monto' className='font-semibold'>
                  Monto
                </label>
                <CurrencyInput
                  prefix='$'
                  decimalSeparator='.'
                  groupSeparator=','
                  value={data.monto ?? ''}
                  onValueChange={(value, name, values) =>
                    setData({ ...data, [name]: value })
                  }
                  id='monto'
                  name='monto'
                  type='text'
                  placeholder='$'
                  autoComplete='monto'
                  className='block w-96 rounded-md border-0 py-1.5  shadow-sm  placeholder:dark:text-white dark:bg-white/5  text-sm tracking-wider sm:leading-6 ps-3'
                />
              </div>
              {errors.monto ? <p className='text-red-500 animate-shake'>
                {errors.monto} </p> : null}
            </div>
            <div
              className={`sm:col-span-1 ${
                tab === '/tc_reverse' ? 'hidden' : 'show'
              }`}
            >
              <div className=' grid sm:col-span-1 '>
                <div className='mt-2 grid gap-2'>
                  <label htmlFor='forma_pago' className='font-semibold'>
                    Forma de pago
                  </label>
                  <select
                    name='forma_pago'
                    id='forma_pago'
                    value={data.forma_pago ?? '2'}
                    onChange={handleChange}
                    className='block w-96 rounded-md border-0 py-2   shadow-sm  placeholder:dark:text-white dark:bg-white/5  text-sm tracking-wider sm:leading-6 ps-2'
                  >
                    <option value={1}>Efectivo</option>
                    <option value={2}>Cheque</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div
              className={`col-span-1 transition-all duration-500 ease-in-out transform ${
                data.forma_pago === '2' && tab === '/tc_payment'
                  ? 'show '
                  : 'hidden'
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
              className={`col-span-3  ${
                tab === '/tc_reverse' ? 'show' : 'hidden'
              }`}
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
              <Button
                color='secondary'
                variant='contained'
                type='submit'
                value='submit'
                className=' font-semibold rounded-xl p-4 place-content-center grid bg-black dark:bg-zinc-600 border hover:bg-blue-500 '
              >Pagar
              </Button>

            </div>
          </div>
        </form>
      </motion.div>
    </>
  )
}
export default PagoTc
