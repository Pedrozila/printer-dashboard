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
    <main className="dashboard-cointainer">
      <header className="dashboard-header">
        <h1>Printer Dash</h1>
      </header>
      <article className="printer-card">
        <div className="printer-card-header">
          <h2>{printer.name}</h2>
          <span className={`status ${printer.isOnline ? 'online' : 'offline'}`}>
            {printer.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
        <div>
          <p>{printer.ink}%</p>
          <p>{printer.mBox}%</p>
          <p>{printer.ip}</p>
          <p>{printer.store}</p>
        </div>
      </article>
    </main>
  )
   
}

export default App
