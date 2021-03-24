import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ConfirmedAccount = (props) => {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        await axios.post("/confirmation", { token: props.match.params.token });
        history.push("/confirm_token/:token");
      } catch (err) {}
    })();
  }, [history, props.match.params.token]);

  return (
    <div className="confirmCard">
      <div className="confirmForm">
        <h1 className="confirmHeader">Congratulations!</h1>
        <br />
        <h3>
          You have successfully confirmed your Account! You make now log in!
        </h3>
      </div>
    </div>
  );
};

export default ConfirmedAccount;
