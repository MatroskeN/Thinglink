import css from './LabelTag.module.scss';

function LabelTag(props){
    return(
        <div className={css.root}>
            <div className={css.title} data-attr={props.label}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#333333" fill-opacity="0.2"/>
                    <circle cx="14" cy="14" r="13" stroke="white" stroke-width="2"/>
                    <circle cx="14" cy="14" r="3.73333" fill="white"/>
                </svg>
                <span>label tag</span>
            </div>
            <div className={css.subtitle}>
                Diam augue tellus ut id volutpat malesuada sed est ut.
            </div>
        </div>
    )
}

export default LabelTag;