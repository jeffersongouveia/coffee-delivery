import React, { createContext, useState } from 'react'

import traditionalEspresso from '../assets/coffees/traditional-expresso.png'
import americanEspresso from '../assets/coffees/american-expresso.png'
import creamyEspresso from '../assets/coffees/creamy-espresso.png'
import icedEspresso from '../assets/coffees/iced-espresso.png'
import coffeeWithMilk from '../assets/coffees/coffee-with-milk.png'
import latte from '../assets/coffees/latte.png'
import cappuccino from '../assets/coffees/cappuccino.png'
import macchiato from '../assets/coffees/macchiato.png'
import mochaccino from '../assets/coffees/mochaccino.png'
import hotChocolate from '../assets/coffees/hot-chocolate.png'
import cuban from '../assets/coffees/cuban.png'
import hawaiian from '../assets/coffees/hawaiian.png'
import arabic from '../assets/coffees/arabic.png'
import irish from '../assets/coffees/irish.png'

export interface CoffeeType {
  name: string
  description: string
  image: string
  price: number
  tags: string[]
  quantity: number
}

interface CoffeesContextType {
  allCoffees: CoffeeType[]
  coffeesInCart: CoffeeType[]
  addCoffeeToCart: (coffee: CoffeeType) => void
  updateCoffeeQuantity: (coffeeName: string, quantity: number) => void
  removeCoffeeFromCart: (coffeeName: string) => void
  clearCart: () => void
  isCoffeeInCart: (coffeeName: string) => boolean
}

interface CoffeesProviderProps {
  children: React.ReactNode
}

export const CoffeesContext = createContext<CoffeesContextType>(
  {} as CoffeesContextType,
)

enum TAGS {
  TRADITIONAL = 'TRADITIONAL',
  ALCOHOLIC = 'ALCOHOLIC',
  COLD = 'COLD',
  WITH_MILK = 'WITH MILK',
  ESPECIAL = 'ESPECIAL',
}

const allCoffees: CoffeeType[] = [
  {
    image: traditionalEspresso,
    name: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    tags: [TAGS.TRADITIONAL],
    price: 9.9,
    quantity: 1,
  },
  {
    image: americanEspresso,
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than traditional',
    tags: [TAGS.TRADITIONAL],
    price: 8.9,
    quantity: 1,
  },
  {
    image: creamyEspresso,
    name: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    tags: [TAGS.TRADITIONAL],
    price: 10.9,
    quantity: 1,
  },
  {
    image: icedEspresso,
    name: 'Iced Espresso',
    description: 'Drink prepared with espresso and ice cubes',
    tags: [TAGS.TRADITIONAL, TAGS.COLD],
    price: 9.9,
    quantity: 1,
  },
  {
    image: coffeeWithMilk,
    name: 'Coffee with Milk',
    description: 'Half and half traditional espresso with steamed milk',
    tags: [TAGS.TRADITIONAL, TAGS.WITH_MILK],
    price: 11.9,
    quantity: 1,
  },
  {
    image: latte,
    name: 'Latte',
    description: 'A shot of espresso with double the milk and creamy foam',
    tags: [TAGS.TRADITIONAL, TAGS.WITH_MILK],
    price: 12.6,
    quantity: 1,
  },
  {
    image: cappuccino,
    name: 'Cappuccino',
    description:
      'Cinnamon drink made from equal doses of coffee, milk and foam',
    tags: [TAGS.TRADITIONAL, TAGS.WITH_MILK],
    price: 11.9,
    quantity: 1,
  },
  {
    image: macchiato,
    name: 'Macchiato',
    description: 'Espresso mixed with some hot milk and froth',
    tags: [TAGS.TRADITIONAL, TAGS.WITH_MILK],
    price: 13.9,
    quantity: 1,
  },
  {
    image: mochaccino,
    name: 'Mochaccino',
    description: 'Espresso with chocolate syrup, little milk and foam',
    tags: [TAGS.TRADITIONAL, TAGS.WITH_MILK],
    price: 15.8,
    quantity: 1,
  },
  {
    image: hotChocolate,
    name: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    tags: [TAGS.ESPECIAL, TAGS.WITH_MILK],
    price: 12.9,
    quantity: 1,
  },
  {
    image: cuban,
    name: 'Cuban',
    description: 'Iced espresso drink with rum, cream and mint',
    tags: [TAGS.ESPECIAL, TAGS.ALCOHOLIC, TAGS.COLD],
    price: 18.9,
    quantity: 1,
  },
  {
    image: hawaiian,
    name: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    tags: [TAGS.ESPECIAL],
    price: 14.8,
    quantity: 1,
  },
  {
    image: arabic,
    name: 'Arabic',
    description: 'Drink prepared with Arabic coffee beans and spices',
    tags: [TAGS.ESPECIAL],
    price: 13.9,
    quantity: 1,
  },
  {
    image: irish,
    name: 'Irish',
    description:
      'Drink made from coffee, Irish whiskey, sugar and whipped cream',
    tags: [TAGS.ESPECIAL, TAGS.ALCOHOLIC],
    price: 16.9,
    quantity: 1,
  },
]

export default function CoffeesContextProvider(props: CoffeesProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeType[]>([])

  function addCoffeeToCart(coffee: CoffeeType) {
    setCoffeesInCart([...coffeesInCart, coffee])
  }

  function updateCoffeeQuantity(coffeeName: string, quantity: number) {
    const updatedCoffees = coffeesInCart.map((coffee) => {
      if (coffee.name === coffeeName && quantity > 0) {
        coffee.quantity = quantity
      }

      return coffee
    })

    setCoffeesInCart(updatedCoffees)
  }

  function removeCoffeeFromCart(coffeeName: string) {
    const updatedCoffees = coffeesInCart.filter(
      (coffee) => coffee.name !== coffeeName,
    )

    updateCoffeeQuantity(coffeeName, 1)
    setCoffeesInCart(updatedCoffees)
  }

  function clearCart() {
    setCoffeesInCart([])
  }

  function isCoffeeInCart(coffeeName: string) {
    return coffeesInCart.some((coffee) => coffee.name === coffeeName)
  }

  return (
    <CoffeesContext.Provider
      value={{
        allCoffees,
        coffeesInCart,
        addCoffeeToCart,
        updateCoffeeQuantity,
        removeCoffeeFromCart,
        clearCart,
        isCoffeeInCart,
      }}
    >
      {props.children}
    </CoffeesContext.Provider>
  )
}
