import React from "react";
import ReactDOM from "react-dom";
import Avatar from "react-avatar-edit";
// import Image from "react-bootstrap/Image";

class AvatarCropper extends React.Component {
  constructor(props) {
    super(props);
    const src = "";

    this.state = {
      preview: null,
      src,
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  render() {
    return (
      <>
        <Avatar
          width={200}
          height={200}
          borderStyle={{
            borderRadius: "100px",
            border: "2px dashed rgb(151, 151, 151)",
            margin: "auto",
          }}
          //   margin={"auto"}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
          className={this.state.className}
        />
      </>
    );
  }
}

ReactDOM.render(<AvatarCropper />, document.getElementById("root"));
export default AvatarCropper;
