import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import ChildModal from './ChildModal'
import { motion } from 'framer-motion'
import CurrencyInput from 'react-currency-input-field'
import { useAuth } from './AuthProvider'
function PagoTc (props) {
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const [tab, setTab] = useState(location.pathname)
  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  const [data, setData] = useState({
    tipo_trans: 'Compras',
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
        className='grid  w-full items-center justify-center'
      >
        <form onSubmit={handleSubmit} className="w-full max-w-lg border p-20 rounded-xl ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2  mb-6 md:mb-0">
      <label className="block uppercase tracking-wide dark:text-white  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Numero de Tarjeta
      </label>
      <input value={ccFormat(data.tcact)}
                  onChange={handleChange}
                  type='tel'
                  maxLength='19'
                  name='tcact'
                  id='tcact'
                  placeholder='xxxx xxxx xxxx xxxx'
                  autoComplete='tcact' className={`appearance-none block w-full bg-gray-200 text-gray-700 border  ${!errors.tcact ? 'border-blue-500' : 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}/>
      <p className="text-red-500 text-xs italic">{ errors.tcact}</p>
    </div>
    <div className="w-full md:w-1/2 px-10">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Moneda
      </label>
      <div className="relative">
        <select onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="moneda" name='moneda'>
          <option value='214'>DOP</option>
          <option value='840'>USD</option>
          <option>EUR</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide dark:text-white text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Monto
      </label>
      <input onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" />
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
<button type='submit' value='submit' className='bg-zinc-300 rounded p-2'>submit</button>
</form>
      </motion.div>
    </>
  )
}
export default PagoTc
