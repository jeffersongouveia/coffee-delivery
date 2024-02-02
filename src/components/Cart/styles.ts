import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 450px;
`

export const ContentContainer = styled.div`
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px 44px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.h2`
  font: ${(props) => props.theme.fonts.title.xs};
  color: ${(props) => props.theme.colors.base.subtitle};
`

export const List = styled.ul`
  display: grid;
  gap: 24px;
`

export const Item = styled.li`
  display: grid;
  gap: 24px;
  list-style: none;
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors.base.button};
  height: 0;
`

export const TotalValues = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
`

export const TotalItem = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${(props) => props.theme.fonts.text.s};
  color: ${(props) => props.theme.colors.base.text};

  span {
    font: ${(props) => props.theme.fonts.text.m};
  }
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${(props) => props.theme.fonts.text.l};
  color: ${(props) => props.theme.colors.base.subtitle};
  font-weight: 700;
`

export const Confirm = styled.button`
  background: ${(props) => props.theme.colors.brand.yellow};
  color: ${(props) => props.theme.colors.base.white};
  font: ${(props) => props.theme.fonts.button.g};
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  padding: 12px 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.brand.yellowDark};
  }
`
