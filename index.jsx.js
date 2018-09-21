const button = (
  <div>
    <h2>
      Example heading <span className="badge badge-pill badge-warning">New</span>
    </h2>
    <button className="btn btn-primary" onClick={() => alert('button clicked')}>
      Button text
    </button>
  </div>
);

ReactDOM.render(button, document.getElementById('app'));
