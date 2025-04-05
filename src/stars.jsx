import Star from "./star"

export default function Stars (count=0) {
    if (typeof(count) != 'number' || (count > 5 ? true : (count < 1))) return
    const liBuffer = [...Array(count)].map(Star)
    const mystyle={
        listStyleType:'none'
      }
    return (
        <ul className="card-body-stars u-clearfix" style={mystyle}>{liBuffer}</ul>
    )
}