import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { machineSetInitial } from '../../store/actions';
import { parseFile } from '../../utils/fileParser';

const DataUpload = (props) => {
  const { setInitial } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  let label = 'Select initial file...';
  if (selectedFile && selectedFile.name) {
    label = selectedFile.name;
  }

  const handleUpload = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      try {
        const { result } = await parseFile(selectedFile);

        if (result) {
          setInitial(result.products, result.change);
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  return (
    <Form>
      <Form.File
        type="file"
        id="custom-file"
        label={label}
        className="mb-2"
        custom
        onChange={(e) => {
          setSelectedFile(e.target.files[0])
        }}
      />
      <Button
        variant="primary"
        type="submit"
        onClick={handleUpload}
      >
        Submit
      </Button>
    </Form>

  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitial: (products, change) => {
      dispatch(machineSetInitial({ products, change }));
    }
  };
};

export default connect(null, mapDispatchToProps)(DataUpload);
