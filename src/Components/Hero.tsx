import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';

const CssSvgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H7.664l.24 2.573h6.987l-.39 4.089-2.49.744-2.607-.764-.175-1.776H6.78l.33 3.596L12 19.766l4.885-1.532.727-8.118H9.585l-.208-2.39h8.636l.199-2.243z"/>
  </svg>
);

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
          <DecorLeft>{'<'}</DecorLeft>
          <GlowRing />
          <Photo src="./Images/profile.png" alt="Menelisi Ngwenya" />
          <DecorRight>{'>'}</DecorRight>
        </PhotoWrapper>
      </RightSide>

      <SkillsRow>
        <SkillsContainer>
          <SkillBadge>
            <SkillIcon><SkillImg src="./Images/html_5_logo.png" alt="HTML5" /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon $color="#1572B6"><CssSvgIcon /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><SkillImg src="./Images/js-logo.png" alt="JavaScript" /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><SkillImg src="./Images/React-logo.png" alt="React" /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><SkillImg src="./Images/vite-logo.png" alt="Vite" /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon><SkillImg src="./Images/git-logo.png" alt="Git" /></SkillIcon>
          </SkillBadge>
          <SkillBadge>
            <SkillIcon $color=""><GitHubIcon /></SkillIcon>
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
  color: #ffffff;
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
  padding: 40px 0 48px 0;
  border-top: 1px solid ${({ theme }) => theme.mutedText}30;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  align-items: center;
`;


const SkillBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

const SkillIcon = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  font-size: 60px;
  line-height: 1;   
  color: ${({ $color }) => $color || 'inherit'};

  svg {
    font-size: 60px;
  }
`;

const SkillImg = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;