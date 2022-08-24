import { Box } from "@chakra-ui/react"
import MyPagination from "../../components/MyPagination"
import Navbar from "../../components/Navbar"
import ProductFilter from "../../components/product/ProductFilter"
import ProductList from "../../components/product/ProductList"



export default function Product () {
    return <Box
        bg="#edf3f8"
    >
        <Navbar />
        <ProductFilter />
        <ProductList />
        <MyPagination />
    </Box>
}