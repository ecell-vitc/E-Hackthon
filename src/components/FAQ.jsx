import React, { useState, memo } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Constants for colors
const PRIMARY_COLOR = '#FFB26B';
const SECONDARY_COLOR = '#FF7B54';
const BACKGROUND_COLOR = 'rgba(26, 31, 53, 0.6)';
const TEXT_COLOR = '#B8BCCB';

// Styled Accordion Component
const GlassAccordion = styled(Accordion)(({ theme }) => ({
  background: BACKGROUND_COLOR,
  backdropFilter: 'blur(15px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  '&:before': {
    display: 'none',
  },
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
}));

// Styled Icon Badge
const IconBadge = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${SECONDARY_COLOR} 30%, ${PRIMARY_COLOR} 90%)`,
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
}));

// FAQ Component
const FAQSection = memo(() => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // FAQ Data
  const faqs = [
    { question: "WHO CAN PARTICIPATE IN THE ENTREPRENEUR HACKATHON", answer: "The event is open to tech enthusiasts, aspiring entrepreneurs, students, graduates, industry professionals, and creative problem-solvers. Participants can join as individuals or in teams of up to 3 members." },
    { question: "WHAT IS THE REGISTRATION FEE?", answer: "The registration fee is ₹250 per team. Each team can consist of up to three members." },
    { question: "WHAT ARE THE PRIZES FOR THE WINNERS?", answer: "The 1st prize winner will receive ₹30,000, the 2nd prize winner will receive ₹20,000, and the 3rd prize winner will receive ₹10,000." },
    { question: "DO I NEED TO HAVE A STARTUP IDEA TO PARTICIPATE?", answer: "No, you don't need to have a startup idea. The hackathon is for anyone passionate about innovation and solving business challenges." },
    { question: "CAN I PARTICIPATE IF I DON'T HAVE CODING SKILLS?", answer: "Yes! The hackathon is open to people with various skill sets, including business, design, and marketing." },
    { question: "WHAT IS THE FORMAT OF THE HACKATHON?", answer: "Participants will work in teams to create solutions to real-world business problems. There will be mentorship, and at the end, teams will pitch their ideas to a panel of judges." },
    { question: "HOW ARE THE TEAMS FORMED?", answer: "You can form teams ahead of the event or network with other participants to form teams during the hackathon." },
    { question: "DO I NEED TO BRING ANYTHING TO THE EVENT?", answer: "Bring your laptop, chargers, and any other materials you'll need for a day of collaboration. Necessary tools and resources will be provided." },
    { question: "HOW WILL THE PROJECTS BE JUDGED?", answer: "Projects will be judged based on innovation, feasibility, impact, and overall quality. A panel of industry experts will evaluate the solutions." },
    { question: "WHEN IS THE REGISTRATION DEADLINE?", answer: "Please refer to the event website for specific registration deadlines and more details." }
  ];

  // Accordion expansion handler
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(135deg, #0A0C1B 0%, #1A1F35 100%)',
        backgroundImage: `
          radial-gradient(circle at 90% 10%, rgba(255, 123, 84, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 10% 90%, rgba(178, 84, 255, 0.1) 0%, transparent 40%)
        `,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontFamily: "'Clash Display', sans-serif",
              background: `linear-gradient(45deg, #FFFFFF 30%, ${PRIMARY_COLOR} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        {/* FAQ Grid */}
        <Grid container spacing={isMobile ? 2 : 4} sx={{ maxWidth: '1600px', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index}>
              <GlassAccordion expanded={expanded === `panel-${index}`} onChange={handleChange(`panel-${index}`)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: PRIMARY_COLOR, fontSize: '1.5rem' }} />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  sx={{
                    alignItems: 'center',
                    position: 'relative',
                    '& .MuiAccordionSummary-content': { alignItems: 'center', margin: '12px 0' }
                  }}
                >
                  {/* Question Number */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      position: 'absolute',
                      left: -40,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: `${PRIMARY_COLOR}80`,
                      fontWeight: 'bold',
                      fontSize: '2rem',
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    {index + 1}
                  </Typography>

                  <IconBadge>
                    {/* No Icon now */}
                  </IconBadge>
                  <Typography
                    variant="h6"
                    sx={{
                      color: PRIMARY_COLOR,
                      fontWeight: 600,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      color: TEXT_COLOR,
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      pl: { xs: 2, md: 8 },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </GlassAccordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

export default FAQSection;
