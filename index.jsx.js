const textExample = 'І навіть такий текст';

const button = (
  <ul className="list-group">
    <li className="list-group-item">Текст</li>
    <li className="list-group-item">{'Ще текст'}</li>
    <li className="list-group-item">{`Ще такий текст`}</li>
    <li className="list-group-item">{textExample}</li>
    <li className="list-group-item">{`${textExample}`}</li>
    <li className="list-group-item">Число → {3.14}</li>
    <li className="list-group-item">
      JSX елемент → <span>Тут може бути все те саме і на незліченній глибині</span>
    </li>
    <li className="list-group-item">
      Масив →{' '}
      {[
        'Текст',
        3.14,
        <span key={0} className="badge badge-secondary">
          JSX елемент
        </span>,
      ]}
    </li>
  </ul>
);

ReactDOM.render(button, document.getElementById('app'));
