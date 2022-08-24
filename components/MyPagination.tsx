import { Flex } from "@chakra-ui/react"
import Pagination from "@choc-ui/paginator"

interface PaginateProp {
  total: number
  limit: number
  page: number
  pageChange: (currentPage?: number | undefined, totalPages?: number | undefined, pageSize?: number | undefined, total?: number | undefined) => void
}

export default function MyPagination(prop: PaginateProp) {
  return <Flex
    w="full"
    bg={"gray.400"}
    _dark={{
    bg: "gray.600",
    }}
    p={50}
    alignItems="center"
    justifyContent="center"
  >
    <Pagination
      onChange={prop.pageChange}
      current={prop.page}
      defaultCurrent={prop.page}
      pageSize={prop.limit}
      total={prop.total}
      paginationProps={{
        display: "flex",
      }}
      pageNeighbours={2}
    />
  </Flex>
}