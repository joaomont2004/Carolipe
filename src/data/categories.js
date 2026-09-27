import { Stethoscope, HardHat, Sparkles, Package, ShoppingCart, Boxes } from 'lucide-react'

export const categories = [
  {
    id: 'saude',
    icon: Stethoscope,
    title: 'Material de Saúde',
    description: 'Itens e equipamentos para uso profissional e do dia a dia.',
  },
  {
    id: 'epi',
    icon: HardHat,
    title: 'EPIs',
    description: 'Equipamentos de proteção individual para o seu trabalho.',
  },
  {
    id: 'beleza',
    icon: Sparkles,
    title: 'Beleza',
    description: 'Produtos de beleza e cuidados pessoais selecionados.',
  },
  {
    id: 'envios',
    icon: Package,
    title: 'Agência de Envios',
    description: 'Ponto de envio de encomendas para todo o Brasil.',
  },
  {
    id: 'mercado-livre',
    icon: ShoppingCart,
    title: 'Mercado Livre',
    description: 'Também vendemos através da nossa loja no Mercado Livre.',
  },
  {
    id: 'outros',
    icon: Boxes,
    title: 'Outros Produtos',
    description: 'Diversos itens comerciais para atender sua necessidade.',
  },
]
