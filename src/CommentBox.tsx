import * as React from "react";
import * as jQuery from "jquery";
import CommentForm from "../src/CommentForm";
import CommentList from "../src/CommentList"

class CommentBox extends React.Component<any,any> {

    constructor(props:any){
        super(props);
        this.state = { data: []};
    }
    public loadCommentsFromServer(){
        let self = this;
        //noinspection TypeScriptUnresolvedVariable
        jQuery.ajax({
            url: self.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                self.setState({data: data})
            },
            error: function (xhr, status, err) {
                //noinspection TypeScriptUnresolvedVariable
                console.error(self.props.url, status, err.toString())
            }
        });
    }
    public componentDidMount() {
        this.loadCommentsFromServer();
        //noinspection TypeScriptUnresolvedVariable
        setInterval(this.loadCommentsFromServer,this.props.pollInterval);
    }
    public render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;