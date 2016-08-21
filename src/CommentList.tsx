import * as React from "react";

export class CommentList extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    public render(){
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
            </div>
        );
    }
}

export default CommentList;