import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
`

export const Title = styled.h2`
  font: ${(props) => props.theme.fonts.text.m};
  color: ${(props) => props.theme.colors.base.subtitle};
  margin-bottom: 15px;
`

export const PaymentContainer = styled.div`
  display: grid;
  gap: 32px;
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 40px;
`
