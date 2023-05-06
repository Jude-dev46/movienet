const Footer = () => {
  return (
    <div className="container flex flex-col items-center gap-2 mx-auto mt-8 pt-4 pb-5 text-center border-t-2">
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/jude-olajumoke-002426246/">
          <i className="fa fa-linkedin-square square-icon"></i>
        </a>
        <a href="https://www.twitter.com/judeoscar4">
          <i className="fa fa-twitter-square square-icon"></i>
        </a>
        <a href="https://www.facebook.com/jude.olajumoke">
          <i className="fa fa-facebook-square square-icon"></i>
        </a>
        <a href="https://www.vcarrd.me/judeolajumoke">
          <i className="fa fa-address-card square-icon"></i>
        </a>
      </div>
      <p>copyright &copy; 2023 Jude Oscar + The Movie Database</p>
    </div>
  );
};

export default Footer;
