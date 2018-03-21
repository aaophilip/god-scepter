import React from 'react'
import Link from 'gatsby-link'

import '../layouts/index.css'
import banner from '../components/images/GS_Banner.png'
import welcome from '../components/images/welcome_h.jpg'
import events from '../components/images/events.jpg'

const IndexPage = () => (
  <div id="wrapperHome">
    <div id="slide">
      <img width="940" height="400" src={banner} />
    </div>
    <div id="box1">
      <h1>
        <span>Welcome</span>
      </h1>
      <img width="450" height="250" src={welcome} />
      <p>
        <span>
          Pellentesque vel nisl in diam congue luctus. Nulla feugiat ipsum
          laoreet risus ultricies molestie. Suspendisse ornare rutrum quam, sit
          amet congue ex iaculis sit amet. Nullam mi ipsum, iaculis in erat a,
          finibu suscipit quam.
        </span>
      </p>
      <div id="readM">Read more</div>
    </div>
    <div id="box2">
      <h1>
        <span>Events </span>
      </h1>

      <img width="450" height="250" src={events} />
      <p>
        <span>
          Integer nec lorem vel erat congue bibendum. Suspendisse potenti.
          Praesent aliquam sed nulla sit amet vulputate. Etiam feugiat tortor a
          eros fringilla feugiat. Vivamus blandit dapibus nisl, non dapibus dui
          sollicitudin ac.
        </span>
      </p>
      <div id="readM">Read more</div>
    </div>
    <div id="rule">
      <hr />
    </div>
    <div id="box3">
      <h1>
        <span>What's New</span>
      </h1>
      <p>
        <span id="bigP">Vestibulum liberotctis et quasee.</span>
      </p>
      <p>
        <span>
          Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
          porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
          eget tellus non erat lacinia fer mentu.
        </span>
      </p>
      <div id="readM">Read more</div>
    </div>
    <div id="box4">
      <h1>
        <span>Actors</span>
      </h1>
      <p>
        <span id="bigP">Sed ut perspiciatis unde omnis.</span>
      </p>
      <p>
        <span>
          Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
          porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
          eget tellus non erat lacinia fer mentu.
        </span>
      </p>
      <div id="readM">Read more</div>
    </div>
  </div>
)

export default IndexPage
