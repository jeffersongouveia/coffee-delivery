import Intro from '../../components/Intro/Intro.tsx'
import CoffeesList from '../../components/CoffeesList/CoffeesList.tsx'

import { Container } from './styles.ts'

export default function Home() {
  return (
    <Container>
      <Intro />
      <CoffeesList />
    </Container>
  )
}
