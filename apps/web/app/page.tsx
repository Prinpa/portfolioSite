
import { TopNav } from "../components/layout/topNav";

export default function Home() {
  return (
    <div>
        <TopNav/>
        <div>You can close the other applicants portfolios' now</div>
        <p>Hey! I'm Patrick Dowd, a gradute software enginner</p>
        <div>What can i do?</div>
        <ul>
          <li>Ci/cd pipeline</li>
          <li>Make games <a href="/polarity"> </a></li>
          <div>POLARITY RAHHHH</div>
          <li>Frontend work 
            <ul>
              <li>this very site is public <a href="https://github.com/Prinpa/portfolioSite">here!</a></li>
              <li>list the library/frameworks/language ive used like </li>
              <li>django, react, svelte </li>
            </ul>
          </li>
          <li>Backend work  
            <ul>
              <li>database design and development across both sql and no-sql, inlcuding DMBS and ORM</li>
              <li>RESTful api creation, usage and documentation</li>
              <li>Unit, intergration and system testing</li>
            </ul>
          </li>
          <li>Familiar with cyber security priciples </li>
          <li>cloud computing fundamentals </li>
        </ul>
  </div>
  );
}
