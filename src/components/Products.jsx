import React from 'react'
import ProductsCard from './ProductsCard'
import SectionHeader from './SectionHeader'
import data from "../utls/ProductsData";

const Products = () => {
  return (
    <section className="products">
        <div className='container'>
            <div className='products__content'>
                <div className='products__header'>
                    <SectionHeader suptitle={"Organic"} title={"Our Products"} />
                </div>
                <div className='products__cards'>
                    {data.map((item)=>{
                        return <ProductsCard key={item.id} {...item} />
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products