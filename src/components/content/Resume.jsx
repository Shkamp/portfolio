import React from 'react';
import { Typography, Paper } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';

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
    work_experience: [
        {
            date_start:"",
            date_end:"",
            title:"",
            company:"",
            responsibilities:"",
            skills:[],

        }
    ]

}

export default props =>
    <div>
        <Paper>
            <h1>
                Key skills/competences
            </h1>
            <ul>

            </ul>
        </Paper>
        <Paper>
            <h1>
                Work experience in the field of computer science
            </h1>
            <ul>
                <li>Flexible and ready to work using different methodologies</li>
                <li>Flexible and ready to work using different methodologies</li>
                <li>Experienced in the agile development approach</li>
                <li>Knowledge of Java, JavaScript, C#, Python, C, C++, PHP languages</li>
                <li>Experience using SQL databases</li>
                <li>Experience in developing Windows, Linux, Android and cross-platform applications</li>
                <li>Always striving to improve</li>
            </ul>
        </Paper>
        <Typography variant='display4'>
            Resume
        </Typography>

    </div>