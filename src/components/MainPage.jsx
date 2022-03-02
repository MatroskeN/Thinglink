import css from './MainPage.module.scss';
import React from 'react';
import Slider from "./Slider/Slider";
import LabelTag from "./LabelTag/LabelTag";
import TransitionTag from "./TransitionTag/TransitionTag";
import EmbedTag from "./EmbedTag/EmbedTag";
import ExampleTag from "./ExampleTag/ExampleTag";
import Box from "./Box/Box";
import data from './api.json';
import {resolveTag} from "./resolve";

export default class MainPage extends React.Component{


    render(){
        const audio = data.audio;

        return (
            <div className={css.root}>
                <div className={css.content}>
                    <img src="images/banner.png" alt="banner" className={css.banner}/>
                    {
                        data.tags.map( (item) => {
                            switch(item.layout){
                                case "custom": return(
                                    <div>
                                        <Slider string={item.data.image} />
                                        <audio
                                            controls
                                            src={audio}>
                                            Your browser does not support the
                                            <code>audio</code> element.
                                        </audio>
                                        <Box />
                                    </div>
                                );
                                case "label": return (
                                    <LabelTag label={item.data.label} />
                                );
                                case "transition" : return (
                                    <TransitionTag link={item.data.text} />
                                );
                                case "embed" : return (
                                    <EmbedTag link={resolveTag(item.data.url)} />
                                )

                                default : return (
                                    <div>
                                        Error, check your .json
                                    </div>
                                )
                            }
                        })
                    }
                    <ExampleTag pic={'images/Volume.svg'} title={'Sit pellentesque pulvinar'} text={'At vulputate nisi, et velit. Justo fringilla eget elit, facilisis ultrices mattis in quis aliquet. Massa ornare ultrices urna nisl ut sapien integer. Sit pellentesque pulvinar facilisi erat ridiculus purus porta scelerisque. Volutpat donec sed mattis ut tristique quis sit.'} />
                    <ExampleTag pic={'images/Lamp.svg'} title={'Lacus tempor mattis diam'} text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'} />
                </div>
            </div>
        )
    }
}