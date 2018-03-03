import React from 'react'
import Link from 'gatsby-link'
import banner from '../components/images/GS_Banner.png'

const IndexPage = () => (
  <div>
    <div id="slide">
      <img
        width="940"
        height="495"
        src={banner}
      />
    </div>
    <div id="">
      <h1>
        <span>Welcome</span>
      </h1>
      <img src="https://source.unsplash.com/random/420x200" />
      <p>
        <span>
          Pellentesque vel nisl in diam congue luctus. Nulla feugiat ipsum
          laoreet risus ultricies molestie. Suspendisse ornare rutrum quam, sit
          amet congue ex iaculis sit amet. Nullam mi ipsum, iaculis in erat a,
          finibu suscipit quam.
        </span>
      </p>
      <div>Read more</div>
    </div>
    <div id="">
      <h1>
        <span>What's New</span>
      </h1>

      <img src="https://source.unsplash.com/random/420x200" />
      <p>
        <span>
          Integer nec lorem vel erat congue bibendum. Suspendisse potenti.
          Praesent aliquam sed nulla sit amet vulputate. Etiam feugiat tortor a
          eros fringilla feugiat. Vivamus blandit dapibus nisl, non dapibus dui
          sollicitudin ac.
        </span>
      </p>
      <div>Read more</div>
    </div>
    <div id="">
      <hr />
    </div>
    <div id="">
      <h1>
        <span>Events</span>
      </h1>
      <p>
        <span>Vestibulum liberotctis et quasee.</span>
      </p>
      <p>
        <span>
          Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
          porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
          eget tellus non erat lacinia fer mentu.
        </span>
      </p>
      <div>Read more</div>
    </div>
    <div id="">
      <h1>
        <span>Actors</span>
      </h1>
      <p>
        <span>Sed ut perspiciatis unde omnis.</span>
      </p>
      <p>
        <span>
          Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
          porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
          eget tellus non erat lacinia fer mentu.
        </span>
      </p>
      <div>Read more</div>
    </div>
  </div>
)

export default IndexPage
