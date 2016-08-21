import * as React from "react";

class CommentBox extends React.Component<any,any> {
    constructor(props:any){
        super(props);
    }
    public render(){
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
}

export default CommentBox;