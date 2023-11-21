import {createSlice} from "@reduxjs/toolkit";

const markdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        markdownInput:
`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.

~~~js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
~~~
You can also make text bold... whoa!
Or italic.
Or... wait for it... both!
And feel free to go crazy crossing stuff out.

There's also links, and

>Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
        ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`

    },
    reducers:{
        setMarkdownInput: (state, action)=> {
            state.markdownInput = action.payload;
        }
    }
});


export const { setMarkdownInput} = markdownSlice.actions
export const selectMarkdownInput = (state) => state.markdown.markdownInput;
export default markdownSlice.reducer;
