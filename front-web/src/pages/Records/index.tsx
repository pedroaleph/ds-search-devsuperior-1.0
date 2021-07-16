import axios from 'axios';
import Filters from 'components/Filters';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { formatDate } from './helpers';
import './styles.css';
import { RecordsResponse } from './types';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/records?size=12&page=${activePage}`)
      .then(res => {
        setRecordsResponse(res.data);
      })
  }, [activePage]);

  const handlePage = (index: number) => {
    setActivePage(index);
  }

  return (
    <div className="page-container">
      <Filters link="charts" linkText="VER GRÁFICO" />
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead >
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TÍTULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map(
            record => (
              <tr key={record.id}>
                <td>{formatDate(record.moment)}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td className="text-secondary">{record.game_platform}</td>
                <td>{record.genre_name}</td>
                <td className="text-primary">{record.game_title}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {recordsResponse && <Pagination
        totalPages={recordsResponse.totalPages}
        activePage={activePage}
        goToPage={handlePage}
      />}
    </div>
  );
};

export default Records;