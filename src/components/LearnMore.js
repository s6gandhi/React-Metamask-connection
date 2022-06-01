import './LearnMore.css';
function LearnMore(props) {

    return (<div className="task-item"> <h2> Learn more </h2>
        <div className='task-item__priority' >
            <h1>
                {props.abc}
            </h1>
        </div>
    </div>

    )

};
export default LearnMore;