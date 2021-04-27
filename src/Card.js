import React, { useState, useEffect, Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function MyCard() {
  const [data, setState] = useState(0);
  
  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/julitaras");
    const json = await getData.json();

    const data = {
      profile: json.login,
      name: json.name,
      description: json.bio,
      logo: json.avatar_url,
      followers: json.followers,
      following: json.following,
      public_repos: json.public_repos,
      public_gists: json.public_gists,
      repos_url: json.repos_url

    };

    setState(data);
  }
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
  
    <Card style={{ width: '40rem' }} className="text-center">
    <Card.Img variant="top" src={data.logo} alt="image profile"/>
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"><Card.Link href="https://github.com/julitaras">{data.profile}</Card.Link></Card.Subtitle>
      <CardGroup>
      <Card style={{ width: '10rem' }} className="text-center" bg="secondary" text="white">
      <Card.Link href="https://github.com/julitaras?tab=repositories">
      <Card.Body>
      <Card.Title>Repos</Card.Title>
      <Card.Text>{data.public_repos}</Card.Text>
      </Card.Body>
      </Card.Link>
      </Card>
      <Card style={{ width: '10rem' }} className="text-center" bg="secondary" text="white">
      <Card.Link href="https://gist.github.com/julitaras">
      <Card.Body>
      <Card.Title>Gists</Card.Title>
      <Card.Text>{data.public_gists}</Card.Text>
      </Card.Body>
      </Card.Link>
      </Card>
      <Card style={{ width: '10rem' }} className="text-center" bg="secondary" text="white">
      <Card.Body>
      <Card.Title>Followers</Card.Title>
      <Card.Text>{data.followers}</Card.Text>
      </Card.Body>
      </Card>
      </CardGroup>
    </Card.Body>
  </Card>
  );
}

export default MyCard;
