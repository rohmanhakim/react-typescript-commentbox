// Remember to rename the file from app.ts to app.tsx
// and to keep it in the src/ directory.

import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentBox from "./CommentBox";

let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Muhammad Arif", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox url="http://localhost:3000/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);