import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [searchText, setSearchText] = useState('');
    //search value change handler
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    //use effect for getting immediate value
    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText])
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
