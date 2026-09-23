import './App.css'

function App() {
  const printer = {
    name: 'P7662',
    isOnline: true,
    ink: 20,
    mBox: 56,
    ip: '10.70.50.23',
    store: '70-ILM'
  }

  return (
    <main>
      <header>
        <h1>{printer.name}</h1>
      </header>
      <section>
        <div>
          <p>{printer.name}</p>
          <p>{printer.isOnline ? 'Online' : 'Offline'}</p>
          <p>{printer.ink}</p>
          <p>{printer.mBox}</p>
          <p>{printer.ip}</p>
          <p>{printer.store}</p>
        </div>
      </section>
    </main>
  )
   
}

export default App
