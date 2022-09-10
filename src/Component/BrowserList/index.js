import './index.css'

const BrowserList = props => {
  const {listDetails, deleteBtn} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listDetails

  const onClickDeleteBtn = () => {
    deleteBtn(id)
  }

  return (
    <li className="list-item">
      <div className="list-item-text-container">
        <p className="time-access">{timeAccessed}</p>
        <img src={logoUrl} className="domain-logo" alt="domain logo" />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button className="delete-btn" type="button" onClick={onClickDeleteBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserList
