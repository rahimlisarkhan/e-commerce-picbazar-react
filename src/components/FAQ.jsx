import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import translate from "../lang/translate";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightBold,
  },
  paragraph:{
    fontSize: theme.typography.pxToRem(30),
  }
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <div className="faq-container">
        <h1>F.A.Q</h1>
      
      <div className="faq-container__content">
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{translate("service1")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.paragraph}>
               {translate("service1answer")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{translate("service2")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.paragraph}>
               {translate("service2answer")}
              </Typography>
            </AccordionDetails>
          </Accordion>
      
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{translate("service3")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.paragraph}>
               {translate("service3answer")}
              </Typography>
            </AccordionDetails>
          </Accordion>
      
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{translate("service4")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.paragraph}>
               {translate("service4answer")}
              </Typography>
            </AccordionDetails>
          </Accordion>
      {/* <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Disabled Accordion
              </Typography>
            </AccordionSummary>
          </Accordion>
        </div> */}
      </div>
    </div>
    </div>
  );
}
