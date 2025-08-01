import { Box, Stack } from "@mui/material"
import { Link } from 'react-router-dom';
import { logo } from '../../constants'
import { colors } from '../../constants/colors'
import { SearchBar } from "../";

const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={2}
            sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary, height: '10vh' }}
        >
            <Link to={'/'}>
                <img src={logo} alt="" height={40} />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    )
}

export default Navbar