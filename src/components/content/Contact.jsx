import React from 'react';
import { Typography, Paper } from '@material-ui/core/';
import { MyMapComponent } from "./Map"

const styles = {
    Paper: {
        padding: 20,
        margin: 10,
    }
}

const info = {
    Name: "Leo Gombač",
    Address: "Pod Anteno 18",
    City: "Portorož",
    Phone: "+386 31 284 462",
    Email: "leo.gombac@gmail.com"


}

export default props =>
    <div>



        <Typography variant='h3'>
            Contact
            </Typography>
        <div>
            {Object.keys(info).map(
                key => <div>

                    <div>{key}</div>
                    <div>{info[key]}</div>
                </div>

            )}
        </div>
    </div>