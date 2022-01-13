import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/ProductSlice';
import Card from "../Card/Card";

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products)

	useEffect(() => dispatch(fetchProducts()), [dispatch]);
    return (
		<div className='container bg-trasparent my-4 p-3'>
			<div className='row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-4'>
				{products.isLoading ? (
					<div className='w-100 d-flex justify-content-center align-items-center'>
						<div
							className='spinner-border text-warning text-center'
							role='status'>
							<span className='visually-hidden'>loading...</span>
						</div>
					</div>
				) : Array.isArray(products.products) && products.products.length > 0 ? (
					products?.products?.map((item) => (
						<Card key={item._id} item={item} />
					))
				) : null}
			</div>
		</div>
	);
}

export default Products
