import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`

export const Image = styled.img`
  width: 64px;
  height: 64px;
`

export const CenterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

export const Name = styled.p`
  grid-column: 1 / 3;
  font: ${(props) => props.theme.fonts.text.m};
  color: ${(props) => props.theme.colors.base.subtitle};
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
  font: ${(props) => props.theme.fonts.button.m};
  color: ${(props) => props.theme.colors.base.text};

  svg {
    color: ${(props) => props.theme.colors.brand.purple};
  }
`

export const Price = styled.span`
  font: ${(props) => props.theme.fonts.text.m};
  color: ${(props) => props.theme.colors.base.text};
  font-weight: 700;
`
