import React, { Component } from "react";
import { Table } from "reactstrap";

class SearchContainer extends Component {
  state = {
    isLoadin: true,
    resultText: [],
    apiList: [],
  };
  handleResult = () => {
    this.setState({ resultText: this.props.location.state.data });
  };
  componentDidMount() {
    this.handleResult();
  }
  componentDidUpdate(preQ) {
    let previousQuery = preQ.location.state.data;
    let newQuery = this.props.location.state.data;
    if (previousQuery !== newQuery) {
      this.handleResult();
    }
  }
  render() {
    const apiList = this.state.resultText;
    const stylesColor = (color) => ({
        textDecoration: 'underline',
        textDecorationColor: color
      })
    const styles = {
      tab1: {
        cursor: "pointer",
        backgroundColor: "#cd5957",
        color: "white",
      },
      tab2: {
        cursor: "pointer",
        backgroundColor: "#78a4a2",
        color: "white",
      },
      tab3: {
        cursor: "pointer",
        backgroundColor: "#66bceb",
        color: "white",
      },
      tab4: {
        cursor: "pointer",
        backgroundColor: "#ffce56",
        color: "white",
      },
    };
    let toRender = (
      <div>
        {this.state.resultText.length > 0 ? (
          <pre>
            <small>{JSON.stringify(this.state.resultText, null, 2)}</small>
          </pre>
        ) : (
          <p>NO RESULTS FOUND</p>
        )}
      </div>
    );
    return (
      <Table responsive striped bordered hover size="sm">
        <thead style={styles.tab2}>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Id</th>
            <th>Price</th>
            <th>Colors</th>
            <th>Sizes</th>
            <th>Tags</th>
            <th>Images</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {apiList.map((x, index) => (
            <tr key={x._id}>
              <th scope="row">{index + 1}</th>
              <td>{x.title}</td>
              <td>{x._id}</td>
              <td>{x.price}$</td>
              <td>
                {x.color.map((x) => (
                  <span>
                    <span style={stylesColor(x)}>{x}</span> /{" "}
                  </span>
                ))}
              </td>
              <td>{x.size.map((x) => x + " / ")}</td>
              <td>{x.tags}</td>
              <td>{x.images.length}</td>
              <td>{x.description.substring(0, 30) + "... "}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default SearchContainer;
