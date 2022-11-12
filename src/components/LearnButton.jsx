export default function LearnButton(props) {
    return (
        <div className="learn-button-card">
            <p>{props.name}</p>
            <button className='btn-learn' value={props.name}>Go</button>
        </div>
   )
}