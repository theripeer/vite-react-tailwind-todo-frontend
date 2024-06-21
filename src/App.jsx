import CrossIcon from "./components/icons/CrossIcon"
import LunaIcon from "./components/icons/LunaIcon"


const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
          <button><LunaIcon className="fill-red-400" /></button>
        </div>
        
        <form className=" flex bg-white rounded-md overflow-hidden mt-8 py-4 gap-4 items-center px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input className="w-full text-gray-400 outline-none" 
                 type="text" 
                 placeholder="Crear nuevo todo..."/>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md  [&>article]:p-4">
          <article className="flex gap-4 items-center border-b-gray-400 border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
              <p className="text-gray-600 grow">Completar tarea de JavaScript curso en Bluuweb</p>
              <button className="flex-none">
                  <CrossIcon />
              </button>
          </article>
          <article className="flex gap-4 items-center border-b-gray-400 border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
              <p className="text-gray-600 grow">Completar tarea de JavaScript curso en Bluuweb</p>
              <button className="flex-none">
                  <CrossIcon />
              </button>
          </article>
          <article className="flex gap-4 items-center border-b-gray-400 border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
              <p className="text-gray-600 grow">Completar tarea de JavaScript curso en Bluuweb</p>
              <button className="flex-none">
                  <CrossIcon />
              </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex gap-4 bg-white p-4 rounded-md justify-center">
          <button className="text-blue-600">Todos</button>
          <button className="hover:text-blue-600">Activos</button>
          <button className="hover:text-blue-600">Completados</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and drop y reordenar lista</p>
    </div>
    
  )
}

export default App