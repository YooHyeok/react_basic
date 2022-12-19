import { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

/**
 * 페이징 처리 페이지 UI
 */
class PagenationEx extends Component{
    pagination = (type) => {
        alert("Go " + type);
    }
    render() {
        return(
            <>
                <Pagination size='lg' aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first onClick={e=>this.pagination("first")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e=>this.pagination("previous")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("1")} >1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("2")} >2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("3")} >3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={e=>this.pagination("next")} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={e=>this.pagination("last")} />
                    </PaginationItem>
                </Pagination>
            </>
        )
    }
}

export default PagenationEx;