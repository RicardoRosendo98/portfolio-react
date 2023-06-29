import { useEffect, useState } from 'react'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

interface Repository {
  html_url: string | undefined
  id: number
  name: string
  language: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/ricardorosendo98/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false)
          setRepos(resJson)
        }, 3000)
      })
  }, [])

  return (
    <>
      {estaCarregando ? (
        <Paragrafo tipo="secundario">Aguarde...</Paragrafo>
      ) : (
        repos.map((repositorio) => (
          <Card key={repositorio.id}>
            <Titulo>{repositorio.name}</Titulo>
            <Paragrafo tipo="secundario">
              {`Linguagem: ${repositorio.language}`}
            </Paragrafo>
            <LinkBotao target="blank" href={repositorio.html_url}>
              Visualizar
            </LinkBotao>
          </Card>
        ))
      )}
    </>
  )
}

export default Projeto
