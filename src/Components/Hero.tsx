import styled from 'styled-components';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import BoltIcon from '@mui/icons-material/Bolt';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <Wrapper id="home">
      <LeftSide>
        <Greeting>
          Hello<Dot>.</Dot>
        </Greeting>

        <SubGreeting>I'm Menelisi Ngwenya</SubGreeting>

        <Title>A Software Developer</Title>

        <ButtonGroup>
          <SolidBtn href="#contact">Got a project?</SolidBtn>
          <OutlineBtn href="/resume.pdf" target="_blank">My Resume</OutlineBtn>
        </ButtonGroup>
      </LeftSide>

      <RightSide>
        <PhotoWrapper>
          <DecorLeft>&lt;</DecorLeft>
          <GlowRing />
          <Photo src="./Images/profile.png" alt="Menelisi Ngwenya" />
          <DecorRight>&gt;</DecorRight>
        </PhotoWrapper>
      </RightSide>

      <SkillsRow>
        <SkillsContainer>
          <SkillBadge>
            <SkillIcon><HtmlIcon /></SkillIcon>
            HTML5
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><CssIcon /></SkillIcon>
            CSS
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><JavascriptIcon /></SkillIcon>
            JavaScript
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><CodeIcon /></SkillIcon>
            React
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><BoltIcon /></SkillIcon>
            Vite
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><AltRouteIcon /></SkillIcon>
            Git
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><GitHubIcon /></SkillIcon>
            GitHub
          </SkillBadge>
        </SkillsContainer>
      </SkillsRow>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  position: relative;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Greeting = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin: 0;
`;

const Dot = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const SubGreeting = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const SolidBtn = styled.a`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }
`;

const OutlineBtn = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.text};
  padding: 10px 24px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlowRing = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.accent};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 80px ${({ theme }) => theme.accent}50;
  z-index: 1;
`;

const Photo = styled.img`
  position: absolute;
  bottom: 0;
  height: 480px;
  object-fit: contain;
  z-index: 2;
`;

const DecorLeft = styled.span`
  position: absolute;
  left: 0px;
  top: 20%;
  transform: translateY(-50%);
  font-size: 55px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.accent};
  z-index: 3;
`;

const DecorRight = styled.span`
  position: absolute;
  right: 0px;
  top: 60%;
  transform: translateY(-50%);
  font-size: 55px;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.accent};
  z-index: 3;
`;

const SkillsRow = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  padding: 32px 0 48px 0;
  border-top: 1px solid ${({ theme }) => theme.mutedText}30;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#161b22' : '#e4e4e4'};
  border: 1px solid ${({ theme }) => theme.mutedText}25;
  border-radius: 8px;
  padding: 10px 18px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent}60;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 1;

  svg {
    font-size: 20px;
  }
`;
