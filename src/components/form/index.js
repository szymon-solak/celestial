import styled from 'styled-components'

import Select from './select'
import Option from './option'

const Form = styled.form`
  width: 100%;
  padding: 1em;
  //border: 1px solid ${props => props.theme.border};

  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: center;
`

const Label = styled.label`
  width: 100%;
  color: ${props => props.theme.fontColor};
  font-size: 1.2em;
`

const Input = styled.input`
  width: 100%;
  text-indent: .4em;
  padding: .2em 0;
  margin-bottom: 1em;
  font-size: 1.2em;
`

const Submit = styled.input.attrs({
  type: 'submit',
})`
  padding: .6em;
  font-size: 1.2em;
  cursor: pointer;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};
  border: 1px solid ${props => props.theme.border};

  transition: all .22s ease-in-out;

  &:hover {
    background: ${props => props.theme.focus};
    color: ${props => props.theme.fontFocus};
  }
`

export {
  Form,
  Label,
  Input,
  Submit,
  Select,
  Option
}
