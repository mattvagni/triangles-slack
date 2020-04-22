import React from "react";

import Button from "../Button";
import Card from "../Card";
import TextInput from "../TextInput";
import Text from "../Text";
import Heading from "../Heading";
import checkCircleIcon from "./images/check-circle.svg";
import crossCircleIcon from "./images/cross-circle.svg";

import "./styles.css";

class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      link: "",
      requestStatus: "idle",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    if (window.mixpanel) {
      window.mixpanel.track("join-form-submit");
    }

    this.setState({
      requestStatus: "pending",
    });

    fetch("/.netlify/functions/request-invite/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        link: this.state.link,
      }),
    })
      .then((res) => {
        if (res.status > 200) {
          throw new Error("Back-end error");
        }
        this.setState({
          email: "",
          link: "",
          requestStatus: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          requestStatus: "failure",
        });
      });
  }

  onFieldChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  renderRequestStatus() {
    const imageProps = {
      className: "join-form__status-icon",
      "aria-hidden": true,
    };

    if (this.state.requestStatus === "success") {
      return (
        <React.Fragment>
          <img alt="" src={checkCircleIcon} {...imageProps} />
          <Text size="small">
            <Text color="white" size="small" isInline>
              Nice!
            </Text>{" "}
            You should receive an invite in a bit.
          </Text>
        </React.Fragment>
      );
    }

    if (this.state.requestStatus === "failure") {
      return (
        <React.Fragment>
          <img alt="" src={crossCircleIcon} {...imageProps} />
          <Text size="small">
            <Text color="white" size="small" isInline>
              Gahh.
            </Text>{" "}
            Something went wrong, please try again later.
          </Text>
        </React.Fragment>
      );
    }

    return null;
  }

  render() {
    const { requestStatus } = this.state;
    const isLoading = requestStatus === "pending";
    const didSubmit =
      requestStatus === "success" || requestStatus === "failure";

    return (
      <Card className="join-form" isLoading={isLoading}>
        <Heading level={1}>Join</Heading>
        <Text>
          By joining you agree to our above code of conduct. Your details will
          only be shared with group admins.
        </Text>

        <form onSubmit={this.onSubmit}>
          <TextInput
            id="email"
            name="email"
            placeholder="e.g. susan.kare@gmail.com"
            label="Your email:"
            autoComplete="off"
            required={true}
            type="email"
            value={this.state.email}
            onChange={this.onFieldChange}
          />
          <TextInput
            id="link"
            name="link"
            placeholder="e.g. www.twitter.com/jnr_designer"
            label="Your website / Twitter / Dribbble:"
            helpText="(Just to double check you aren't a recruiter.)"
            autoComplete="off"
            required={true}
            type="text"
            pattern="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
            title="Must be a valid URL."
            value={this.state.link}
            onChange={this.onFieldChange}
          />
          <Button disabled={isLoading}>Request an invite</Button>
        </form>

        {didSubmit && (
          <div className="join-form__status">{this.renderRequestStatus()}</div>
        )}
      </Card>
    );
  }
}

export default JoinForm;
