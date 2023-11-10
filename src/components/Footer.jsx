const Footer = () => {
  return (
    <div className="footer-comp">
      <div className="footer-copyright">
        <h3>Made with 💚 by Kruti Dewda</h3>
      </div>
      <div className="footer-social">
        <h3>Connect :</h3>
        <button
          type="button"
          onClick={() =>
            window.open("")
          }
        >
          <i className="fa-brands fa-linkedin-in fa-fade"></i>
        </button>
        <button
          type="button"
          onClick={() => window.open("")}
        >
          <i className="fa-brands fa-github fa-fade"></i>
        </button>
      </div>
    </div>
  );
};

export default Footer;
