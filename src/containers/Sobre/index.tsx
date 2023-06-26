import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nostrum
        commodi amet error, laborum praesentium voluptatum minus deserunt nulla
        doloremque rem quos, assumenda sequi alias officia velit voluptates
        tempore libero?
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=ricardorosendo98&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ricardorosendo98&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
