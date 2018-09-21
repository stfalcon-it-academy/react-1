const button = (
  <button className="btn btn-primary" onClick={() => alert('button clicked')}>
    Button text
  </button>
);

ReactDOM.render(button, document.getElementById('app'));
