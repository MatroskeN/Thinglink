import css from './MainPage.module.scss';
import Slider from "./Slider/Slider";
import LabelTag from "./LabelTag/LabelTag";

function MainPage(){
    return(
        <div className={css.root}>
            <div className={css.content}>
                <img src="images/banner.png" alt="banner" className={css.banner}/>
                <Slider />
                <audio
                    controls
                    src="">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <div className={css.box}>
                    <div className={css.title}>
                        Pellentesque praesent porta tortor
                    </div>
                    <div className={css.text}>
                        Maecenas dignissim netus dictum id sed. Nibh convallis justo cum dolor eros elit lorem blandit. Turpis in odio dignissim pulvinar integer nunc vel, nunc. Duis gravida aenean amet, enim. Pellentesque lectus enim amet a. Ut quis augue enim elit egestas a. At platea tellus vehicula est massa suscipit nibh etiam accumsan. Odio integer risus, risus phasellus massa pellentesque. Nec cras in enim, commodo arcu nisi, enim. Vitae, sodales nullam vel urna dictum pellentesque leo quis semper.
                    </div>
                    <button>
                        Button
                    </button>
                </div>
                <LabelTag />
            </div>
        </div>
    )
}

export default MainPage;