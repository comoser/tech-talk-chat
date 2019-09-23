import React from 'react';
import dotenv from 'dotenv';

import { Navbar, Section, ChatBox, Main } from '../components';

dotenv.config();

const Index = () => {
  return (
    <>
    <Navbar />
    <Main>
      <Section>
        <ChatBox />
      </Section>
    </Main>
  </>
  );
};

export default Index;
