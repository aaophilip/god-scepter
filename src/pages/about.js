import React from 'react'
import Link from 'gatsby-link'

import '../layouts/index.css'
import aboutUs from '../components/images/aboutUs.jpg'
import shows from '../components/images/showsReal.jpg'
import comingSoon from '../components/images/comingSoon.jpg'
import t1 from '../components/images/tm1.jpg'
import t2 from '../components/images/tm2.jpg'
import t3 from '../components/images/tm3.jpg'
import t4 from '../components/images/tm4.jpg'

const AboutPage = () => (
  <div id="aboutWrap">
    <div id="aboutUs">
      <h1>
        <span>ABOUT US</span>
      </h1>
      <img width="280" height="147" src={aboutUs}/>
      <p>
        <span>
          In vehicula leo sem, et semper risus iaculis sed. Quisque mattis urna
          varius dui fermentum finibus. Aliquam congue viverra mattis. Vivamus
          consequat a massa id convallis.
        </span>
      </p>
    </div>
    <div id="shows">
      <h1>
        <span>SHOWS</span>
      </h1>
      <img width="280" height="147" src={shows}/>
      <p>
        <span>
          Aliquam commodo tempor magna, quis aliquam metus. Vestibulum semper
          neque eget libero porttitor condimentum. Nullam posuere tellus ex, ut
          dictum nunc accumsan a.
        </span>
      </p>
    </div>
    <div id="coming">
      <h1>
        <span>COMING SOON</span>
      </h1>
      <img width="280" height="147" src={comingSoon}/>
      <p>
        <span>
          Proin ac venenatis odio. Nullam efficitur lectus in pharetra lacinia.
          In eleifend purus velit, in porta lacus tempor vel. Duis luctus
          placerat velit. Sed malesuada viverra maximus. Donec id ornare ex, non
          mattis enim.
        </span>
      </p>
    </div>

    <div id="aboutHr">
      <hr />
    </div>

    <div id="teamH">
      <h1>
        <span>TEAM</span>
      </h1>
    </div>

    <div id="team1">
      <img width="213" height="147" src={t1} />
      <div>
        <p>
          <span>
            "Viverra sed nullnec porta dim ssae diam lorem interdum vitaes
            aelerisque vitae pedenec eget tellus non erat lacinia fer mentumonec
            in velit vel ipsum auctorul vinarroin ullamcorper urna eonsect etuer
            adispiscing aliese. vestibulum molestie lacus."
          </span>
        </p>
        <p>
          <span id="tSpanName">Micheal O. Ogunniyi</span>
        </p>
      </div>
      <img width="213" height="147" src={t2} />
      <div>
        <p>
          <span>
            "Viverra sed nullnec porta dim ssae diam lorem interdum vitaes
            aelerisque vitae pedenec eget tellus non erat lacinia fer mentumonec
            in velit vel ipsum auctorul vinarroin ullamcorper urna eonsect etuer
            adispiscing aliese. vestibulum molestie lacus."
          </span>
        </p>
        <p>
          <span id="tSpanName">Dan Tomson</span>
        </p>
      </div>
    </div>

    <div id="team2">
      <div>
        <p>
          <span>
            "Viverra sed nullnec porta dim ssae diam lorem interdum vitaes
            aelerisque vitae pedenec eget tellus non erat lacinia fer mentumonec
            in velit vel ipsum auctorul vinarroin ullamcorper urna eonsect etuer
            adispiscing aliese. vestibulum molestie lacus."
          </span>
        </p>
        <p>
          <span id="tSpanName">Dan Tomson</span>
        </p>
      </div>
      <img width="213" height="147" src={t3} />
      <div>
        <p>
          <span>
            "Viverra sed nullnec porta dim ssae diam lorem interdum vitaes
            aelerisque vitae pedenec eget tellus non erat lacinia fer mentumonec
            in velit vel ipsum auctorul vinarroin ullamcorper urna eonsect etuer
            adispiscing aliese. vestibulum molestie lacus."
          </span>
        </p>
        <p>
          <span id="tSpanName">Dan Tomson</span>
        </p>
      </div>
      <img width="213" height="147" src={t4} />
    </div>

    <div id="aboutHr2">
      <hr />
    </div>

    <div id="partners">
      <h1>
        <span>PARTNERS</span>
      </h1>
    </div>

    <div id="partIcon">
      <img
        width="107px"
        height="101px"
        src="https://source.unsplash.com/random/100x100"
      />
      <img
        width="107px"
        height="101px"
        src="https://source.unsplash.com/random/100x100"
      />
      <img
        width="107px"
        height="101px"
        src="https://source.unsplash.com/random/100x100"
      />
      <img
        width="107px"
        height="101px"
        src="https://source.unsplash.com/random/100x100"
      />
      <img
        width="107px"
        height="101px"
        src="https://source.unsplash.com/random/100x100"
      />
    </div>
  </div>
)

export default AboutPage
