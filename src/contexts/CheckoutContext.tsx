import React, { createContext, useState } from 'react'

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  MONEY = 'MONEY',
}

interface AddressType {
  zipCode: string
  address: string
  number: number | string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface CheckoutContextType {
  address: AddressType
  paymentMethod: PaymentMethod
  updateAddress: (item: string, value: string | number) => void
  updatePaymentMethod: (paymentMethod: PaymentMethod) => void
  humanizePaymentMethod: (paymentMethod: PaymentMethod) => string
  isAddressFilled: () => boolean
}

interface CheckoutProviderProps {
  children: React.ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextType)

export default function CheckoutContextProvider(props: CheckoutProviderProps) {
  const [address, setAddress] = useState<AddressType>({
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.CREDIT_CARD,
  )

  function updateAddress(item: string, value: string | number) {
    setAddress({ ...address, [item]: value })
  }

  function updatePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod)
  }

  function humanizePaymentMethod(paymentMethod: PaymentMethod) {
    switch (paymentMethod) {
      case PaymentMethod.CREDIT_CARD:
        return 'Credit Card'
      case PaymentMethod.DEBIT_CARD:
        return 'Debit Card'
      case PaymentMethod.MONEY:
        return 'Money'
    }
  }

  function isAddressFilled() {
    const optionalValues = ['complement']
    const addressKeys = Object.keys(address).filter(
      (i) => !optionalValues.includes(i),
    ) as (keyof AddressType)[]

    return addressKeys.every((key) => !!address[key])
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        paymentMethod,
        updateAddress,
        updatePaymentMethod,
        humanizePaymentMethod,
        isAddressFilled,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  )
}
