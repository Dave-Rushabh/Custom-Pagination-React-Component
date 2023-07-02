import { useLayoutEffect, useState } from "react";

const Pagination = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageMapping, setPageMapping] = useState([]);

  useLayoutEffect(() => {
    let pages = [];
    if (totalPage > 5 && currentPage === totalPage) {
      for (let i = totalPage - 4; i <= totalPage; i++) {
        pages.push(i);
      }
      setPageMapping(pages);
    }
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
      setPageMapping(pages);
    }

    if (totalPage > 5 && currentPage + 4 <= totalPage) {
      if (!pageMapping.includes(currentPage)) {
        for (let i = 0; i < 5; i++) {
          pages.push(currentPage + i);
        }
        setPageMapping(pages);
      }
    }
  }, [currentPage, totalPage]);

  const renderButtons = () => {
    return (
      <>
        {pageMapping.map((page) => (
          <button
            key={Math.random().toString()}
            onClick={() => setCurrentPage(page)}
            style={{
              background: currentPage === page ? "red" : "white",
              color: currentPage === page ? "white" : "black",
              border: "none"
            }}
          >
            {page}
          </button>
        ))}
      </>
    );
  };

  return (
    <>
      <h1>This is the custom Pagination</h1>
      <h5>current page - {currentPage}</h5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          justifyContent: "center"
        }}
      >
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          {`<<`}
        </button>
        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
        >
          {`Prev`}
        </button>
        {renderButtons()}
        <button
          disabled={currentPage >= totalPage}
          onClick={() => setCurrentPage((page) => page + 1)}
        >
          {`Next`}
        </button>
        <button
          disabled={currentPage >= totalPage}
          onClick={() => setCurrentPage(totalPage)}
        >{`>>`}</button>
      </div>
    </>
  );
};

export default Pagination;
