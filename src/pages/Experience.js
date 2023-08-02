import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WorkIcon from "@mui/icons-material/Work";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2023"
          iconStyle={{ background: '#f29f05', color: '#fff' }}
          icon={<HistoryEduIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certificate	</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera, Online</h4>
          <p>
            Google IT Support Professional Certificate	
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2023 - June 2023"
          iconStyle={{ background: '#f25c05', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Department of Science and Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Taguig City, Philippines	</h4>
          <p>
            Web Development Intern
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2021 - February 2023"
          iconStyle={{ background: '#f25c05', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">McDonald's Crew Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Anaheim, CA</h4>
          <p>
            Food Prep, Fryers and Grills, Order Assembly, Dishwashing and Cleaning, Trash Management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2019 - August 2023"
          iconStyle={{ background: '#f29f05', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">De La Salle Lipa</h3>
          <h4 className="vertical-timeline-element-subtitle">Lipa City, Philippines</h4>
          <p>
            Bachelor’s Degree in Computer Science 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#f29f05', color: '#fff' }}
          icon={<StarRoundedIcon />}
        />
      </VerticalTimeline>
    </div>
    );
}

export default Experience;