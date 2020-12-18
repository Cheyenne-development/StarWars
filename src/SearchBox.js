import React from 'react'

class SearchBox extends React.Component {
    handleReset = e => {
        e.preventDefault()
        this.props.onReset()
    }

    handleSubmit = e => {
        e.preventDefault();
        const searchQuery = e.target.search.value
        const categoryName = e.target.category.value
        e.target.search.value = ''
        if (searchQuery === '') {
            alert('Please enter a search query')
        } else {
        this.props.onSearch(searchQuery, categoryName)
    }
}

    categoryList = () => {
            return this.props.categories.map((category, idx) => (
            <option key={idx} name={category} value={category}>
                {category}
            </option>
        ))
        
    }
    render() {
        return (
            <div className='search-form'>
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <div className='search-box'>
                        <label htmlFor='search-query'>
                            <span>Search: </span>
                        </label>
                        <input type='text' id='search-query' name='search' required/>
                    </div>
                    <div className='category'>
                        <label htmlFor='search-category'>Choose a Category</label>
                        <select
                            id="search-category"
                            name='category'>
                            {this.categoryList()}
                        </select>
                        <button type='submit'>Search</button>
                        <button type='reset'>Reset</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox;