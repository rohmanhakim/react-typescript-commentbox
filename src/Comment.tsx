import * as React from "react"

interface CommentProps{
    author: string;
}

export class Comment extends React.Component<CommentProps,{}>{
    public render(){
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                    {this.props.children}
            </div>
        );
    }
}

export default Comment;