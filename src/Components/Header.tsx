import styled from 'styled-components';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface HeaderProps {
  onToggle: () => void;
  isDark: boolean;
}

const Header = ({ onToggle, isDark }: HeaderProps) => {
  return (
    <Nav>
      <Logo>Menelisi Ngwenya</Logo>

      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <ToggleBtn onClick={onToggle}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </ToggleBtn>
      </NavLinks>
    </Nav>
  );
};


const Nav = styled.nav`
  background: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 15px;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const ToggleBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
  padding: 0;

  svg {
    font-size: 24px;
  }
`;
export default Header;