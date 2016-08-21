import * as React from "react";
import Comment from "../src/Comment"

export class CommentList extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    public render(){
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
}

export default CommentList;