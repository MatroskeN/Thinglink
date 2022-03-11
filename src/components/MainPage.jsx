import css from './MainPage.module.scss';
import React from 'react';
import Slider from "./Slider/Slider";
import LabelTag from "./LabelTag/LabelTag";
import TransitionTag from "./TransitionTag/TransitionTag";
import EmbedTag from "./EmbedTag/EmbedTag";
import ExampleTag from "./ExampleTag/ExampleTag";
import Box from "./Box/Box";
import {resolveTag} from "./resolve";

export default class MainPage extends React.Component {

    render() {
        const audio = window.INITIAL_STATE.audio;
        const banner = window.INITIAL_STATE.image;
        const name = window.INITIAL_STATE.name;
        const title = window.INITIAL_STATE.title;

        function Banner(){
            if(banner){
                return(
                    <img src={banner} className={css.banner} alt="banner"/>
                )
            } else{
                return (
                    <ExampleTag class={"lamp"} title={'Lacus tempor mattis diam'}
                                text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'}/>
                )
            }
        }
        function Audio() {
            if(audio){
                return (
                    <audio
                        controls
                        src={audio}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                )
            } else{
                return (
                    <ExampleTag class={"volume"} title={'Sit pellentesque pulvinar'}
                                text={'At vulputate nisi, et velit. Justo fringilla eget elit, facilisis ultrices mattis in quis aliquet. Massa ornare ultrices urna nisl ut sapien integer. Sit pellentesque pulvinar facilisi erat ridiculus purus porta scelerisque. Volutpat donec sed mattis ut tristique quis sit.'}/>
                )
            }
        }


        return (
            <div className={css.root}>
                <div className={css.content}>
                    { Banner() }
                    {
                        window.INITIAL_STATE.tags.map((item) => {
                            switch (item.layout) {
                                case "custom":
                                    if (item.data.image){
                                        return (
                                            <div>
                                                <Slider string={item.data.image} name={name} title={title}/>
                                                {Audio()}
                                                <Box title={item.data.title} text={item.data.text} btn={item.data.btn}
                                                     url={item.data.url}/>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div>
                                                {Audio()}
                                                <Box title={item.data.title} text={item.data.text} btn={item.data.btn}
                                                     url={item.data.url}/>
                                            </div>
                                        )
                                    }

                                case "label":
                                    if (item.data.text){
                                        return (
                                            <LabelTag label={item.data.text}/>
                                        )
                                    } else {
                                        return (
                                            <ExampleTag class={"lamp"} title={'Lacus tempor mattis diam'}
                                                        text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'}/>
                                        )
                                    }
                                case "transition" :
                                    if (item.data.text){
                                        return (
                                            <TransitionTag link={item.data.text}/>
                                        )
                                    } else{
                                        return (
                                            <ExampleTag class={"lamp"} title={'Lacus tempor mattis diam'}
                                                        text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'}/>
                                        )
                                    }
                                case "embed" :
                                    if (item.data.url){
                                        return (
                                            <EmbedTag link={resolveTag(item.data.url)}/>
                                        )
                                    } else {
                                        return (
                                            <ExampleTag class={"lamp"} title={'Lacus tempor mattis diam'}
                                                        text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'}/>
                                        )
                                    }

                                default :
                                    return (
                                        <div>
                                            Error, check your .json
                                        </div>
                                    )
                            }
                        })
                    }


                </div>
            </div>
        )
    }
}