import css from  './EmbedTag.module.scss';

function EmbedTag(props) {
    return(
        <a href={props.link} target={'_blank'} className={css.root}>
            <div className={css.title}>
                <img src="images/Dot.svg" alt="tag"/>
                <span>
                    embed tag
                </span>
            </div>
        </a>
    )
}

export default EmbedTag;