import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Notyf } from "notyf";
import HomeVM from "../view-models/home.vm";
import classNames from "classnames";
import { signIn } from "../../Infrastructure/fetch.client";
import LoginVM from "../view-models/login.vm";
import * as actions from "../actions/app.actions";
import ShortId from "shortid";
import AddThis from "../components/add-this";
import { wrapper } from "../store/configureStore";

const PusherClient = require("../../Infrastructure/pusher.client");

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          <p className="has-text-centered">
            {user ? `Hello, ${user.displayName}` : "counter-culture.dev"}
          </p>
        </div>
      </div>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req }) => {
    const model = new HomeVM();
    if (req.user) {
      model.User = req.user;
      store.dispatch(actions.updateUser(model.User));
    }
    return {
      props: model.toObject(),
    };
  }
);

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
