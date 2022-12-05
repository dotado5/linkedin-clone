import React from "react"
import {
  Article,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImg,
  SocialActions,
  SocialCounts,
} from "../styles/MainStyle"

function Main() {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/item-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/nav-work.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/nav-messaging.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/google.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
              <button>
                <img src="/images/ellipsis.svg" alt="" />
              </button>
            </a>
          </SharedActor>
          <Description> Description </Description>
          <SharedImg>
            <a>
              <img src="/images/1.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/thumb_up.svg" alt="" />
                <img src="/images/thumb_down.svg" alt="" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 Comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/thumb_up.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/chat_black.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/shortcut_black.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send_black.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  )
}

export default Main
