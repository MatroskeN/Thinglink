import css from  './EmbedTag.module.scss';

function EmbedTag() {
    return(
        <div className={css.root}>
            <div className={css.title}>
                <img src="images/Dot.svg" alt="tag"/>
                <span>
                    embed tag
                </span>
            </div>
        </div>
    )
}

export default EmbedTag;