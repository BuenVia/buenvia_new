export default function ActivityCard(props) {
    return (
        <div className="col-md-6">
            <div className='card'>
                <h3>{props.content.title}</h3>
                <p>{props.content.content}</p>
                <button onClick={props.section} value={props.content.title} className='btn btn-danger'>{props.content.title}</button>
            </div>
        </div>
    )
}