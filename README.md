<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 32px; color: #1f2933; background: #f7f9fc;">
  <header style="text-align: center; margin-bottom: 28px;">
    <h1 style="margin: 0 0 8px; color: #111827;">JRM Auto Multimarcas</h1>
    <p style="margin: 0; color: #4b5563;">Landing page focada em conversão para compra, venda e financiamento de veículos</p>
  </header>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Visão Geral</h2>
    <p>Projeto de landing page responsiva para a JRM Auto Multimarcas (Guanhães/MG), com foco em gerar leads via WhatsApp, apresentar serviços, provas sociais e vitrine de veículos. O layout utiliza vídeo de fundo com máscara, cards translúcidos, tipografia Poppins e botões de chamada para ação.</p>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Objetivos do Projeto</h2>
    <ul style="padding-left: 18px; color: #374151;">
      <li>Gerar conversão rápida para WhatsApp e Instagram.</li>
      <li>Apresentar serviços principais (compra, venda, intermediação, avaliação e financiamento).</li>
      <li>Exibir provas sociais e links para stories/posts reais.</li>
      <li>Garantir experiência fluida no mobile com menu responsivo e CTA fixo do WhatsApp.</li>
    </ul>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Principais Seções</h2>
    <ul style="padding-left: 18px; color: #374151;">
      <li><strong>Header fixo com menu responsivo:</strong> logo, navegação âncora e botão de menu mobile controlado por JavaScript.</li>
      <li><strong>Hero com vídeo de fundo:</strong> mensagem principal, valor de marca, CTA para WhatsApp, Instagram e vitrine.</li>
      <li><strong>Prova de confiança:</strong> selos com números de clientes, financiamento (60x) e parcelamento (21x).</li>
      <li><strong>Serviços:</strong> cards com listas de entregáveis e diferenciais.</li>
      <li><strong>Provas sociais:</strong> depoimentos e grid de links para stories/posts.</li>
      <li><strong>CTA final:</strong> reforço de contato e canais principais.</li>
      <li><strong>Floating WhatsApp:</strong> botão fixo com link direto.</li>
      <li><strong>Rodapé:</strong> informações da empresa e créditos de desenvolvimento.</li>
    </ul>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Tecnologias e Fontes</h2>
    <ul style="padding-left: 18px; color: #374151;">
      <li><strong>HTML5</strong>: estrutura semântica das seções e navegação por âncoras.</li>
      <li><strong>CSS3</strong>: layout responsivo, grid flexível, gradientes, efeito glass (backdrop-filter), variáveis CSS e animações de hover.</li>
      <li><strong>JavaScript Vanilla</strong>: controle do menu mobile e estados de acessibilidade (aria-expanded).</li>
      <li><strong>Fonte</strong>: Poppins via Google Fonts.</li>
      <li><strong>Assets</strong>: vídeos, logos e imagens em <code>assets/</code>.</li>
    </ul>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Estrutura de Pastas</h2>
    <pre style="background: #0b1220; color: #e5e7eb; padding: 14px 16px; border-radius: 10px; overflow:auto; font-size: 14px;">
.
├─ index.html          # Estrutura principal da landing
├─ style.css           # Variáveis de cor, layout responsivo, cards, botões e CTA fixo
├─ script.js           # Toggle do menu mobile e controle de aria-expanded
└─ assets/
   ├─ img/             # Logos, thumbnails de posts, ícone do WhatsApp, foto do fundador
   └─ video/           # Vídeo de fundo (bg hero)
    </pre>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Destaques de Implementação</h2>
    <ul style="padding-left: 18px; color: #374151;">
      <li><strong>Camada de vídeo + máscara</strong>: vídeo fixo em tela cheia com gradiente para leitura confortável.</li>
      <li><strong>Glassmorphism</strong>: cards translúcidos (<code>backdrop-filter</code>) com bordas suaves.</li>
      <li><strong>Botões CTA</strong>: três estilos (primário, gradiente Instagram, outline) com sombra e hover.</li>
      <li><strong>Menu mobile</strong>: estado controlado por classe <code>.menu-open</code> e ícone dinâmico (||| → X).</li>
      <li><strong>Responsividade</strong>: breakpoints 1080px e 900px/720px ajustam grids, header e WhatsApp floating.</li>
      <li><strong>Acessibilidade</strong>: uso de <code>aria-label</code>, <code>aria-hidden</code> no vídeo decorativo e <code>aria-expanded</code> no toggle.</li>
    </ul>
  </section>

  <section style="margin-bottom: 26px;">
    <h2 style="color: #111827;">Como Rodar Localmente</h2>
    <ol style="padding-left: 18px; color: #374151;">
      <li>Clonar o repositório.</li>
      <li>Abrir <code>index.html</code> diretamente no navegador ou servir com um servidor estático (ex.: <code>npx serve</code>).</li>
      <li>Verificar caminhos de assets em <code>assets/img</code> e <code>assets/video</code> se mover a pasta.</li>
    </ol>
  </section>

  <footer style="margin-top: 30px; color: #6b7280;">
    <p>© JRM Auto Multimarcas — Landing page estática para conversão de leads.</p>
    <p>Desenvolvido por Jefferson Miranda.</p>
  </footer>
</body>
</html>
