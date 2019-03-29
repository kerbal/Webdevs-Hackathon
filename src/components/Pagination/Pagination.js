import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

class Pagination extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ReactPaginate
          previousLabel={(<span className="fa fa-arrow-left"/>)}
          nextLabel={(<span className="fa fa-arrow-right"/>)}
          breakLabel={(<span className="fa fa-ellipsis-h"/>)}
          breakClassName={'break-me'}
          pageCount={this.props.numberOfPage}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={this.handlePageClick}
          
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
        />
      </div>
    )
  }

  handlePageClick = (info) => {
    this.props.onPageChange(info.selected);
  }
}

export default Pagination;