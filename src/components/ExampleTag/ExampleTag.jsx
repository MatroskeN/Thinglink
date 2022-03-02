import css from './ExampleTag.module.scss';

function ExampleTag(props){
    return(
        <div className={css.root}>
            <div className={css.title}>
                <img src={props.pic} alt="tag"/>
                <span>
                    tag
                </span>
            </div>
            <div className={css.subtitle}>
                {props.title}
            </div>
            <div className={css.text}>
                {props.text}
            </div>
        </div>
    )
}

export default ExampleTag;