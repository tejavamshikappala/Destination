import './index.css'

const DestinationItem = props => {
  const {Each} = props
  const {id, name, imgUrl} = Each
  return (
    <li className="for-list" key={id}>
      <div>
        <img src={imgUrl} className="for-img" alt={name} />
        <p className="for-para">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
