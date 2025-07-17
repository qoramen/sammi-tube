import React from 'react'
import { Stack, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Link to={'/channel'}>
            <Button>Channel</Button>
        </Link>
    )
}

export default Main