import React from 'react';
import { Slide, Typography, Paper, Chip } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import CV from './cv'


const styles = {
    Paper: {
        padding: 20,
        margin: 10,
    }
}


const cvData = {
    skills: [
        "Flexible and ready to work using different methodologies",
        "Flexible and ready to work using different methodologies",
        "Experienced in the agile development approach",
        "Knowledge of Java, JavaScript, C#, Python, C, C++, PHP languages",
        "Experience using SQL databases",
        "Experience in developing Windows, Linux, Android and cross - platform applications",
        "Always striving to improve"
    ],
    work_experience: [{
        date_start: "",
        date_end: "",
        title: "",
        company: "",
        responsibilities: [],
        skills: [],

    },
    {
        date_start: "February 2017 ",
        date_end: "Ongoing",
        title: "Software/Full-Stack Developer",
        company: "University of Primorska",
        company_website: "www.upr.si",
        responsibilities: [
            "Developing and maintaining the university’s information system",
            "Designing and coding new frontend and backend components",
            "Maintaining and expanding the system's database",
        ],
        skills: ["php", "JavaScript", "AngularJS", "jQuery", "CSS", "Git",],

    }],
    education: [{
        date_start: "",
        date_end: "",
        title: "Lead Android/Full-Stack developer",
        company: "Panorama",
        company_website: "www.upr.si",
        achivements: [],
        skills: []
    }],
    interests: [],
    languages: [{
        language: "",
        level: ""
    }]

}

export default props =>
    <div>
        <Typography variant='h3'>
            Resume
        </Typography>
        <Paper>
            <h1>
                Key skills/competences
            </h1>
            <div>
                {CV.skills.map(element =>
                    <div>{element}</div>
                )}
            </div>
        </Paper>
        <Paper>
            <h1>
                Work experience in the field of computer science
            </h1>
            <div>
                {CV.work_experience.map(job =>
                    <div>


                        <h3>{job.company}</h3>
                        <h4>{job.title}</h4>
                        <label>From:</label>
                        <div>{job.date_start}</div>
                        <label>To:</label>
                        <div>{job.date_end}</div>
                        <label>Responsibilities:</label>
                        {job.responsibilities.map(res =>
                            <div>{res}</div>)}


                        <div>
                            <label>Skills used:</label>
                            <Slide in={true} direction='right'>
                                <div>
                                    {job.skills.map(skill =>
                                        <Chip
                                            label={skill}
                                        />
                                    )}
                                </div>
                            </Slide>
                        </div>
                    </div>
                )}
            </div>
        </Paper>


    </div>