import * as React from 'react';
import Paper from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

const Exhibit = () => {
  return (
    <div sx={{backgroundColor: 'red'}}>
      <Paper  sx ={{
      backgroundColor:  'lightgrey',
      fontSize: '20px',
      width: '100%',
      padding: '10px',
      }}>
        Exhibit
      </Paper>
    
      <div sx={{backgroundColor: 'red',height: '355px'}}>
        
        <Card sx={{ padding: '5px',maxWidth: 345}}>
          <CardMedia
            sx={{ height: 140,
                  backgroundColor: '#007090' }}
            title="c1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Component
            </Typography>
            <Typography variant="body2" color="text.secondary">
              asdasdasdasdasdasdaiysgdasdkasdjhasgdkasgdkasgdkasdkhas
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 140,
                  backgroundColor: '#007090' }}
            title="c1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Component
            </Typography>
            <Typography variant="body2" color="text.secondary">
              asdasdasdasdasdasdaiysgdasdkasdjhasgdkasgdkasgdkasdkhas
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 140,
                  backgroundColor: '#007090' }}
            title="c1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Component
            </Typography>
            <Typography variant="body2" color="text.secondary">
              asdasdasdasdasdasdaiysgdasdkasdjhasgdkasgdkasgdkasdkhas
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Exhibit