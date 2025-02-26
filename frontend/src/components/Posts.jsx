import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchPosts } from '../api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <Container className="mt-4">
      <h1>Dispositivi</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dispositivi</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(posts => (
            <tr key={posts.id}>
              <td>{posts.name}</td>
              <td>{posts.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Posts;
