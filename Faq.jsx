import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Container } from "@mui/material";

const accordionData = [
  {
    heading: "How does Fuboot work?",
    text: "Fuboot facilitates collaborative fund access through a shared economy model. Users create groups, invite friends/family, and contribute towards financial goals.",
  },
  {
    heading: "What are the benefits of joining Fuboot?",
    text: "Access funds without banks, low fees, global collaboration, and the ability to achieve personal and business goals.",
  },
  {
    heading: "What happens if a member defaults on payments?",
    text: "Defaulting members may face penalties, impacting their participation and benefits.",
  },
  {
    heading: "How are auction winners determined?",
    text: "Auction winners bid the amount they're willing to contribute, with the highest bidder winning the pool.",
  },
  {
    heading: "Can I withdraw from Fuboot before the end?",
    text: "Typically, withdrawals before the program ends are not allowed, promoting commitment.",
  },
  {
    heading: "What fees or charges are associated with Fuboot?",
    text: "Fuboot charges up to 5% of the amount withdrawn, providing a sustainable revenue model.",
  },
  {
    heading: "Can I participate in multiple Fuboot groups simultaneously?",
    text: "Yes, users can join and manage multiple groups, enhancing flexibility.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    event.preventDefault();
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "#F8F9F9", pb: 8 }}>
      <Typography
        variant="h6"
        sx={{
          color: "#042C5C",
          textAlign: "center",
          fontFamily: "Avenir",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "134%",
          pb: 2,
        }}
      >
        FAQs
      </Typography>
      <Container maxWidth={"md"}>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            elevation={0}
            sx={{
              borderBottom: "1px solid #042C5C",
              background: "transparent",
              elevation: 0,
              boxShadow: 0,
              "&::before": {
                backgroundColor: "transparent !important",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{ p: 2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#042C5C",
                  fontFamily: "Avenir",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%",
                }}
              >
                {item.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#042C5C",
                  fontFamily: "Avenir",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "134%",
                }}
              >
                {item.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
