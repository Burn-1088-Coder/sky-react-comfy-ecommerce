import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about"/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="about" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam corrupti, aperiam nobis quasi earum dolore maxime, ad dolores, ex magnam eligendi rerum eos officia iste similique. Impedit qui mollitia magni rem, earum nam iusto nobis alias necessitatibus ducimus, velit tempore, totam aliquam id? Modi nesciunt magnam in aliquam at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum doloremque quaerat. Inventore pariatur nihil cupiditate illum non, voluptatum quis quasi ab quaerat earum est rerum totam eligendi dolorum aliquam dicta tempore modi molestias laboriosam quos asperiores consequuntur blanditiis aspernatur enim? Placeat ullam dicta dolor unde, modi ad quibusdam enim.</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
