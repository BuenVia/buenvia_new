export default function LearnButton(props) {

    function handleClick(e) {
        return props.topicHandle(e.target.value)
    }

    return (
        <div className="learn-button-card">
            <p>{props.name}</p>
            <button className='btn-learn' onClick={handleClick} value={props.name}>Go</button>
        </div>
   )
}