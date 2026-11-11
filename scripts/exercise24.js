const ce = React.createElement;

function TableCaption(props) {
  return ce('caption', null, props.caption);
}

function TableRow(props) {
  let cells = [];
  for (let key in props.row) {
    if (Object.prototype.hasOwnProperty.call(props.row, key)) {
      cells.push(ce('td', { key }, props.row[key]));
    }
  }
  return ce('tr', null, cells);
}

function TableBody(props) {
  let rows = [];
  for (let index in props.data) {
    rows.push(ce(TableRow, { key: index, row: props.data[index] }));
  }
  return ce('tbody', null, rows);
}

function TableHeader(props) {
  let headerCells = props.headers.map((header, index) =>
    ce('th', { key: index }, header)
  );
  return ce('thead', null, ce('tr', null, headerCells));
}

function MakeTable(props) {
  let caption = null;
  let header = null;
  let body;
  let tableData = props.data ? [...props.data] : [];

  if (props.caption) {
    caption = ce(TableCaption, { caption: props.caption });
  }

  if (props.useDataHeading) {
    if (tableData.length > 0) {
      let firstObj = tableData.shift();
      let headingArray = firstObj.headers ? firstObj.headers : Object.values(firstObj);
      header = ce(TableHeader, { headers: headingArray });
    }
  } else if (props.headers) {
    header = ce(TableHeader, { headers: props.headers });
  }

  body = ce(TableBody, { data: tableData });

  return React.createElement('table', null, caption, header, body);
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MakeTable, myPropsS0));
