import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper id="about">
      <Content>
        <LeftSide>
          <SectionLabel>About Me</SectionLabel>
          <Heading>
            Turning ideas into <Accent>reality</Accent> through code.
          </Heading>
          <Description>
            I'm a software developer with a passion for building clean, efficient, and user-friendly applications.
            I specialize in modern web technologies and enjoy solving complex problems with simple solutions.
            Whether working on front-end interfaces or full-stack applications, I bring creativity and attention to detail
            to every project.
          </Description>
          <StatsRow>
            <Stat>
              <StatNumber>2+</StatNumber>
              <StatLabel>Years of Experience</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>10+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>5+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </Stat>
          </StatsRow>
        </LeftSide>

        <RightSide>
          <CodeBlock>
            <CodeLine><Purple>const</Purple> developer = <Purple>new</Purple> <Blue>Developer</Blue>()</CodeLine>
            <CodeLine><Purple>const</Purple> skills = [</CodeLine>
            <CodeLine>  <Green>'React'</Green>,</CodeLine>
            <CodeLine>  <Green>'TypeScript'</Green>,</CodeLine>
            <CodeLine>  <Green>'Node.js'</Green>,</CodeLine>
            <CodeLine>  <Green>'Python'</Green></CodeLine>
            <CodeLine>]</CodeLine>
            <CodeLine><Purple>while</Purple> (<Teal>true</Teal>) {'{'}</CodeLine>
            <CodeLine>  developer<Teal>.learn</Teal>(skills)</CodeLine>
            <CodeLine>  developer<Teal>.build</Teal>(<Teal>new</Teal> <Blue>Project</Blue>())</CodeLine>
            <CodeLine>  developer<Teal>.grow</Teal>()</CodeLine>
            <CodeLine>{'}'}</CodeLine>
          </CodeBlock>
        </RightSide>
      </Content>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 100px 60px;
  border-top: 1px solid ${({ theme }) => theme.mutedText}20;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionLabel = styled.span`
  color: ${({ theme }) => theme.accent};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: ${({ theme }) => theme.mutedText};
  margin: 0;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 16px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatNumber = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
`;

const StatLabel = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.mutedText};
  letter-spacing: 1px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeBlock = styled.div`
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#161b22' : '#e8e8e8'};
  border: 1px solid ${({ theme }) => theme.mutedText}30;
  border-radius: 12px;
  padding: 32px;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 14px;
  line-height: 2;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

const CodeLine = styled.div`
  white-space: nowrap;
`;

const Purple = styled.span`
  color: #c678dd;
`;

const Blue = styled.span`
  color: #61afef;
`;

const Green = styled.span`
  color: #98c379;
`;

const Teal = styled.span`
  color: #56b6c2;
`;