import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Container,
  Avatar,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
const StyledCard = styled(Card)({
  height: '100%',
  background: 'rgba(13, 16, 31, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(20, 24, 45, 0.8)',
  },
});

const IconAvatar = styled(Avatar)({
  width: 56,
  height: 56,
  fontSize: '1.75rem',
  background: 'linear-gradient(45deg, #FF7B54 30%, #FFB26B 90%)',
  boxShadow: '0 3px 15px rgba(255, 123, 84, 0.3)',
});

const GradientTypography = styled(Typography)({
  fontFamily: "'Clash Display', sans-serif",
  background: 'linear-gradient(45deg, #FFFFFF 30%, #FFB26B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
});

const WhoCanParticipate = () => {
  const sections = [
    {
      icon: "💡",
      title: "Aspiring Entrepreneurs",
      description: "Passionate individuals looking to bring their innovative ideas to life",
      subDescription: "Launch your own startups and turn your entrepreneurial dreams into reality through hands-on experience and mentorship."
    },
    {
      icon: "💻",
      title: "Developers & Designers",
      description: "Technical creators and UX specialists",
      subDescription: "Build digital products, from software to websites, and design seamless user experiences that solve real-world problems."
    },
    {
      icon: "🚀",
      title: "Students of All Years",
      description: "Open to every academic level",
      subDescription: "Whether you're just starting your studies or are in your final year, bring your unique perspective and enthusiasm to the challenge."
    },
    {
      icon: "👥",
      title: "Teams of Up to 3 Members",
      description: "Collaborative innovation",
      subDescription: "Form a team of up to 3 members to combine skills, collaborate effectively, and bring your ideas to fruition."
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, #0A0C1B 0%, #1A1F35 100%)',
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255, 123, 84, 0.1) 0%, transparent 40%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <GradientTypography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Who Can Participate
          </GradientTypography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              px: 3,
              color: '#A0A3B1',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
            }}
          >
            Whether you're a seasoned entrepreneur, a budding innovator, or a visionary 
            problem-solver, our entrepreneurship hackathon welcomes you to showcase your skills.
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: '1600px',
            mx: 'auto',
            px: { xs: 2, md: 4 },
          }}
        >
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <StyledCard>
                <CardContent sx={{ p: 4 }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <IconAvatar>{section.icon}</IconAvatar>
                    <Box ml={2}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
                          color: '#FFB26B',
                          fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                      >
                        {section.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ color: '#A0A3B1' }}
                      >
                        {section.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#B8BCCB',
                      lineHeight: 1.7,
                    }}
                  >
                    {section.subDescription}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoCanParticipate;