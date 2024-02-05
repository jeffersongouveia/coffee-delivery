import styled, { css } from 'styled-components'

interface CounterProps {
  enable: boolean
}

export const Container = styled.div<CounterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.base.button};
  min-width: 38px;

  opacity: 0.5;

  ${(props) =>
    !props.enable &&
    css`
      &:hover p {
        visibility: visible;
      }
    `}

  ${(props) =>
    props.enable &&
    css`
      opacity: 1;

      button {
        cursor: pointer;
        pointer-events: all;
        opacity: 1;
      }

      p {
        visibility: hidden;
      }
    `}
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
  width: 14px;
  height: 14px;

  // Disabled as default
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.5;

  &:hover {
    color: ${(props) => props.theme.colors.brand.purpleDark};
  }
`

export const Tooltip = styled.p`
  text-align: center;
  padding: 5px 0;
  position: absolute;
  visibility: hidden;

  font: ${(props) => props.theme.fonts.button.m};
  color: ${(props) => props.theme.colors.base.card};
  background: ${(props) => props.theme.colors.base.subtitle};
  border-radius: 6px;
  width: 120px;
  bottom: -150%;
  left: -50%;
  z-index: 1;
`
