import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { ReactComponent as AccordianButton } from "../../images/Icons/Accordian-Button.svg";

export default function BasicAccordion({question,answer}) {
  return (
    <div style={{marginBottom:"18px"}}>
     
        
        
            <>
             <Accordion>
              <AccordionSummary
                expandIcon={<AccordianButton />}
              
                aria-controls="panel1a-content"
                id="panel1a-header"
                
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                 {answer}
                </Typography>
              </AccordionDetails>
              </Accordion>
              
            </>
        

      
    </div>
  );
}