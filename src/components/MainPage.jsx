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
import Volume from "./Svg/Volume";

export default class MainPage extends React.Component{


    render(){
        const audio = data.audio;
        return (
            <div className={css.root}>
                <div className={css.content}>
                    <img src="https://s1.hostingkartinok.com/uploads/images/2022/03/24e1f4db175919e812107974105a0e78.png" alt="banner" className={css.banner}/>
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
                                    <LabelTag label={item.data.text} />
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
                    <ExampleTag class={"volume"} title={'Sit pellentesque pulvinar'} text={'At vulputate nisi, et velit. Justo fringilla eget elit, facilisis ultrices mattis in quis aliquet. Massa ornare ultrices urna nisl ut sapien integer. Sit pellentesque pulvinar facilisi erat ridiculus purus porta scelerisque. Volutpat donec sed mattis ut tristique quis sit.'} />
                    <ExampleTag class={"lamp"} title={'Lacus tempor mattis diam'} text={'Sociis neque amet morbi nunc. Dictum malesuada id morbi amet nullam sapien, neque, id rhoncus. Sit ornare hac nunc erat massa augue ornare donec. Scelerisque in aenean ut phasellus nisi quis diam sed. Ultrices volutpat, donec ac id eros metus nisl aenean.'} />
                </div>
            </div>
        )
    }
}