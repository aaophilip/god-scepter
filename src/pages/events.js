import React from 'react'
import Link from 'gatsby-link'

import sp from '../components/images/sp.jpg'

const EventsPage = () => (
  <div id="eveWrap">
    <div id="eve1">
      <h1>
        <span>PERFORMANCES AND EVENTS</span>
      </h1>
    </div>

    <div id="eve2">
      <div id="eveD1" className="dateCirc">
        <span className="date">25 DEC</span>
      </div>

      <div id="eveDesc">
        <p>
          <span>
            Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
            porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
            eget tellus non erat lacinia fer mentuec in velit vel ipsum
            auctorulvinar. Proin ullamcorper urna eonsect etuer adipiscing
            eliese.nt vestibulum molestie lacus. Aenean nonum mydrerituris.
          </span>
        </p>
      </div>

      <div id="eveD2" className="dateCirc">
        <span className="date">23 JUL</span>
      </div>

      <div id="eveDesc">
        <p>
          <span>
            Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
            porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
            eget tellus non erat lacinia fer mentuec in velit vel ipsum
            auctorulvinar. Proin ullamcorper urna eonsect etuer adipiscing
            eliese.nt vestibulum molestie lacus. Aenean nonum mydrerituris.
          </span>
        </p>
      </div>
    </div>

    <div id="eve3">
      <p id="eve3RM1">
        <span id="readM">READ MORE</span>
      </p>

      <p id="eve3RM2">
        <span id="readM">READ MORE</span>
      </p>
    </div>

    <div id="eve4">
      <div id="eveD3" className="dateCirc">
        <span className="date">21 MAR</span>
      </div>

      <div id="eveDesc">
        <p>
          <span>
            Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
            porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
            eget tellus non erat lacinia fer mentuec in velit vel ipsum
            auctorulvinar. Proin ullamcorper urna eonsect etuer adipiscing
            eliese.nt vestibulum molestie lacus. Aenean nonum mydrerituris.
          </span>
        </p>
      </div>

      <div id="eveD4" className="dateCirc">
        <span className="date">13 SEP</span>
      </div>

      <div id="eveDesc">
        <p>
          <span>
            Nam elit magna endrerit sit amet tincidunt ac viverra sed nullnec
            porta dim ssae diam lorem interdum vitaes aelerisque vitae pedenec
            eget tellus non erat lacinia fer mentuec in velit vel ipsum
            auctorulvinar. Proin ullamcorper urna eonsect etuer adipiscing
            eliese.nt vestibulum molestie lacus. Aenean nonum mydrerituris.
          </span>
        </p>
      </div>
    </div>

    <div id="eve5">
      <p id="eve5RM1">
        <span id="readM">READ MORE</span>
      </p>

      <p id="eve5RM2">
        <span id="readM">READ MORE</span>
      </p>
    </div>

    <div id="eve6">
      <div id="eve6-1">
        <h1>
          <span>Special performance</span>
        </h1>
      </div>

      <div id="eve6-2">
        <img id="eve6img"
          width="259px"
          height="255px"
          src={sp}
        />

        <div className = "eve6F">
          <p>
            <span id="bigP">PRAESENT JUSTO DOLOR, LOBORTIS QUIS, LOBORTIS</span>
          </p>

          <p >
            <span>
              Viverra sed nullnec porta dim ssae diam lorem interdum vitaes
              aelerisque vitae pedenec eget tellus non erat lacinia fer mentumonec
              in velit vel ipsum auctorul vinarroin ullamcorper urna eonsect etuer
              adipiscing eliesevestibulum molestie lacus. Aenean nonum
              mydrerituris. Phasell. Fusce suscipit varius mi. Cum sociis natoque
              penatibus et magnis dis parturient montes nascetur ridiculus mus.
              Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio gravida
              atcursus nec luctus aorem. Maecenas tristique orci ac sem.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default EventsPage
