import css from './TransitionTag.module.scss';

function TransitionTag(props) {
    return(
        <div className={css.root}>
            <div className={css.content}>
                <div className={css.title}>
                    <img src="images/bird.svg" alt="tag"/>
                    <span>
                        transition tag
                    </span>
                </div>
                <div className={css.subtitle}>
                    Transition to: <span>Ut quis augue enim elit egestas</span> scene
                </div>
            </div>
            <a className={css.link} href={props.link} target={'_blank'}>Move to next scene</a>
        </div>
    )
}

export default TransitionTag;