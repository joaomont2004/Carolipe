// ============================================================
// DADOS DA EMPRESA — altere aqui para atualizar o site inteiro
// ============================================================

export const company = {
  name: 'Carolipe Multivendas',
  shortName: 'Carolipe',
  whatsappDisplay: '(18) 3199-2868',
  whatsappNumber: '551831992868', // usado no link wa.me — apenas números, com código do país 55
  whatsappSecondaryDisplay: '(18) 99676-5483',
  whatsappSecondaryNumber: '5518996765483',
  instagramHandle: '@carolipemultivendas',
  instagramUrl: 'https://www.instagram.com/carolipemultivendas/',
  // Cole aqui o link da loja no Mercado Livre quando disponível.
  mercadoLivreUrl: '', // <-- MERCADO_LIVRE_URL: preencher com o link da loja
  taplinkUrl: 'https://taplink.cc/carolipe.multivendas',
}

// Mensagem padrão enviada ao abrir o WhatsApp a partir de qualquer botão do site.
export function whatsappLink(message = 'Olá! Vim pelo site da Carolipe Multivendas e gostaria de saber mais.', number = company.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
