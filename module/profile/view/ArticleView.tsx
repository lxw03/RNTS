/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import Answer from "../model/Answer";
import {View} from "react-native";
import Component = React.Component;
import JSXElement = JSX.JSXElement;
import Article from "../model/Article";
/**
 * Created by Zhihu on 2017/2/8.
 */
export default class ArticleView extends Component<Article,any> {

    constructor(props: Article) {
        super(props);
    }

    render(): JSXElement {
        return (
            <View/>
        );
    }

}