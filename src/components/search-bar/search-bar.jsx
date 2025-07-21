import { Paper, IconButton } from "@mui/material"
import { colors } from '../../constants/colors'
import { Search } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setvalue] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(value);
    if (value) {
      navigate(`/search/${value}`)
    }
  }

  return (
    <Paper component={'form'} sx={{border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none', borderRadius: 0, mr: 5,}} onSubmit={submitHandler}>
      <input type="text" placeholder="Search..." className="search-bar" value={value} onChange={e => setvalue(e.target.value)}/>
      <IconButton type="submit">
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar