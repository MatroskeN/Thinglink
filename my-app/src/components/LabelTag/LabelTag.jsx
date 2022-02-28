import css from './LabelTag.module.scss';

function LabelTag(){
    return(
        <div className={css.root}>
            <div className={css.title} data-attr={'Hey, you, out there, in the cold'}>
                <img src="images/Dot.svg" alt="label"/>
                <span>label tag</span>
            </div>
            <div className={css.subtitle}>
                Diam augue tellus ut id volutpat malesuada sed est ut.
            </div>
        </div>
    )
}

export default LabelTag;