import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
      repos_url: json.repos_url,
      profile_url: json.html_url,
      bio: json.bio,
      company: json.company

    };

    setState(data);
  }
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card style={{ width: '20rem'}} className="text-center">
    <Card.Img variant="top" src={data.logo} alt="image profile"/>
    <Card.Body>
      <Card.Title className="mb-2">{data.name}</Card.Title>
      <Card.Subtitle class="text-muted" style={{ "font-size": '10px'}} className="mb-2">{data.company}</Card.Subtitle>
      <Card.Text style={{ "font-size": '10px'}} className="pt-3">{data.bio}</Card.Text>
      <CardGroup className="mb-0">
      <Card style={{ width: '5rem', height: '4rem' }} className="text-center" bg="secondary">
      <Card.Link href="https://github.com/julitaras?tab=repositories" class="text-white">
      <Card.Body>
      <Card.Title style={{ "font-size": '10px'}} className="mb-1">Repos</Card.Title>
      <Card.Text style={{ "font-size": '10px'}} >{data.public_repos}</Card.Text>
      </Card.Body>
      </Card.Link>
      </Card>
      <Card style={{ width: '5rem', height: '4rem' }} className="text-center" bg="secondary">
      <Card.Link href="https://gist.github.com/julitaras" class="text-white">
      <Card.Body>
      <Card.Title style={{ "font-size": '10px'}} className="mb-1">Gists</Card.Title>
      <Card.Text style={{ "font-size": '10px'}}>{data.public_gists}</Card.Text>
      </Card.Body>
      </Card.Link>
      </Card>
      <Card style={{ width: '5rem', height: '4rem' }} className="text-center" bg="secondary" text="white">
      <Card.Body>
      <Card.Title style={{ "font-size": '10px'}} className="mb-1">Followers</Card.Title>
      <Card.Text style={{ "font-size": '10px'}}>{data.followers}</Card.Text>
      </Card.Body>
      </Card>
      </CardGroup>
    </Card.Body>
    <Card.Footer className="text-muted"><Card.Link href={data.profile_url} class="text-dark"> <FaGithub/></Card.Link> <Card.Link href="https://www.linkedin.com/in/julieta-taras/" class="text-dark"><FaLinkedin/></Card.Link> <Card.Link href="https://twitter.com/JuliiTaras"class="text-dark"> <FaTwitter/></Card.Link></Card.Footer>
  </Card>
  );
}

export default MyCard;
