import css from './MainPage.module.scss';
import React from 'react';
import Slider from "./Slider/Slider";
import LabelTag from "./LabelTag/LabelTag";
import TransitionTag from "./TransitionTag/TransitionTag";
import EmbedTag from "./EmbedTag/EmbedTag";
import ExampleTag from "./ExampleTag/ExampleTag";
import axios from 'axios';
import API from './api.json';

export default class MainPage extends React.Component{
    state = {
        tags: []
    }
    componentDidMount() {
        axios.get(API)
            .then(res => {
                const tags = res.data;
                this.setState({ tags });
            })
    }

    render(){
        console.log(this.state);
        return (
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
                    <TransitionTag />
                    <EmbedTag />
                    <ExampleTag pic={'images/Volume.svg'} title={'Sit pellentesque pulvinar'} text={'At vulputate nisi, et velit. Justo fringilla eget elit, facilisis ultrices mattis in quis aliquet. Massa ornare ultrices urna nisl ut sapien integer. Sit pellentesque pulvinar facilisi erat ridiculus purus porta scelerisque. Volutpat donec sed mattis ut tristique quis sit.'} />
                    <ExampleTag pic={'images/Lamp.svg'} title={'Lacus tempor mattis diam'} text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'} />
                </div>
            </div>
        )
    }
}