import React, { Component } from "react";
import axios from "axios";

class GoogleRedirect extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("userTempId");
    const urlParams = new URLSearchParams(window.location.search);
    const userTempId = urlParams.get("id");

    if (userTempId) {
      await this.fetchToken(userTempId);
    }
    console.log("userTempId", userTempId);
  }

  fetchToken = async (userTempId) => {
    console.log("userTempId", userTempId);
    try {
      const response = await axios.post(
        `http://localhost:9000/auth/facebook/login`,
        {}, // Request body, if needed; otherwise, it's an empty object
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userTempId}`, // Correctly set the Authorization header
          },
        }
      );

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        // Implement your redirection logic here
      } else {
        console.error("Failed to login with Google");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return <div>Logging in...</div>;
  }
}

export default GoogleRedirect;
