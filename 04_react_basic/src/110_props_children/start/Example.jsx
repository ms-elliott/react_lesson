import Profile from "./components/Profile.jsx";
import Container from "./components/Container.jsx";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" childred={
        [
            <Profile key={profile[0].name} {...profile[0]} />,
            <Profile key={profile[1].name} {...profile[1]} />
        ]
      }
      first={<Profile key={profile[0].name} {...profile[0]} />}
      second={<Profile key={profile[1].name} {...profile[1]} />}>
      </Container>
    </div>
  );
};

export default Example;
