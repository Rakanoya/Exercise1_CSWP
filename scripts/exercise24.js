const ce = React.createElement;

function TableCaption(props) {
  return ce('caption', null, props.caption);
}

function TableRow(props) {
  let cells = props.row.map((cellText, index) => 
    ce(props.isHeader ? 'th' : 'td', { key: index }, cellText)
  );
  return ce('tr', null, cells);
}

function TableBody(props) {
  let rows = props.data.map((item, index) => {
    let rowValues = Object.values(item);
    return ce(TableRow, { key: index, row: rowValues, isHeader: false });
  });
  return ce('tbody', null, rows);
}

function TableHeader(props) {
  let headerRow = ce(TableRow, { row: props.headers, isHeader: true });
  return ce('thead', null, headerRow);
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
