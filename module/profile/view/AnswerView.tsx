import * as React from "react";
import Answer from "../model/Answer";
import {View} from "react-native";
import Component = React.Component;
import JSXElement = JSX.JSXElement;
export default class AnswerView extends Component<Answer,any> {

    constructor(props: Answer) {
        super(props);
    }

    render(): JSXElement {
        return (
            <View/>
        );
    }

}