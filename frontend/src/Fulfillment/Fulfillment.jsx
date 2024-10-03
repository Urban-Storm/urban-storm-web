import React from 'react';
import { Link } from 'react-router-dom';
import data from './data'; // Assuming your mock data is stored in `data.js`

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="fulfillment-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="fulfillment-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID</th>
                            <th>PAID AT</th>
                            <th>DELIVERED</th>
                            <th>DELIVERED AT</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.orders.map((order) => (
                            <tr 
                                key={order._id} 
                                style={{ color: order.isDelivered ? 'black' : 'red' }}
                            >
                                <td>{order._id}</td>
                                <td>{order.createdAt}</td>
                                <td>{order.totalPrice}</td>
                                <td>{order.user.name}</td>
                                <td>{order.isPaid.toString()}</td>
                                <td>{order.paidAt}</td>
                                <td>{order.isDelivered.toString()}</td>
                                <td>{order.deliveredDate || 'N/A'}</td>
                                <td>
                                    <Link to={"/order/" + order._id} className="button secondary">
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fulfillment;
