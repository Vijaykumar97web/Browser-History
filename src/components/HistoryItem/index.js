import './index.css'

const HistoryItem = props => {
  const {eachlist, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachlist
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-card-container">
      <div className="date-card">
        <p className="time-card">{timeAccessed}</p>
        <div className="history-info-card">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title-card">{title}</p>
          <p className="url-card">{domainUrl}</p>
        </div>
      </div>
      <div className="btn-card">
        <button
          type="button"
          className="btn"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="logo-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
