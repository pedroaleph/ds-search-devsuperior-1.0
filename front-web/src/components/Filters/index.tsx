import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  link: string;
  linkText: string;
}

const Filters = ({ link, linkText }: Props) => {

  return (
    <div className="filters-container records-actions">
      <div style={{ flex: 1 }}>
        {link === "charts" && (
          <div>
            <input type="text" placeholder="Data Inicial" />
            <input type="text" placeholder="Data Final" />
            <button className="clean-filters">LIMPAR PESQUISA</button>
          </div>
        )}
      </div>
      <Link to={`/${link}`}>
        <button className="action-filters">{linkText}</button>
      </Link>
    </div>
  );
};

export default Filters;