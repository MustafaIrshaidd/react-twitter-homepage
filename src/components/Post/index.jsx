
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';

const Post = () => {

    return (
        <Card sx={{ display: 'flex', padding: '20px 20px' }}>
            <Avatar alt="Remy Sharp" src="/assets/images/personalPhoto.jpeg" />
            <Box sx={{ display: 'flex', flexDirection: 'column' }} width={"100%"}>
                <CardContent sx={{ flex: '1 0 auto', paddingTop: "0px" }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} width={"100%"}>
                        <Box sx={{ display: 'flex', gap: "15px", alignItems: "center" }}>
                            <Typography component="div" variant="subtitle1">
                                danabramov.bsky.social
                            </Typography>
                            <Typography component="div" color="text.secondary" variant="caption">
                                @dan_abramov . 29 May
                            </Typography>
                            <Typography component="div" color="text.secondary" variant="caption">

                            </Typography>
                        </Box>
                        <MoreHorizIcon />
                    </Box>
                    <Typography variant="body2" color="text.primary" component="div">
                        Happy 10th birthday to @ReactJS !
                    </Typography>
                    <Box sx={{ display: 'flex' }}>

                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}

export default Post