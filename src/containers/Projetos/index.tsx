import { Lista, ListaLi } from './styles'

import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <ListaLi>
          <Projeto />
        </ListaLi>
      </Lista>
    </section>
  )
}

export default Projetos
