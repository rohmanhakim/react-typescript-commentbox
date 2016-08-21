import * as React from "react";
import CommentForm from "../src/CommentForm";
import CommentList from "../src/CommentList"


class CommentBox extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }
    public render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

export default CommentBox;