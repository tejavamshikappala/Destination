import './index.css'

const DestinationItem = props => {
  const {Each} = props
  const {id, name, imgUrl} = Each
  return (
    <li className="for_list" key={id}>
      <div>
        <img src={imgUrl} className="for_img" alt={name} />
        <p className="for_para">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
