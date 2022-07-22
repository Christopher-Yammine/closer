import React from 'react'

const SearchBar = () => {
    return (
        <div className='searchbar-container'>

            <div className='searchbar-content'>
                <div>
                    Find your universe...
                </div>
                <div className='searchbar'>

                    <div>
                        <input type="text" placeholder='Date | Location' />
                    </div>
                    <div className='magnifier'>
                        <img src={require('../assets/magnifier.png')} width={56} alt="" onClick={console.log("hello")} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SearchBar