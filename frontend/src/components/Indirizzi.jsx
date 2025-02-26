import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchAltro } from '../api';

const Indirizzi = () => {
  const [Indirizzi, setIndirizzi] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchAltro();
      setIndirizzi(data);
    };
    getPosts();
  }, []);

  return (
    <Container className="mt-4">
      <h1>Indirizzi</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Via</th>
            <th>Numero Civico</th>
          </tr>
        </thead>
        <tbody>
          {Indirizzi.map(indirizzi => (
            <tr key={indirizzi.id}>
              <td>{indirizzi.via}</td>
              <td>{indirizzi.numero_civico}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Indirizzi;
