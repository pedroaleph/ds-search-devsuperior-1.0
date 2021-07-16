import './styles.css';

type Props = {
  totalPages: number;
  activePage: number;
  
  goToPage: (page: number) => void;
}

const Pagination = ({ totalPages = 0, activePage, goToPage }: Props) => {
  const paginationItems = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination-container">
      {paginationItems.map(item => (
        <button
        key={item}
        className={`pagination-item ${activePage===item ? 'active' : 'inactive'}`}
        onClick={() => goToPage(item)}
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;