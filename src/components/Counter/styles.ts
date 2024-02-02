import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.base.button};
  min-width: 38px;
`

export const Quantity = styled.span`
  font: ${(props) => props.theme.fonts.text.m};
  color: ${(props) => props.theme.colors.base.title};
`

export const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.brand.purple};
  border: none;
  cursor: pointer;
  width: 14px;
  height: 14px;

  &:hover {
    color: ${(props) => props.theme.colors.brand.purpleDark};
  }
`
