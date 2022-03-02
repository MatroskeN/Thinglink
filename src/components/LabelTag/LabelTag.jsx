import css from './LabelTag.module.scss';

function LabelTag(props){
    return(
        <div className={css.root}>
            <div className={css.title} data-attr={props.label}>
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