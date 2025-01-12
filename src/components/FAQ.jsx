import React, { useState, memo } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PRIMARY_COLOR = '#FFB26B';
const SECONDARY_COLOR = '#FF7B54';
const BACKGROUND_COLOR = 'rgba(26, 31, 53, 0.6)';
const TEXT_COLOR = '#B8BCCB';

const GlassAccordion = styled(Accordion)(({ theme }) => ({
  background: BACKGROUND_COLOR,
  backdropFilter: 'blur(15px)',
  borderRadius: '16px !important',
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
  '& .number': {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: "'Clash Display', sans-serif",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    alignItems: 'center',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: PRIMARY_COLOR,
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s',
    '&.Mui-expanded': {
      transform: 'rotate(180deg)',
    },
  },
}));

const FAQSection = memo(() => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const faqs = [
    { question: "Who can participate in the entrepreneur hackathon?", answer: "The event is open to tech enthusiasts, aspiring entrepreneurs, students, graduates, industry professionals, and creative problem-solvers. Participants can join as individuals or in teams of up to 3 members." },
    { question: "What is the registration fee?", answer: "Please refer to the event website for specific registration deadlines and more details." },
    { question: "What are the prizes for the winners?", answer: "The 1st prize winner will receive ₹30,000, the 2nd prize winner will receive ₹20,000, and the 3rd prize winner will receive ₹10,000." },
    { question: "Do I need to have a startup idea to participate?", answer: "No, you don't need to have a startup idea. The hackathon is for anyone passionate about innovation and solving business challenges." },
    { question: "Can I participate if I don't have coding skills?", answer: "Yes! The hackathon is open to people with various skill sets, including business, design, and marketing." },
    { question: "What is the format of the hackathon?", answer: "Participants will work in teams to create solutions to real-world business problems. There will be mentorship, and at the end, teams will pitch their ideas to a panel of judges." },
    { question: "How are the teams formed?", answer: "You can form teams ahead of the event or network with other participants to form teams during the hackathon." },
    { question: "Do I need to bring anything to the event?", answer: "Bring your laptop, chargers, and any other materials you'll need for a day of collaboration. Necessary tools and resources will be provided." },
    { question: "How will the projects be judged?", answer: "Projects will be judged based on innovation, feasibility, impact, and overall quality. A panel of industry experts will evaluate the solutions." },
    { question: "When is the registration deadline?", answer: "Please refer to the event website for specific registration deadlines and more details." }
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 2, md: 4 },
        px: { xs: 2, sm: 4 },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0C1B 0%, #1A1F35 100%)',
        backgroundImage: `
          radial-gradient(circle at 90% 10%, rgba(255, 123, 84, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 10% 90%, rgba(178, 84, 255, 0.1) 0%, transparent 40%)
        `,
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          overflow: 'hidden',
          mx: 'auto',
          maxWidth: '1600px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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

        <Grid container spacing={isMobile ? 2 : 4}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} md={6} key={index}>
              <GlassAccordion 
                expanded={expanded === `panel-${index}`} 
                onChange={handleChange(`panel-${index}`)}
              >
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <IconBadge>
                    <span className="number">{index + 1}</span>
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
                </StyledAccordionSummary>
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
      </Box>
    </Box>
  );
});

export default FAQSection;