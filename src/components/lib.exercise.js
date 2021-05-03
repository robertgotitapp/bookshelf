import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/core'
import {Dialog as ReachDialog} from '@reach/dialog'
import * as mq from 'styles/media-queries'
import * as color from 'styles/colors'
import {FaSpinner} from 'react-icons/fa'

const Button = styled.button(props => ({
  padding: '10px 15px',
  border: '0',
  lineHeight: '1',
  borderRadius: '3px',
  background: props.variant === 'secondary' ? color.gray : color.indigo,
  color: props.variant === 'secondary' ? color.text : color.base
}))

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${color.gray10}`,
  background: color.gray,
  padding: '8px 12px',
})

const FormGroup = styled.form({
  display: 'flex',
  flexDirection: 'column',
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: color.text,
  border: `1px solid ${color.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  margin: '3px 0px',
  alignItems: 'center',
  justifyContent: 'center',
  color: color.orange,
  width: '100%',
  animation: `${spin} 1s linear infinite`,
})

export {CircleButton, Dialog, Button, Input, FormGroup, Spinner}
