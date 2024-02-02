import styled from 'styled-components'

interface IconProps {
  color: string
}

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 100px;
  width: 100%;
`

export const Summary = styled.div`
  display: grid;
  gap: 40px;
`

export const Header = styled.div`
  display: grid;
  gap: 4px;
`

export const Title = styled.h1`
  font: ${(props) => props.theme.fonts.title.l};
  color: ${(props) => props.theme.colors.brand.yellowDark};
`

export const Subtitle = styled.h2`
  font: ${(props) => props.theme.fonts.text.m};
  color: ${(props) => props.theme.colors.base.subtitle};
`

export const OrderSummary = styled.div`
  display: grid;
  gap: 32px;
  padding: 40px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors.base.background};
`

export const GradientBorder = styled.div`
  position: relative;
  padding: 1px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 6px 36px;
    background: linear-gradient(to right, #dbac2c, #8047f8);
  }
`

export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font: ${(props) => props.theme.fonts.text.m};
    color: ${(props) => props.theme.colors.base.text};
  }

  span {
    font-weight: 700;
  }
`

export const Icon = styled.div<IconProps>`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.color};
`
