import { useContext } from 'react'

import Coffee from '../Coffee/Coffee.tsx'
import { CoffeesContext } from '../../contexts/CoffeesContext.tsx'

import { Container, List, Title } from './styles.ts'

export default function CoffeesList() {
  const { allCoffees } = useContext(CoffeesContext)

  return (
    <Container>
      <Title>Our coffees</Title>

      <List>
        {allCoffees.map((coffee) => (
          <Coffee key={coffee.name} coffee={coffee} />
        ))}
      </List>
    </Container>
  )
}
