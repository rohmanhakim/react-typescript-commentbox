import * as React from "react"

export class CommentForm extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    public render(){
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
}

export default CommentForm;