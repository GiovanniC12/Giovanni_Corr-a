### Estrutura completa para deploy no Render

Abaixo estão os arquivos base que você deve ter no repositório GitHub para o site **Artes de Giovanni Corrêa**. Assim o Render conseguirá fazer o build automaticamente.

---

#### package.json
```json
{
  "name": "artes-giovanni-correa",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.468.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.8"
  }
}
```

---

#### vite.config.js
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

---

#### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

#### postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

#### index.html
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Artes de Giovanni Corrêa</title>
  </head>
  <body class="bg-gray-50">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

#### src/main.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

#### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply font-sans;
}
```

---

#### src/App.jsx
👉 Já está pronto no seu canvas (o código que criamos juntos).

---

### README.md
```markdown
# 🎨 Artes de Giovanni Corrêa

Site institucional simples e moderno para exibição das coleções de arte de Giovanni Corrêa. Desenvolvido em **React + Vite** com **Tailwind CSS** e efeitos de animação usando **Framer Motion**.

---

## 🚀 Tecnologias
- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React Icons

---

## 📦 Instalação local

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/artes-giovanni-correa.git
cd artes-giovanni-correa
npm install
```

Rodar localmente em modo desenvolvimento:
```bash
npm run dev
```

Gerar versão de produção:
```bash
npm run build
```

Pré-visualizar build localmente:
```bash
npm run preview
```

---

## ☁️ Deploy no Render

1. Crie um repositório no GitHub com os arquivos deste projeto.
2. Vá até [Render](https://render.com) → **New → Web Service**.
3. Conecte sua conta GitHub e escolha o repositório.
4. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm run preview`
5. O Render fará o deploy automático após cada push no GitHub.

---

## 📬 Contato
O formulário de contato está integrado com **Formspree**. Para funcionar, substitua no arquivo `src/App.jsx` a URL:
```html
<form action="https://formspree.io/f/SEU_ENDPOINT" method="POST">
```
Pelo endpoint real fornecido pela sua conta do Formspree.
```

---

## 📄 Licença
Projeto de uso pessoal. Todos os direitos reservados © Giovanni Corrêa.
```

---

### Passos finais para deploy no Render

1. Crie um repositório no GitHub e faça **push** de todos esses arquivos (`package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/`, `README.md`).
2. No [Render](https://render.com), clique em **New → Web Service**.
3. Conecte seu GitHub e escolha o repositório.
4. Configure:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run preview`
5. Render fará o deploy automático.

⚠️ Lembre-se de substituir `https://formspree.io/f/yourFormID` pelo **endpoint real do Formspree** no `App.jsx`.

---

Agora o projeto está 100% pronto para subir no Render 🎉
