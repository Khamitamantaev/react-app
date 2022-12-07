import React from 'react'
const SearchPanel = () => {
    const searchStyle = {
      fontSize: '20px'
    }
    const searchText = 'Text here to search'
    return <input
      style={searchStyle}
      placeholder={searchText}
      className='foo' 
      disabled
      />
  }

export default SearchPanel