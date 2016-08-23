import * as React from "react";
import Comment from "../src/Comment"

export class CommentList extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    public render(){
        //noinspection TypeScriptUnresolvedVariable
        let commentNodes = this.props.data.map(function(comment:any){
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
               {commentNodes}
            </div>
        );
    }
}

export default CommentList;