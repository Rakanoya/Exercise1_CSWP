'use strict';
let ce = React.createElement;

function TableCaption(props) {
}

function TableRow(props) {
}

function TableBody(props) {
}

function TableHeader(props) {
}

function MakeTable(props) {
  let caption;
  let header;
  let body;
  
  if (props.caption) {
  }
  
  if (props.headers) {    
  }
    
  body = ce(TableBody,props.data);  
    
  return React.createElement('table', null,'', caption, header, body);
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MakeTable, myPropsS0));


