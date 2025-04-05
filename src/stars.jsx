import Star from "./star"
import { v4 as uuidv4 } from 'uuid'

export default function Stars ({count=0,}) {
    if (typeof(count) != 'number' || (count > 5 ? true : (count < 1))) return
    const liBuffer = [...Array(count)].map(() => {return <li key={uuidv4()}><Star/></li>})
    const mystyle={
        listStyleType:'none'
      }
    return (
        <ul className="card-body-stars u-clearfix" style={mystyle}>{liBuffer}</ul>
    )
}