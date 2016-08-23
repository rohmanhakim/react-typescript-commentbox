import * as React from "react"

export class CommentForm extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {author: '', text: ''};
    }
    public handleAuthorChange(e:any){
        this.setState({author: e.target.value});
    }
    public handleTextChange(e:any){
        this.setState({text: e.target.value});
    }
    public handleSubmit(e:any){
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        //noinspection TypeScriptUnresolvedFunction
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    }
    public render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange.bind(this)}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

export default CommentForm;