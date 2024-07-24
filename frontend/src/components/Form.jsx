import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CustomForm({ head, data }) {
  return (
    <div className='w-75 p-3 border border-3 shadow-lg' style={{ maxWidth: "500px", margin: "20px auto" }}>
      <Form>
        <h1 className='fs-2 text-center m-3'>{head}</h1>
        {data.map((item, index) => {
          return (
            <Form.Group className="mb-3" controlId={item.id} key={index}>
              <Form.Label>{item.label}</Form.Label>
              {item.type === 'select' ? (
                <Form.Select
                  aria-label="Default select example"
                  value={item.value}
                  onChange={(e) => onChange(item.name, e.target.value)}
                >
                  {item.options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value }
                  onChange={(e) => onChange(item.name, e.target.value)}
                />
              )}
            </Form.Group>
          );
        })}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>

  );
}

export default CustomForm;