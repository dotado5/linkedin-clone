import React from "react"
import {
  Avatar,
  Container,
  FeedList,
  FollowCard,
  Recommendation,
  Title,
} from "../styles/RightsideStyle"

function Rightside() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all Recommendation
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
    </Container>
  )
}

export default Rightside
