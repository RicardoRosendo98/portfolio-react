import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Eu sou um Desenvolvedor Front-End apaixonado por tecnologia e estou
        sempre em busca de oportunidades para crescer e aprender. Tenho
        habilidades sólidas em desenvolvimento de sistemas no front-end, o que
        me permite criar interfaces incríveis e interativas. Sou conhecido pela
        minha proatividade, comunicação eficaz e habilidade em resolver
        problemas. Sempre me adapto facilmente a diferentes projetos, graças à
        minha experiência como freelancer, e meu foco e determinação garantem
        resultados excepcionais. Sou o profissional ideal para impulsionar
        projetos de desenvolvimento front-end, trazendo minha criatividade,
        expertise e soluções de qualidade para enfrentar cada desafio. Além
        disso, estou empenhado em expandir meus conhecimentos e aprimorar minhas
        habilidades no desenvolvimento back-end, pois tenho um forte compromisso
        com o meu crescimento profissional e a busca pela excelência técnica.
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=ricardorosendo98&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ricardorosendo98&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
