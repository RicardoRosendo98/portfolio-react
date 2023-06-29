import styled from 'styled-components'

export const Lista = styled.ul`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 2%;
  border-radius: 10px;
`
export const ListaLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
