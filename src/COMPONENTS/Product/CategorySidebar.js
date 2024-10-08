import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Whey Protein'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Casein Protein'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Pea Protein'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Brown Rice Protein'
        },
        {
            id: 5,
            categoryimage: img5,
            categoryname: 'Egg White Protein'
        }
        
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar