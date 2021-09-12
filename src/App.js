import "./App.css";
import tokenList from "./tokenList";
import { useState } from "react";

const tokenProperties = [];
function getTokenProperties() {
  for (let i = 0; i < tokenList.tokens.length; i++) {
    for (const key in tokenList.tokens[i]) {
      if (!tokenProperties.includes(key)) {
        tokenProperties.push(key);
      }
    }
  }
}
getTokenProperties();

function App() {
  const [order, setOrder] = useState(tokenList.tokens);

  const sortByTag = () => {
    const orderClone = [...order];
    orderClone.sort((a, b) => (a.tags > b.tags ? 1 : -1));
    setOrder(orderClone);
  };

  return (
    <div className="App">
      <h1>Token list</h1>
      <table className="table">
        <tbody>
          <tr>
            {tokenProperties.map((header, i) => {
              return (
                <th scope="col" key={i}>
                  {header}
                </th>
              );
            })}
          </tr>
          {order.map((token, i) => {
            return (
              <tr key={i}>
                <td>{token["chainId"]}</td>
                <td>{token["address"]}</td>
                <td>{token["symbol"]}</td>
                <td>{token["decimals"]}</td>
                <td>{token["name"]}</td>
                <td
                  onClick={() => {
                    sortByTag();
                  }}
                >
                  {token["tags"]}
                </td>
                <td>
                  {token["extensions"]
                    ? JSON.stringify(token["extensions"])
                    : ""}
                </td>
                <td>{token["logoURI"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
