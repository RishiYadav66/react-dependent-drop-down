// Dependencies
import React, { useState } from "react";

// Styles
import "./tailwind.output.css";

const App = () => {
  const countries = [
    {
      name: "India",
      states: [
        {
          name: "Gujrat",
          town: [
            {
              name: "Surat"
            },
            {
              name: "Baroda"
            },
            {
              name: "Harshnagar"
            }
          ]
        },
        {
          name: "Maharashtra",
          town: [
            {
              name: "Mumbai"
            },
            {
              name: "Bandra"
            },
            {
              name: "Pune"
            }
          ]
        },
        {
          name: "UP",
          town: [
            {
              name: "Lucknow"
            },
            {
              name: "Kanpur"
            },
            {
              name: "Kannouj"
            }
          ]
        }
      ]
    },
    {
      name: "USA",
      states: [
        {
          name: "New Jersey",
          town: [
            {
              name: "Atlantic city"
            },
            {
              name: "Capetown"
            },
            {
              name: "Trentino"
            }
          ]
        },
        {
          name: "Texas",
          town: [
            {
              name: "Houston"
            },
            {
              name: "Austin"
            },
            {
              name: "Dallas"
            }
          ]
        },
        {
          name: "California",
          town: [
            {
              name: "Cambria"
            },
            {
              name: "San Diago"
            },
            {
              name: "San Fransisco"
            }
          ]
        }
      ]
    }
  ];
  const [country, setcountry] = useState();
  const [state, setstate] = useState([]);
  const [city, setcity] = useState();
  const [town, settown] = useState([]);
  const [choosetown, setchoosetown] = useState();
  const handlecountry = (e) => {
    setcountry(e.target.value);
    if (e.target.value === "Select Country") {
      return;
    }
    setstate(countries.find((ctr) => ctr.name === e.target.value).states);
  };
  const handlecity = (e) => {
    setcity(e.target.value);
    if (e.target.value === "Select State") {
      return;
    }
    settown(state.find((city) => city.name === e.target.value).town);
  };
  console.log(country);
  console.log(state);
  console.log(city);
  console.log(choosetown);

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className=" flex p-48 justify-center ">
        <select
          onChange={handlecountry}
          className="my-1 max-w-md mx-8 bg-green-100 p-5"
        >
          <option> Select Country </option>
          {countries.map((ctr, key) => (
            <option key={key} value={ctr.name}>
              {ctr.name}
            </option>
          ))}
        </select>
        <select
          onChange={handlecity}
          className="my-1 max-w-md mx-8 bg-orange-200 p-5"
        >
          <option>Select State</option>
          {state.map((state, key) => (
            <option key={key} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setchoosetown(e.target.value)}
          className="my-1 max-w-md mx-8 bg-purple-200 p-5"
        >
          <option>Select City</option>
          {town.map((state, key) => (
            <option key={key} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
