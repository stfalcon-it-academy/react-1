const truthyValue = true;
const falsyValue = false;

const button = (
  <div>
    {truthyValue && <p className="alert alert-success">Елемент рендериться</p>}
    {falsyValue && <p>Елемент не рендериться</p>}
    {<p>Елемент не рендериться</p> && <p className="alert alert-success">Елемент рендериться</p>}

    {truthyValue || <p>Елемент не рендериться</p>}
    {falsyValue || <p className="alert alert-success">Елемент рендериться</p>}
    {<p className="alert alert-success">Елемент рендериться</p> || <p>Елемент не рендериться</p>}

    {truthyValue ? <p className="alert alert-success">Елемент рендериться</p> : <p>Елемент не рендериться</p>}
    {falsyValue ? <p>Елемент не рендериться</p> : <p className="alert alert-success">Елемент рендериться</p>}

    <p>
      Заміна <code>switch</code> →&nbsp;
      {
        {
          option1: <span>Варіант 1</span>,
          option2: <span>Варіант 2</span>,
          option3: <span>Варіант 3</span>,
          option4: <span>Варіант 4</span>,
        }['option3']
      }
    </p>
  </div>
);

ReactDOM.render(button, document.getElementById('app'));
