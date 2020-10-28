import React from "react";
import { firebaseDb } from "../../fisebase";

export class ListMessageClass extends React.Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    firebaseDb
      .collection("messages")
      .where("conversationId", "==", this.props.activeCon.id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          this.setState({
            messages: [
              ...this.state.messages,
              {
                id: change.doc.id,
                content: change.doc.data().content,
                conversationId: change.doc.data().conversationId,
              },
            ],
          });
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.messages.map((msg) => {
          return <div>{msg.content}</div>;
        })}
      </div>
    );
  }
}
