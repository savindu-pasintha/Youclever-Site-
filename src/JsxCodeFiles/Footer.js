import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <footer className="footer" style={{ background: "#23049d" }}>
        <Fade right big>
          <p className="footer__title">YOU-CLEVER</p>
          <div className="footer__social">
            <a href="{link.facebook}" className="footer__icon">
              <i className="bx bxl-facebook" />
            </a>
            <a href="{link.instergram}" className="footer__icon">
              <i className="bx bxl-instagram" />
            </a>
            <a href="{link.twiter}" className="footer__icon">
              <i className="bx bxl-twitter" />
            </a>
          </div>
          <p>© 2022 copyright all right reserved</p>
          <p style={{ fontSize: "15px", color: "yellow" }}>
            CEO savindu_Pasintha
            <span style={{ fontSize: "10px", color: "white" }}> && </span>{" "}
            supun_Sululakshana
            <span style={{ fontSize: "10px", color: "white" }}> || </span>
            savindupasingtha@gmail.com
            <span style={{ fontSize: "10px", color: "white" }}> || </span>
            +94768755787
          </p>
        </Fade>
      </footer>
    </div>
  );
}
