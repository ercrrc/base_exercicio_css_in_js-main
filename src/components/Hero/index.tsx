import { Container } from '../../styles'

import { Form, Div, HeroTitle } from './Hero'

const Hero = () => (
  <Form>
    <Div className={Container}>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Div>
  </Form>
)

export default Hero
