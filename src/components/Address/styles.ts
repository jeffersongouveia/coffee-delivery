import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
`

export const Title = styled.h2`
  font: ${(props) => props.theme.fonts.title.xs};
  color: ${(props) => props.theme.colors.base.subtitle};
  margin-bottom: 15px;
`

export const AddressContainer = styled.div`
  display: grid;
  gap: 32px;
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 40px;
`

export const AddressHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const AddressHeader = styled.div`
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

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr 100px;
  grid-template-areas:
    'zip . .'
    'address address address'
    'number complement complement'
    'neighborhood city state';
  gap: 16px 12px;

  #zipCode {
    grid-area: zip;
  }

  #address {
    grid-area: address;
  }

  #number {
    grid-area: number;
  }

  #complement {
    grid-area: complement;
  }

  #neighborhood {
    grid-area: neighborhood;
  }

  #city {
    grid-area: city;
  }

  #state {
    grid-area: state;
  }
`

export const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.base.button};
  background: ${(props) => props.theme.colors.base.input};
  font: ${(props) => props.theme.fonts.text.s};
  color: ${(props) => props.theme.colors.base.text};

  &::placeholder {
    color: ${(props) => props.theme.colors.base.subtitle};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.brand.yellowDark};
    outline: none;
  }
`

export const OptionalInputWrapper = styled.div`
  position: relative;

  &::after {
    content: 'Optional';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8em;
    color: ${(props) => props.theme.colors.base.label};
    font: ${(props) => props.theme.fonts.text.s};
    font-style: italic;
    font-size: 12px;
  }

  input {
    width: 100%;
  }
`
