import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  justify-items: center;
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px 36px;
  max-width: 256px;
`

export const Picture = styled.img`
  width: 120px;
  margin-top: -25px;
`

export const Tags = styled.ul`
  text-decoration: none;
  list-style-type: none;
  display: flex;
  gap: 4px;
  align-content: center;
  justify-items: center;
  margin-top: 12px;
  margin-bottom: 16px;
`

export const Tag = styled.li`
  padding: 4px 8px;
  border-radius: 100px;
  background: ${(props) => props.theme.colors.brand.yellowLight};
  font: ${(props) => props.theme.fonts.tag};
  color: ${(props) => props.theme.colors.brand.yellowDark};
`

export const Name = styled.h4`
  font: ${(props) => props.theme.fonts.title.s};
  color: ${(props) => props.theme.colors.base.subtitle};
`

export const Description = styled.p`
  margin-top: 8px;
  margin-bottom: 32px;
  padding: 0 20px;
  text-align: center;
  font: ${(props) => props.theme.fonts.text.s};
  color: ${(props) => props.theme.colors.base.label};
`

export const Buy = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content max-content;
  gap: 8px;
  width: 100%;
  padding: 24px;
`

export const Price = styled.p`
  color: ${(props) => props.theme.colors.base.text};
  font: ${(props) => props.theme.fonts.text.s};
`

export const Value = styled.span`
  font: ${(props) => props.theme.fonts.title.m};
`

export const AddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.brand.purpleDark};

  &:hover {
    background: ${(props) => props.theme.colors.brand.purple};
  }
`
