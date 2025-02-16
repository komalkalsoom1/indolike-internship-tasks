

import React from 'react'
import CategoryCard from './CategoryCard'
import { categoryData } from '../../public/Data/data'

const Category = () => {
  return (
    <div className='container pt-16'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg-grid-cols gap-4">
        {
            categoryData.map((data)=>(
                <CategoryCard
                key={data.id}
                img={data.img}
                name={data.name}
                count={data.count}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Category
