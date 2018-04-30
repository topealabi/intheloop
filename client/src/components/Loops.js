import React, { Component } from 'react';
import ButtonItl from './ButtonItl';
import ProfileContainer from './ProfileContainer';
import loopsData from '../../loops-data.json';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import { Link } from 'react-router-dom';

const loopList = loopsData.loops;
console.log('loopList:', loopList);
export default class Loops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLoopName: loopList[0].loopName,
            currentLoopPlayers: loopList[0].loopPlayers,
            listOfLoops: [],
            currentLoopListIndex: 0
        };
        this.findLoopFromList = this.findLoopFromList.bind(this);
        this.changeLoop = this.changeLoop.bind(this);
    }

    findLoopFromList() {
        console.log(this.state.currentLoopName, this.state.currentLoopPlayers);
        let currentLoopName = this.state.currentLoopName;
        let listOfLoops = [];
        let currentLoopPlayers = [];

        loopList.forEach(loop => {
            let loopName = loop.loopName;
            listOfLoops.push(loopName);
            if (loopName === currentLoopName) {
                currentLoopPlayers = loop.loopPlayers;
            }
        });
        this.setState({ listOfLoops: listOfLoops, currentLoopPlayers: currentLoopPlayers });
    }

    changeLoop(event) {
        let indexChange = Number(event.target.dataset.change);
        console.log('======> ', event.target.dataset.change);
        let currentLoopListIndex = this.state.currentLoopListIndex;
        currentLoopListIndex += indexChange;
        if (currentLoopListIndex < 0) {
            this.setState({
                currentLoopName: loopList[loopList.length - 1].loopName,
                currentLoopListIndex: loopList.length - 1
            });
        } else if (currentLoopListIndex > loopList.length - 1) {
            this.setState({ currentLoopName: loopList[0].loopName, currentLoopListIndex: 0 });
        } else {
            this.setState({
                currentLoopName: loopList[currentLoopListIndex].loopName,
                currentLoopListIndex: currentLoopListIndex
            });
        }
        this.findLoopFromList();
        console.log('======> ', this.state.currentLoopListIndex);
    }

    render() {
        let loopPlayerRoster = this.state.currentLoopPlayers;
        const playerSnapshots = loopPlayerRoster.map(player => {
            let status = {
                backgroundColor: player.itlStatus ? 'green' : 'red'
            };
            return (
                <div className="loop-player-snapshot grid-container" key={player.telephone}>
                    <ProfileContainer
                        className="loop-player-img"
                        imgURL={require(`../img/profiles/${player.imgUrl}`)}
                    />
                    <div className="loop-player-name">{player.fname}</div>
                    <div className="loop-player-itlStatus" style={status} />
                </div>
            );
        });
        return (
            <div className="loops-container flex-wrapper-column">
                <div className="loops-hero-image-container flex-wrapper-column flex-align-items-start">
                    <span className="title-loops">Loops</span>
                </div>
                <div className="navigation grid-container">
                    <div onClick={this.changeLoop} className="left-arrow">
                        <FontAwesomeIcon data-change="-1" className="fa-icon" icon={faArrowCircleLeft} />
                    </div>
                    <h1 className="loops-name" onChange={this.findLoopFromList}>
                        {this.state.currentLoopName}
                    </h1>
                    <div onClick={this.changeLoop} className="right-arrow">
                        <FontAwesomeIcon data-change="1" className="fa-icon" icon={faArrowCircleRight} />
                    </div>
                </div>
                <div className="loops-players">{playerSnapshots}</div>
                <Link
                    to="/loop-details"
                    className="flex-wrapper-column flex-justify-center flex-align-items-center itl-btn-wrapper remove-link-styles"
                >
                    <ButtonItl htmlClass="loops-btn itl-btn" htmlName="button" htmlValue="Show more" />
                </Link>
            </div>
        );
    }
}
