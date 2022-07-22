import { Bank, CreditCard, Money } from 'phosphor-react'
import { z } from 'zod'

export enum PaymentMethods {
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
  MONEY = 'money',
}

export const paymentMethods = [
  {
    key: PaymentMethods.CREDIT_CARD,
    text: 'Cartão de Crédito',
    icon: CreditCard,
  },
  { key: PaymentMethods.DEBIT_CARD, text: 'Cartão de Débito', icon: Bank },
  { key: PaymentMethods.MONEY, text: 'Dinheiro', icon: Money },
] as const

export const orderSchemaValidator = z.object({
  cep: z
    .string()
    .min(8, 'CEP deve ter 8 caracteres')
    .max(8, 'CEP deve ter 8 caracteres'),
  street: z.string().min(5, 'Rua deve ter no mínimo 5 caracteres'),
  number: z.number(),
  complement: z.string().optional(),
  neighborhood: z.string().min(5, 'Bairro deve ter no mínimo 5 caracteres'),
  city: z.string().min(5, 'Cidade deve ter no mínimo 5 caracteres'),
  state: z
    .string()
    .min(2, 'UF deve ter 2 caracteres')
    .max(2, 'UF deve ter 2 caracteres'),
  paymentMethod: z.enum([
    PaymentMethods.CREDIT_CARD,
    PaymentMethods.DEBIT_CARD,
    PaymentMethods.MONEY,
  ]),
})

export type OrderFormFields = z.infer<typeof orderSchemaValidator>
