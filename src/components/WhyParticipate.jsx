import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Trophy, 
  Users, 
  Briefcase, 
  Lightbulb,
  GraduationCap,
  Rocket,
  Target
} from 'lucide-react';

const StyledCard = styled(Card)({
  background: 'rgba(13, 16, 31, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(20, 24, 45, 0.8)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  },
});

const IconWrapper = styled(Box)({
  background: 'linear-gradient(45deg, #FF7B54 30%, #FFB26B 90%)',
  borderRadius: '12px',
  padding: '12px',
  display: 'inline-flex',
  marginBottom: '20px',
});

const WhyParticipate = () => {
  const benefits = [
    {
      icon: <GraduationCap size={24} />,
      title: "Learn from Industry Experts",
      description: "Gain invaluable insights and practical knowledge from seasoned professionals, mentors, and industry leaders."
    },
    {
      icon: <Trophy size={24} />,
      title: "Win Exciting Prizes",
      description: "Compete to win amazing cash prizes, exclusive tools, and resources to kickstart your entrepreneurial journey."
    },
    {
      icon: <Users size={24} />,
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals, potential co-founders, and investors who share your passion for innovation."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Build Your Portfolio",
      description: "Work on a real-world project that adds value to your resume and showcases your skills to future employers."
    },
  
    {
      icon: <Rocket size={24} />,
      title: "Kickstart Your Startup Journey",
      description: "Turn your innovative idea into a working prototype and take the first steps towards building your dream startup."
    },
    {
      icon: <Target size={24} />,
      title: "Solve Real Problems",
      description: "Work on meaningful challenges and create solutions that have a lasting impact on industries and communities."
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, #0A0C1B 0%, #1A1F35 100%)',
        backgroundImage: `radial-gradient(circle at 10% 90%, rgba(255, 123, 84, 0.1) 0%, transparent 40%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontFamily: "'Clash Display', sans-serif",
              background: 'linear-gradient(45deg, #FFFFFF 30%, #FFB26B 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Why Participate
          </Typography>
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
            Discover the incredible opportunities and benefits awaiting you at our hackathon
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={4} 
          sx={{
            maxWidth: '1600px',
            mx: 'auto',
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardContent sx={{ p: 4 }}>
                  <IconWrapper>
                    {React.cloneElement(benefit.icon, { 
                      color: 'white',
                      strokeWidth: 2
                    })}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: '#FFB26B',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#B8BCCB',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    {benefit.description}
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

export default WhyParticipate;