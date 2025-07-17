import React from 'react'
import { Stack, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"

const Channel = () => {
    const params = useParams()
    console.log(params);
    return (
        <Link to={'/'}>
            <Button>Main</Button>
        </Link>
    )
}

export default Channel