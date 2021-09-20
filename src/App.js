import "./App.css";
import tokenList from "./tokenList";
import { useState } from "react";
import TableHeader from "./components/TableHeader";

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

  const formatExtensions = (extensionsObj) => {
    for (const key in extensionsObj) {
      if (key.toLowerCase().includes("timestamp")) {
        const date = new Date(extensionsObj[key]);
        extensionsObj[key] = date.toLocaleString();
      }
    }
    return extensionsObj;
  };

  return (
    <div className="App">
      <h1>Token list</h1>
      <table className="table">
        <tbody>
          <tr>
            {tokenProperties.map((header, i) => {
              return (
                <TableHeader
                  key={i}
                  header={header}
                  headers={tokenProperties}
                  setOrder={setOrder}
                  order={order}
                />
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
                <td>{token["tags"]}</td>
                <td>
                  {token["extensions"]
                    ? JSON.stringify(formatExtensions(token["extensions"]))
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
