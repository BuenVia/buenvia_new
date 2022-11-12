import IntroCard from "./IntroCard"
import ActivityCard from "./ActivityCard"

export default function Home(props) {

    const activities =[
        {
            title: 'Learn',
            content: 'Learn new Spanish vocabulary. Choose your topic and then revise the flashcards to familiarise yourself with the words.'
        },
        {
            title: 'Practice',
            content: 'Once you have learnt a new topic, come here to practice what you have learnt.'
        }
    ]

    return (
        <div className="p-5">
            <div className="row mt-4">
                <IntroCard />
            </div>
            <div className='row mt-4'>

                {activities.map(activity => {
                    return <ActivityCard key={activities.indexOf(activity)} content={activity} section={props.section} />
                })}

            </div>
        </div>
    )
}