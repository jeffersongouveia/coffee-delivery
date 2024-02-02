import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
`

export const Title = styled.h1`
  font: ${(props) => props.theme.fonts.title.l};
  color: ${(props) => props.theme.colors.base.subtitle};
  margin-bottom: 34px;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 32px;
`
