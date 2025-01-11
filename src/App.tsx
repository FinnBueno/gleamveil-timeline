import ReactHtmlParser from "react-html-parser";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { VERITAS } from "@/content/veritas";
import { Event } from "@/content/timeline";
import { Box } from "@mui/material";
import { colorDefinitions } from "@/content/colors";
import { GLEAMVEIL } from "@/content/gleamveil";

const TIMELINES = [VERITAS, GLEAMVEIL];

const sort = (a: Event, b: Event) => {
  const dateA = a.year * 100 + (a.month ?? 0) * 10 + (a.day ?? 0);
  const dateB = b.year * 100 + (b.month ?? 0) * 10 + (b.day ?? 0);
  return dateA - dateB;
};

const getColor = (key: string) => {
  return colorDefinitions[key] ?? key;
};

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {TIMELINES.map(({ events }) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Timeline sx={{ maxWidth: "100%", border: "red solid 1px" }} position='alternate'>
              {events.sort(sort).map((item, index) => {
                const previousEvent = index > 0 ? events[index - 1] : null;
                const nextEvent = index < events.length - 1 ? events[index + 1] : null;
                return (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ m: "auto 0" }} align='right' variant='body2' color='text'>
                      Year {item.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector
                        onMouseOver={() =>
                          previousEvent &&
                          alert(
                            `Time between ${previousEvent.name} and ${item.name} is ${item.year - previousEvent.year} years`
                          )
                        }
                      />
                      <TimelineDot sx={getColor(item.color)}>{item.icon}</TimelineDot>
                      <TimelineConnector
                        onMouseOver={() =>
                          nextEvent &&
                          alert(
                            `Time between ${item.name} and ${nextEvent.name} is ${nextEvent.year - item.year} years`
                          )
                        }
                      />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography variant='h6' component='span'>
                        {item.name}
                      </Typography>
                      {item.description && <Typography>{ReactHtmlParser(item.description)}</Typography>}
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </Box>
        );
      })}
    </Box>
  );
}

export default App;
