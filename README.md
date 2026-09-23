# 🖨️ Printer Dash - Monitoramento de Impressoras Corporativas

Dashboard web para monitoramento proativo e centralizado do status de impressoras de rede distribuídas entre diferentes filiais e lojas.

---

## 🎯 Contexto e Objetivo

Em ambientes corporativos com múltiplas unidades (ex: `60-ELECTRON SJC`, `70-ILUMINAÇÃO`), o monitoramento reativo de impressoras costuma gerar chamados urgentes quando a tinta acaba ou quando a caixa de manutenção atinge sua capacidade máxima.

O **Printer Dash** tem como objetivo transformar essa operação em um modelo **proativo**:
- Centralizar o status de todos os equipamentos em um único painel visual.
- Prevenir paradas operacionais nas lojas através de alertas de suprimentos.
- Reduzir o tempo de atendimento da equipe de Suporte de TI.

---

## 📊 Métricas Monitoradas

- **Identificação**: Nome da impressora, endereço IP e modelo.
- **Localização / Unidade**: Loja em que o equipamento está instalado (com código e nome de filial).
- **Níveis de Tinta/Toner**: Percentual de suprimentos disponíveis.
- **Caixa de Manutenção (Epson)**: Percentual de vida útil e capacidade da caixa de descarte de tinta.
- **Status de Rede**: Conectividade (Online/Offline) e latência de resposta (Ping).

---

## 🛠️ Tecnologias Planejadas

- **Front-End**: HTML5, CSS3 (Flexbox/Grid), JavaScript Moderno (evoluindo para React).
- **Back-End**: Python (Scripts de coleta via SNMP/Ping e API REST com FastAPI/Flask).
- **Versionamento**: Git e GitHub.

---

## 🚀 Status do Projeto

> 🟡 **Em desenvolvimento inicial**: Estruturando a arquitetura e a interface do painel com dados simulados.
