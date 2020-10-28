import React from "react";
import { Redirect } from "react-router-dom";
import { firebaseAuth } from "../../fisebase";
import { Composer } from "./Composer";
import { Header } from "./Header";
import { SideBar } from "./Sidebar";
import {ListMessageClass} from "./ListMessage"

export class Home extends React.Component {
  state = {
    loggedInUser: null,
    loading: true,
    activeCon: null,
  };

  handleChangeActiveCon = (conversation) => {
    this.setState({
      activeCon: conversation,
    });
  };

  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedInUser: user,
        });
      }
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loggedInUser, loading, activeCon } = this.state;
    if (loading) {
      return <p>Try to login ...</p>;
    }
    if (!loggedInUser && !loggedInUser) {
      return <Redirect to="/auth/login" />;
    }
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: 200 }}>
          <SideBar
            loggedInUser={loggedInUser}
            activeCon={activeCon}
            onConClick={this.handleChangeActiveCon}
          />
        </div>
        {activeCon ? (
          <div>
            <Header activeCon={activeCon} />
            <ListMessageClass activeCon={activeCon}/>
            <Composer activeCon={activeCon} loggedInUser={loggedInUser} />
          </div>
        ) : null}
      </div>
    );
  }
}
