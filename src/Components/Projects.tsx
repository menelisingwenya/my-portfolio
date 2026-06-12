import { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from '../projects.json';

type Tab = 'All' | 'Frontend' | 'Backend' | 'Full Stack';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: Tab;
  liveUrl: string;
  repoUrl: string;
}

const projects = projectsData.projects as Project[];

const tabs: Tab[] = ['All', 'Frontend', 'Backend', 'Full Stack'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Tab>('All');

  const filtered =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <Wrapper id="projects">
      <SectionLabel>Portfolio</SectionLabel>
      <Heading>My Recent <Accent>Projects</Accent></Heading>

      <Tabs>
        {tabs.map((tab) => (
          <TabBtn
            key={tab}
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabBtn>
        ))}
      </Tabs>

      <Grid>
        {filtered.map((project, index) => (
          <Card key={index}>
            <CardImage>
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <Placeholder>{project.title.charAt(0)}</Placeholder>
              )}
            </CardImage>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
              <CardDesc>{project.description}</CardDesc>
              <Tags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
              <ButtonRow>
                <LiveBtn href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <OpenInNewIcon style={{ fontSize: 16 }} />
                  Live Demo
                </LiveBtn>
                <RepoBtn href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon style={{ fontSize: 16 }} />
                  GitHub
                </RepoBtn>
              </ButtonRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 100px 60px;
  border-top: 1px solid ${({ theme }) => theme.mutedText}20;
  text-align: center;
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
  margin: 16px 0 0 0;
  line-height: 1.3;
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const TabBtn = styled.button<{ $active: boolean }>`
  background: ${({ theme, $active }) =>
    $active ? theme.accent : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? '#ffffff' : theme.mutedText};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.accent : theme.mutedText}40;
  padding: 8px 22px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme, $active }) =>
      $active ? theme.accent : theme.accent}80;
    color: ${({ theme, $active }) =>
      $active ? '#ffffff' : theme.accent};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const Card = styled.div`
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#161b22' : '#e8e8e8'};
  border: 1px solid ${({ theme }) => theme.mutedText}20;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.accent}50;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#1c2333' : '#d4d4d4'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Placeholder = styled.span`
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.mutedText}60;
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.mutedText};
  margin: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
`;

const LiveBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const RepoBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.mutedText}50;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.accent}80;
    color: ${({ theme }) => theme.accent};
  }
`;

const Tag = styled.span`
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#131a24' : '#f0f0f0'};
  color: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent}30;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
`;