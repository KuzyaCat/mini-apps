import React, { useState } from 'react'
import { Alert, InputGroup, FormControl, FormGroup, Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, useHistory, Switch, Route, Link } from 'react-router-dom'
import { AffinidiWallet } from '@affinidi/wallet-browser-sdk'

function Signin() {
  const [username, setUsername] = useState('')
  const [userCode, setUserCode] = useState('')
  const [token, setToken] = useState('')

  const [appState, setAppState] = useState('signIn')
  const [status, setStatus] = useState((<div></div>))

  const setters = { setUsername, setUserCode, setStatus, setAppState, setToken }
  const state = { username, userCode, status, appState, token }

  function renderUsername({ setUsername }, { appState }) {
    return (<FormGroup>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          disabled={ appState !== 'signIn' }
          placeholder='Enter your Affinidi Username! (Email / mobile)'
          aria-label='Username'
          aria-describedby='basic-addon1'
          onChange={ (e) => { setUsername(e.target.value) }}
        />
      </InputGroup>
    </FormGroup>)
  }

  function renderConfirmationCode({ setUserCode }, { appState }) {
    switch (appState) {
      case 'confirmSignIn':
        return (
          <FormGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'># </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='Confirmation Code'
                aria-label='Confirmation Code'
                aria-describedby='basic-addon1'
                onChange={ (e) => { setUserCode(e.target.value) }}
              />
            </InputGroup>
          </FormGroup>
        )
      default:
        return (
          <div></div>
        )
    }
  }

  async function SDKResendCode({ setAppState, setStatus }, username) {
    try {
      await AffinidiWallet.resendSignUpConfirmationCode(username)
    } catch (e) {
      setStatus((
        <Alert variant='danger'>
          { e.message }
        </Alert>
      ))
      return
    }
    setAppState('confirmSignIn')
    setStatus((
      <Alert variant='success'>
        Confirmation code resent!
      </Alert>
    ))
  }

  async function SDKConfirmSignIn({ setStatus }, userToken, code) {
    let wallet = null
    try {
      wallet = await AffinidiWallet.confirmSignIn(
        userToken,
        code
      )
    } catch (e) {
      setStatus((
        <Alert variant='danger'>
          {e.message}
        </Alert>
      ))
      return
    }
    setStatus((
      <Alert variant='success'>
        Signed in successfully!
      </Alert>
    ))
      <Redirect to={{
        pathname: '/yourSSIApplication',
        wallet: wallet
    }} />
  }

  async function SDKSignIn({ setAppState, setStatus, setToken }, username) {
    try {
      const token = await AffinidiWallet.signIn(username)
      setToken(token)
    } catch (e) {
      switch (e.message) {
        case 'User is not confirmed.':
          setAppState('resendCode')
          break
      }
      setStatus((
        <Alert variant='danger'>
          {e.message}
        </Alert>
      ))
      return
    }
    setAppState('confirmSignIn')
    setStatus((
      <Alert variant='success'>
        Your keypair has been created! Check your email / mobile for the confirmation code.
      </Alert>
    ))
  }

  function renderSubmit(setters, { appState, username, token, userCode }) {
    switch (appState) {
      case 'resendCode':
        return (<button
          type='submit'
          className='btn btn-warning btn-block'
          onClick={(e) => {
            SDKResendCode(setters, username)
          }}
        >
          Resend Confirmation Code
        </button>)
      case 'confirmSignIn':
        return (<button
          type='submit'
          className='btn btn-success btn-block'
          onClick={(e) => {
            SDKConfirmSignIn(setters, token, userCode)
          }}
        >
          Sign In !
        </button>)
        break
      default:
        return (<button
          type='submit'
          className='btn btn-primary btn-block'
          onClick={(e) => {
            SDKSignIn(setters, username)
          }}
        >
          Intialize !
        </button>)
    }
  }

  const affinidiWallet = await AffinidiWallet.fromLoginAndPassword(username, password);
  await affinidiWallet.saveCredentials([signedCredential]);
  const credentials = await affinidiWallet.getCredentials(shareRequestToken);

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Jumbotron>
            <h3>
              Sign In <span></span>
              <small className='text-muted'>(Managed by Affinidi)</small>
            </h3>
            <br />
            <p>
              This unified signup / signin flow illustrates how the SDK might be applied to your application. The flow includes private keypair generation, user confirmation and secure key storage on the Affinidi backend.
            </p>
            <p>
              In the case where a user already exists, login is performed automatically.
            </p>
            <br />
            { renderUsername(setters, state) }
            { renderConfirmationCode(setters, state) }
            { renderSubmit(setters, state) }
            <br />
            {status}
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Signin
