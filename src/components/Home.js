import React from "react"
import { Container, Content, LayOut, Section } from "../styles/HomeStyle"
import Leftside from "./Leftside"
import Main from "./Main"
import Rightside from "./Rightside"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

function Home(props) {
  return (
    <Container>
      {/* {!props.user && <Redirect to="/home" />} */}
      <Content>
        <Section>
          <h5>
            <a>Hiring in a hurry? -</a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <LayOut>
          <Leftside />
          <Main />
          <Rightside />
        </LayOut>
      </Content>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home)
