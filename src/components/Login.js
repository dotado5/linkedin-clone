import React from "react"
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Nav,
  Section,
  SignIn,
} from "../styles/LoginStyle"
import { connect } from "react-redux"
import { signInApi } from "../actions"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./Home"

function Login(props) {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn onClick={() => props.signIn()}>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
