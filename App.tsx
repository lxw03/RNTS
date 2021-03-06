/**
 * Created by Zhihu on 2017/2/4.
 */

import * as React from 'react';
import {AppRegistry, StyleSheet, Navigator, View, BackAndroid} from 'react-native';
import Profile from './containers/Profile'
import ListPanel from './ListPanel'
let ScrollPanel = require('./ScrollPanel');
import {Provider} from 'react-redux'
import configureStore from './store/users'
import ProfileFragment from './module/profile/view/ProfileFragment'
import People from './module/profile/model/People'
import Component = React.Component;

let store = configureStore();

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

let people;

export default class RNTS extends Component<any,any> {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: configureStore()
        };
        people = new People();
        people.following_topic_count = 1;
        people.following_count = 1;
        people.follower_count = 1;
        people.voteup_count = 1;
        people.thanked_count = 1;
        people.avatar_url = 'https://avatars1.githubusercontent.com/u/5809592';
        people.headline = '我本将心向明月，奈何明月照沟渠~';
    }

    routeMapper(route, navigationOperations, onComponentRef) {
        _navigator = navigationOperations;
        if (route.name === 'first') {
            return (
                <ProfileFragment name="NoFace"
                                 desc="007" {...people}
                                 store={store}
                                 avatar='https://avatars2.githubusercontent.com/u/5145108'
                                 navigator={_navigator}/>
            );
        } else if (route.name === 'second') {
            return <ListPanel navigator={_navigator}/>
        } else if (route.name === 'third') {
            return <ScrollPanel name="second" desc="007"
                                avatar={{uri: 'https://avatars1.githubusercontent.com/u/5809523'}}
                                navigator={_navigator}/>
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator initialRoute={{name: 'first', title: 'First', index: 0}}
                           renderScene={this.routeMapper.bind(this)}/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('RNTS', () => RNTS);