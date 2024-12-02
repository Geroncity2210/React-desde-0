import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (userName)=> `@${userName}`
  return (
    <section className="App">
      <TwitterFollowCard initialisFollowing = {true} userName="midudev" name="Miguel Angel Durán"/>
      <TwitterFollowCard initialisFollowing={false} userName="pheralb" name="Pablo Hernandez" />
      <TwitterFollowCard initialisFollowing userName="elonmusk" name="Elon Musk" />
    </section>
  );
}
// 