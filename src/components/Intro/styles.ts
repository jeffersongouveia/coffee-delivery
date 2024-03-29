import styled from 'styled-components'
import introBackground from '../../assets/intro-background.svg'

interface IconProps {
  background: string
}

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  background: url(${introBackground}) no-repeat;
  background-size: cover;
  background-position-y: 50%;
  width: 100vw;
  margin-left: -160px;
  padding: 90px 160px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 0.5) 100%
    );
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 70px;
  height: 100%;
`

export const TitleContainer = styled.div`
  display: grid;
  gap: 16px;
`

export const Title = styled.h1`
  font: ${(props) => props.theme.fonts.title.xl};
`

export const Subtitle = styled.h2`
  font: ${(props) => props.theme.fonts.text.l};
`

export const FeaturesList = styled.ul`
  text-decoration: none;
  list-style-type: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 0;
`

export const Icon = styled.div<IconProps>`
  background: ${(props) => props.background};
  padding: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font: ${(props) => props.theme.fonts.text.m};
`
