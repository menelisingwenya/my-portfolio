import { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useTheme } from 'styled-components';

interface FormErrors {
  username?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.background === '#0d1117';

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formValues.username.trim().length < 2) {
      newErrors.username = 'Username must be at least 2 characters';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [field]: e.target.value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'bb4d18f4-3802-41a8-a751-1abfef237c2b',
          name: formValues.username,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormValues({ username: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const muiTheme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: theme.accent,
      },
      text: {
        primary: theme.text,
        secondary: theme.mutedText,
      },
      background: {
        paper: isDark ? 'rgba(22, 27, 34, 0.7)' : 'rgba(232, 232, 232, 0.7)',
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: theme.text,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: theme.mutedText,
            '&.Mui-focused': {
              color: theme.accent,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: `${theme.mutedText}40`,
          },
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `${theme.accent}70`,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.accent,
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? 'rgba(22, 27, 34, 0.7)' : 'rgba(232, 232, 232, 0.7)',
            '&:hover': {
              backgroundColor: isDark ? 'rgba(22, 27, 34, 0.9)' : 'rgba(232, 232, 232, 0.9)',
            },
            '&.Mui-focused': {
              backgroundColor: isDark ? 'rgba(22, 27, 34, 0.9)' : 'rgba(232, 232, 232, 0.9)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottomColor: `${theme.mutedText}40`,
            },
            '&:hover:not(.Mui-disabled)::before': {
              borderBottomColor: `${theme.accent}70`,
            },
            '&::after': {
              borderBottomColor: theme.accent,
            },
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color: theme.mutedText,
          },
        },
      },
    },
  });

  return (
    <Wrapper id="contact">
      <Content>
        <LeftColumn>
          <Heading>Let's Connect</Heading>
          <Description>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </Description>
          <SocialRow>
            <SocialLink href="https://github.com/menelisingwenya/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/Menelisi-Sandile-Ngwenya" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </SocialLink>
          </SocialRow>
        </LeftColumn>

        <RightColumn>
          <MuiThemeProvider theme={muiTheme}>
            <Form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Username"
                value={formValues.username}
                onChange={handleChange('username')}
                error={!!errors.username}
                helperText={errors.username || ''}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                value={formValues.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email || ''}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Subject"
                type="text"
                value={formValues.subject}
                onChange={handleChange('subject')}
                error={!!errors.subject}
                helperText={errors.subject || ''}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Message"
                multiline
                rows={5}
                value={formValues.message}
                onChange={handleChange('message')}
                error={!!errors.message}
                helperText={errors.message || ''}
                fullWidth
              />
              {submitted ? (
                <SuccessMsg>Message sent successfully! I'll get back to you soon.</SuccessMsg>
              ) : (
                <SendBtn type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </SendBtn>
              )}
            </Form>
          </MuiThemeProvider>
        </RightColumn>
      </Content>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 100px 60px;
  border-top: 1px solid ${({ theme }) => theme.mutedText}20;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.accent}15 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 1;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.mutedText};
  margin: 0;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  transition: color 0.2s ease;

  svg {
    font-size: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SendBtn = styled.button`
  background: ${({ theme }) => theme.accent};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMsg = styled.div`
  background: ${({ theme }) =>
    theme.background === '#0d1117' ? '#162b22' : '#e6f7e6'};
  border: 1px solid ${({ theme }) => theme.accent}40;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;
