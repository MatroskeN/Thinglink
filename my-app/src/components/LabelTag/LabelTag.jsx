import css from './LabelTag.module.scss';

function LabelTag(){
    return(
        <div className={css.root}>
            <div className={css.title} data-attr={'Hey, you, out there, in the cold'}>
                <img src="images/Dot.svg" alt="label"/>
                <span>label tag</span>
            </div>
        </div>
    )
}

export default LabelTag;