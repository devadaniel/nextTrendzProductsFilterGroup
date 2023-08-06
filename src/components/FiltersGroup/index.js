import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    onClickCategory,
    enterSearchInput,
    onClickRating,
    onClickClearFilter,
  } = props
  const renderRatingList = () => {
    const {ratingsList} = props
    return (
      <ul className="rating-list-container">
        <h1 className="rating-heading">Rating</h1>
        {ratingsList.map(eachRating => (
          <li
            className="rating-img-list"
            key={eachRating.ratingId}
            onClick={() => onClickRating(eachRating.ratingId)}
          >
            <img
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
              className="rating-img"
            />
            <span className="span-element">& up</span>
          </li>
        ))}
      </ul>
    )
  }

  const renderCategorySection = () => {
    const {categoryOptions, activeCategoryId} = props
    return (
      <ul className="category-list-items">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachCategory => (
          <li
            className={`each-category ${
              eachCategory.categoryId === activeCategoryId &&
              'active-category-id'
            }`}
            key={eachCategory.categoryId}
            onClick={() => onClickCategory(eachCategory.categoryId)}
          >
            <p className="category-name">{eachCategory.name}</p>
          </li>
        ))}
      </ul>
    )
  }

  const onClickChangeInput = event => {
    const {onChangeSearchInput} = props
    onChangeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="input-search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onClickChangeInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      {renderCategorySection()}
      {renderRatingList()}
      <button
        className="clear-filter-button"
        type="button"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
