import Table from 'react-bootstrap/Table';

function OrderTable() {
  return (
    <Table className='MainTable' striped bordered hover variant="light">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Product Title</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ashwin</td>
          <td>Shirt</td>
          <td>Men</td>
          <td>2</td>
          <td>499</td>
          <td>998</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Amirtha</td>
          <td>Saree</td>
          <td>Women</td>
          <td>1</td>
          <td>799</td>
          <td>799</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Deepak</td>
          <td>Mobile</td>
          <td>Electronics</td>
          <td>1</td>
          <td>8999</td>
          <td>8999</td>
        </tr>
         
        
      </tbody>
    </Table>
  );
}

export default OrderTable;