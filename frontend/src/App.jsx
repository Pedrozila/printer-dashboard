import './App.css'

function App() {
  // Dados simulados das nossas impressoras
  const printers = [
    {
      id: 1,
      name: 'P7662',
      isOnline: true,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },
    {
      id: 2,
      name: 'P7662',
      isOnline: true,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },
    {
      id: 3,
      name: 'P7662',
      isOnline: true,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },
    {
      id: 4,
      name: 'P7662',
      isOnline: false,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },
    {
      id: 5,
      name: 'P7662',
      isOnline: true,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },
    {
      id: 6,
      name: 'P7662',
      isOnline: true,
      ink: 20,
      mBox: 56,
      ip: '10.70.50.23',
      store: '70-ILM',
      sector: 'TI'
    },

  ]

  return (
    // 1. Container geral da aplicação em formato Flex (Menu na esquerda, Conteúdo na direita)
    <div className="app-layout">

      {/* 2. Menu Lateral Semântico (Sidebar) */}
      <aside className="sidebar">
        {/* Cabeçalho da Sidebar: Logo + Nome do Sistema */}
        <div className="sidebar-brand">
          <span className="brand-icon">🖨️</span>
          <h2>PrinterDash</h2>
        </div>

        {/* Navegação principal do sistema */}
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active">
              <a href="#printers">
                <span className="nav-icon">📊</span>
                <span>Impressoras</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#stores">
                <span className="nav-icon">🏢</span>
                <span>Lojas & Filiais</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#alerts">
                <span className="nav-icon">⚠️</span>
                <span>Alertas</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#settings">
                <span className="nav-icon">⚙️</span>
                <span>Configurações</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Rodapé da Sidebar: Info do operador / Ambiente de TI */}
        <div className="sidebar-footer">
          <div className="user-badge">
            <span className="user-avatar">👤</span>
            <div>
              <strong>Suporte TI</strong>
              <small>N1 / N2</small>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. Área Principal de Conteúdo (fica à direita da Sidebar) */}
      <div className="content-area">
        {/* Barra de Topo do Dashboard */}
        <header className="dashboard-header">
          <div>
            <h1>Dashboard Geral</h1>
            <span>Monitoramento corporativo em tempo real</span>
          </div>
        </header>

        {/* Conteúdo Principal onde os dados moram */}
        <main className="dashboard-main">
          {/* Seção que agrupa os cards em grade */}
          <section className="printers-grid">
            {printers.map((printer) => (
              <article className="printer-card" key={printer.id}>
                <div className="printer-card-header">
                  <h2>{printer.name}</h2>
                  <span className={`status ${printer.isOnline ? 'online' : 'offline'}`}>
                    {printer.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="printer-card-body">
                  <p><strong>Tinta:</strong> {printer.ink}%</p>
                  <p><strong>Caixa Manutenção:</strong> {printer.mBox}%</p>
                  <p><strong>IP:</strong> {printer.ip}</p>
                  <p><strong>Loja:</strong> {printer.store}</p>
                  <p><strong>Sector:</strong> {printer.sector}</p>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

    </div>
  )
}

export default App
