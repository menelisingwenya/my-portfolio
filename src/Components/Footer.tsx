import styled from 'styled-components';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <Content>
        <Name>Menelisi Ngwenya</Name>
        <Copyright>&copy; {year} All rights reserved.</Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#0a0e14' : '#e4e4e4'};
  color: ${({ theme }) => theme.text};
  padding: 32px 60px;
  border-top: 1px solid ${({ theme }) => theme.mutedText}20;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Copyright = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.mutedText};
`;