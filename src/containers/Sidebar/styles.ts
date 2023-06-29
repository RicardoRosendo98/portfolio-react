import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border: none;
  padding: 5px;
  color: ${(props) => props.theme.corPrincipal};
  font-size: 35px;
  background-color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
`
export const LinkParaLinkedin = styled.a`
  color: ${(props) => props.theme.corPrincipal};

  font-size: 35px;
  vertical-align: 4px;
  margin-inline: 19px;
  transition: 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.corDoLinkedin};
  }
`

export const BotaoDownloadCv = styled.a`
  display: block;
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 22px;
  text-decoration: none;
  color: ${(props) => props.theme.corPrincipal};
  margin-top: 20px;
  transition: 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme.corDownload};
    color: ${(props) => props.theme.corPrincipal};
  }

  @media (max-width: 768px) {
    margin: 10px 48px 0 48px;
    padding: 6px;
  }
`
export const SvgLink = styled.p`
  padding: 3px;
  font-size: 14px;
  text-align: center;
  margin: 5px;

  &.bi::before {
    margin-right: 5px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
