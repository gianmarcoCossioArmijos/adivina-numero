import React from 'react'
import { useState } from 'react'
import { toast } from 'sonner';

const App = () => {
  const [aleatorio, setAleatorio] = useState(null);
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState("?")
  const [respuesta, setRespuesta] = useState(null);

  const handleChange = (event) => {

    const resp = event.target.value;
    setRespuesta(resp);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(respuesta);
    console.log(aleatorio);

    if (Math.round(Number(respuesta)) === aleatorio) {

      setNumero(respuesta);
      setContador(0);
      setAleatorio(null)
      setRespuesta(null)
      toast.success("Has adivinado, Ganaste!")
    } else {

      setContador(contador + 1);
      toast.error("Sigue intentando!")
    }
  }

  const generarNumero = () => {

    const num = Math.round(Math.random() * (9 - 0) + 0);
    setAleatorio(num);
    setContador(0);
    setNumero("?")
    toast("Empezemos a jugar!")
  }

  return (
    <main className='w-full min-h-screen p-6 bg-black/80 text-white'>

      <section className='w-full min-h-screen px-4 py-8 flex flex-col gap-16 bg-black rounded-lg'>

        <h1 className='mx-auto font-bold text-3xl'>Adivina el Numero 🤷</h1>

        <h3 className='px-10 py-14 mx-auto font-bold text-9xl rounded-lg bg-white/10'>{numero}</h3>

        <h5 className='w-full md:w-1/2 lg:w-1/3 md:mx-auto font-bold text-xl text-white'>Intentos: {contador}</h5>

        <form
            onSubmit={handleSubmit}
            className='w-full md:w-1/2 lg:w-1/3 md:mx-auto flex flex-col gap-4 text-lg'>

          <label className='flex flex-col gap-4'>
            Que numero crees que es ( del 0 al 9 )?
            <input
              type="number"
              name='repuesta'
              value={respuesta}
              onChange={handleChange}
              placeholder='Ingrese un numero'
              className='p-2 rounded-lg text-black'
              required/>
          </label>

          <input
              type="submit"
              value="Responder"
              className='p-3 rounded-lg bg-sky-500 font-bold text-lg'/>

        </form>

        <button
            onClick={generarNumero}
            className='w-full md:w-1/2 lg:w-1/3 md:mx-auto p-3 rounded-lg bg-sky-500 font-bold text-lg'>
          Jugar
        </button>

      </section>

    </main>
  )
}

export default App