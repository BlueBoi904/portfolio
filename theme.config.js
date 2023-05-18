const YEAR = new Date().getFullYear()
import { FaLinkedin, FaEnvelope, FaGithubAlt } from 'react-icons/fa';
import copy from "copy-to-clipboard";

function copy_text() {
  copy("cliffordmirschel@gmail.com");
}
export default {

  footer:
    <div>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{YEAR}</time> © Cliff Mirschel.

        <a href="https://mail.google.com/mail" onclick={copy_text} target="_blank"><FaEnvelope /></a>

        <a href="https://www.linkedin.com/in/cliff-mirschel/" target="_blank"><FaLinkedin /></a>

        <a href="https://github.com/BlueBoi904" target="_blank"><FaGithubAlt /></a>
        <style jsx>{`
        a {
          float: right;
          padding-right: .25rem;
          padding-left: .25rem;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      </small>
    </div>

}
//  - GitHub: [blueboi904](https://github.com/blueboi904) <DiGithubAlt />
//  - Linkedin: [in/cliff-mirschel](https://www.linkedin.com/in/cliff-mirschel/) <FaLinkedin />
//  - Email: cliffordmirschel@gmail.com <FaEnvelope />