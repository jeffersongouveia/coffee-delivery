import styled, { css } from 'styled-components'

interface OptionCardProps {
  selected?: boolean
}

export const Container = styled.div`
  display: grid;
  width: 100%;
`

export const PaymentContainer = styled.div`
  display: grid;
  gap: 32px;
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 40px;
`

export const PaymentHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const PaymentHeader = styled.div`
  display: grid;
  gap: 2px;

  h4 {
    font: ${(props) => props.theme.fonts.text.m};
    color: ${(props) => props.theme.colors.base.subtitle};
  }

  p {
    font: ${(props) => props.theme.fonts.text.s};
    color: ${(props) => props.theme.colors.base.text};
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const OptionCard = styled.button<OptionCardProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  box-shadow: none;
  min-width: 180px;
  background: ${(props) => props.theme.colors.base.button};

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${props.theme.colors.brand.purple};
    `}

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};
  }

  p {
    font: ${(props) => props.theme.fonts.button.m};
    color: ${(props) => props.theme.colors.base.text};
    text-transform: uppercase;
  }
`
