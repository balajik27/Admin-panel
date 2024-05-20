import Table from 'react-bootstrap/Table';

function VendorTable() {
  return (
    <Table className='MainTable' striped bordered hover variant="light">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Vendor Name</th>
          <th>Email</th>
        
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Firoz</td>
          <td>firozfarzi@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Khaathir</td>
          <td>khaathirwar@gmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Tom Holland</td>
          <td>spiderman@gmail.com</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Wanda</td>
          <td>scarletwitch@gmail.com</td>
        </tr>
       
         
        
      </tbody>
    </Table>
  );
}

export default VendorTable;