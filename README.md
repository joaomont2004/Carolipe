# Carolipe Multivendas — Site

Landing page em React + Vite + Tailwind CSS para a Carolipe Multivendas.

## Como executar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (geralmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde alterar cada informação

Toda a informação editável fica centralizada em `src/data/`:

| O que trocar          | Arquivo                        |
|------------------------|---------------------------------|
| Telefone / WhatsApp    | `src/data/company.js`           |
| Instagram              | `src/data/company.js`           |
| Link do Mercado Livre  | `src/data/company.js` → `mercadoLivreUrl` |
| Cores da marca         | `tailwind.config.js` (e `src/data/brand.js` para uso em JS) |
| Categorias da vitrine  | `src/data/categories.js`        |
| Produtos do catálogo   | `src/data/products.js`          |
| Etapas de "como comprar" | `src/data/steps.js`           |

### Logo

O componente `src/components/Logo.jsx` usa, por padrão, um logo textual (a letra "C" em um círculo). Para usar o logotipo real:

1. Salve o arquivo do logo em `public/` (ex: `public/logo-carolipe.png` ou `.svg`).
2. Em `src/components/Logo.jsx`, troque o bloco do ícone/texto por:
   ```jsx
   <img src="/logo-carolipe.png" alt="Carolipe Multivendas" className="h-9" />
   ```

### Imagens de produtos e fotos da loja

- Os produtos em `src/data/products.js` têm `image: null`, o que mostra um espaço reservado elegante (ícone). Para usar uma foto real, salve o arquivo em `public/produtos/` e altere o campo, por exemplo:
  ```js
  { id: 1, name: 'Luvas descartáveis', category: 'Saúde', image: '/produtos/luvas.jpg' }
  ```
- As ilustrações da seção "Envios" e os cartões do Hero usam ícones (Lucide) no lugar de fotos. Se quiser trocar por fotos reais da loja, substitua os blocos correspondentes em `src/components/Shipping.jsx` e `src/components/Hero.jsx` por tags `<img>`.

### Mercado Livre

Enquanto o campo `mercadoLivreUrl` em `src/data/company.js` estiver vazio, o site mostra automaticamente uma mensagem de "link em breve" nas seções Mercado Livre, Contato e Footer. Assim que você tiver o link da loja, cole-o nesse campo e os botões passam a funcionar em todo o site.

### Depoimentos

A seção "Clientes que confiam na Carolipe" (`src/components/Testimonials.jsx`) está propositalmente vazia, com espaços reservados. Nenhum depoimento foi inventado. Quando você tiver depoimentos reais, edite esse componente para exibi-los.

## Estrutura de arquivos

```
carolipe-multivendas/
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
├─ postcss.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ data/
   │  ├─ company.js       (telefone, WhatsApp, Instagram, Mercado Livre)
   │  ├─ brand.js          (cores da marca em JS)
   │  ├─ categories.js
   │  ├─ products.js
   │  └─ steps.js
   └─ components/
      ├─ Header.jsx
      ├─ Hero.jsx
      ├─ Categories.jsx
      ├─ About.jsx
      ├─ Products.jsx
      ├─ Benefits.jsx
      ├─ Shipping.jsx
      ├─ Marketplace.jsx
      ├─ HowItWorks.jsx
      ├─ Testimonials.jsx
      ├─ CTAFinal.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      ├─ Logo.jsx
      ├─ PlaceholderArt.jsx
      └─ WhatsAppFloat.jsx
```

## Notas de conteúdo

- Nenhum preço, depoimento, link de Mercado Livre, ano de fundação ou número foi inventado — todos os campos sem informação confirmada aparecem como "consulte pelo WhatsApp" ou espaços reservados claramente identificados.
- Botão flutuante de WhatsApp fixo no canto inferior direito, visível em todas as páginas/seções.
- Header fica fixo (sticky) e ganha fundo branco com sombra discreta ao rolar a página.
- Acessibilidade: contraste AA nos textos principais, foco de teclado visível, `aria-label` nos botões de ícone, `alt` nas imagens, `prefers-reduced-motion` respeitado.
- SEO: title, meta description e Open Graph configurados em `index.html`.
