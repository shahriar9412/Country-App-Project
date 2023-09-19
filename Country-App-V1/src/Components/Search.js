import React, { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    //search value change handler
    const handleChange = (e) => {
        setSearchText(e.target.value)
        alert(searchText)
    }
    //return function
    return (
        <div style={{ textAlign: 'center' }}>
            <input
                style={{ textAlign: 'center' }}
                type='text'
                placeholder='Search Country'
                value={searchText}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search
