import Table from 'react-bootstrap/Table';

function User() {
  return (
    <div className="mt-2">
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Admin</td>
            <td><button className="btn btn-primary">Edit</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>User</td>
            <td><button className="btn btn-primary">Edit</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mike Johnson</td>
            <td>mike.johnson@example.com</td>
            <td>Moderator</td>
            <td><button className="btn btn-primary">Edit</button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default User;
