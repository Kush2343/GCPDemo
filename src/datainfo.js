import React from 'react'
import ProductData from './productdata'

export default function datainfo() {
    const DisplayProduct=ProductData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.Price}</td>
                </tr>
            )
        }
    )
  return (
    <div>
    <table class="table table-striped">
        <thead>
            <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {DisplayProduct}
        </tbody>
    </table>
</div>
  )
}
