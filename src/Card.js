import './App.css';

function Card() {
  var data=null;
  
  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/julitaras");
    const json = await getData.json();

    data = {
      profile: json.login,
      name: json.name,
      description: json.bio
    };
  }
  fetchData();
  
  return (
    <div className="Card">
      <h1>{data.profile}</h1>
    </div>
  );
}

export default Card;
