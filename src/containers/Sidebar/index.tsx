import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import {
  Descricao,
  BotaoTema,
  BotaoDownloadCv,
  SidebarContainer,
  LinkParaLinkedin,
  SvgLink
} from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Ricardo Rosendo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        RicardoRosendo98
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Developer front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema} className="material-symbols-sharp">
        brightness_4
      </BotaoTema>
      <LinkParaLinkedin
        target="blank"
        href="https://www.linkedin.com/in/ricardo-gaspar-rosendo-lira-developer/"
        className="bi bi-linkedin"
      ></LinkParaLinkedin>
      <BotaoDownloadCv
        href={require('../../components/Pdf/RicardoGasparRosendoLira.pdf')}
        download
      >
        <SvgLink className="bi bi-file-earmark-person-fill ">
          Download CV
        </SvgLink>
      </BotaoDownloadCv>
    </SidebarContainer>
  </aside>
)

export default Sidebar
