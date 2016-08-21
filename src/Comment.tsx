import * as React from "react"
import * as Showdown from "showdown"
interface CommentProps{
    author: string;
}

export class Comment extends React.Component<CommentProps,{}>{
    converter: Showdown.Converter = new Showdown.Converter();
    public render(){
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.converter.makeHtml(this.props.children.toString())}
            </div>
        );
    }
}

export default Comment;