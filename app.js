// Компонент, отображающий таблицу
function TableView({ data }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Артикул</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.артикул}</td>
                    <td>{item.название}</td>
                    <td>{item.описание}</td>
                    <td>{item.цена}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

// Главный компонент
function App() {
    const [tableData, setTableData] = React.useState([]);

    function handleClick() {
        console.log('Button clicked');
        const elements = document.querySelectorAll('.table-view__item-wrapper');
        const data = Array.from(elements).map((element, index) => {
            const артикулElement = element.querySelector('.article_block .muted');
            const названиеElement = element.querySelector('.item-title span');
            const описаниеElement = element.querySelector('.description');
            const ценаElement = element.querySelector('.price_value');

            // Проверяем, что все элементы найдены и содержат текст
            const артикул = артикулElement && артикулElement.textContent;
            const название = названиеElement && названиеElement.textContent;
            const описание = описаниеElement && описаниеElement.textContent;
            const цена = ценаElement && ценаElement.textContent;

            return { id: index, артикул, название, описание, цена };
        });
        setTableData(data);
    }

    return (
        <div>
            <button onClick={handleClick}>Получить данные и отобразить таблицу</button>
            {tableData.length > 0 && <TableView data={tableData} />}
        </div>
    );
}

// Рендер приложения в корневой элемент
ReactDOM.render(<App />, document.getElementById('root'));
