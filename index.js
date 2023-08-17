const Notification = (props) => {
  //  Write your code here.
  const { name, className, imgSource, id, imgId } = props;
  return (
    <div className={className} id={id}>
      <img src={imgSource} id={imgId} />
      <p>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div>
      <Notification
        imgId="images"
        id="commonId"
        name="Information Message"
        className="info-msg"
        imgSource="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        imgId="images"
        id="commonId"
        name="Success Message"
        className="success-msg"
        imgSource="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        imgId="images"
        id="commonId"
        name="Warning Message"
        className="warning-msg"
        imgSource="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        imgId="images"
        id="commonId"
        name="Error Message"
        className="error-msg"
        imgSource="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
