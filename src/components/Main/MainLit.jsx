import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    position: absolute;
  width: 100%;
  height: 80%;
  top: 5;
  left: 1;
  background-color: #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  z-index: 99;
  margin-inline: 10px;
`
const Logo = styled.h1`
  margin: 0;
  color: #ffffff;
  font-weight: 800;
  font-size: 80px;

  @media (max-width: 650px) {
    font-size: 3rem;
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 1em;

  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 1em;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 60%;
  text-align: center;
`;

const ContactButton = styled.button`
  outline: none;
  border: 1px solid #f00050;
  background-color: transparent;
  color: #f00050;
  font-size: 2.4rem;
  /* font-weight: 700; */
  border-radius: 20px;
  padding: 24px 64px;
  margin-top: 2em;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  box-shadow: 0 0 5px 1px #3700fd, 0 0 10px 6px #3700fd, 0 0 15px 12px #3700fd;

  &:hover {
    /* background-color: transparent; */
    border: 4px solid #f00050;
    box-shadow: 0 0 40px 12px #f00050, 0 0 80px 24px #f00050,
      0 0 160px 48px #f00050;
    background: linear-gradient(103.22deg, #fc1577 -13.86%, #00249e 99.55%);
  }
`;

export function MainLit() {
    <MainContainer>
        <Logo className="Contact__header">Joel Borofsky</Logo>
        <Slogan className="Contact__slogan">Let's Move Forward Together</Slogan>
        <Paragraph className="Contact__content">
            Every object and animation in this section has been coded by me via
            React-Three-Fiber.
        </Paragraph>
        <Paragraph className="Contact__slogan-bottom">
            Imagine what I can do for you
        </Paragraph>
        <a href="mailto: joelborofskydev@gmail.com">
            <ContactButton className="Contact__button" id="contact">
                Hire Me
            </ContactButton>
        </a>
    </MainContainer>
}