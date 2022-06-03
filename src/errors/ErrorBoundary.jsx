import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  //log errors & by the way react logs the errors too
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError)
      return <h1 style={{ textAlign: "center" }}> Something went wrong</h1>;
    return this.props.children;
  }
}

export default ErrorBoundary;
