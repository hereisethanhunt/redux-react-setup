import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveDropdownData } from "../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["India", "China", "Japan", "USA"]
    };
  }
  initialiseData = () => {
    this.props.saveDropdownData(this.state.data);
  };
  componentWillMount() {
    this.initialiseData();
  }

  render() {
    console.log(this.props.DropdownData);
    return (
      <div>
        {this.props.DropdownData &&
          Object.keys(this.props.DropdownData).length !== 0 &&
          this.props.DropdownData.map(elem => {
            return <p key={elem}>{elem}</p>;
          })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveDropdownData }, dispatch);
}

function mapStateToProps({ DropdownData }) {
  return { DropdownData };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
