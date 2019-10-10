import React from "react";
import "./App.css";
import PriceList from "./components/PriceList";
const items = [
  {
    id: 1,
    title: "去云南旅行",
    price: "200",
    date: "2018-09-10",
    category: {
      id: "1",
      name: "旅行",
      type: "outcome"
    }
  },
  {
    id: 2,
    title: "去黑龙江上学",
    price: "20000",
    date: "2016-09-01",
    category: {
      id: "2",
      name: "读大学",
      type: "outcome"
    }
  },
  {
    id: 3,
    title: "去上海工作",
    price: "20000",
    date: "2020-07-01",
    category: {
      id: "3",
      name: "工作",
      type: "income"
    }
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "shizhengyang"
    };
  }
  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <PriceList />
      </div>
    );
  }
}

export default App;
