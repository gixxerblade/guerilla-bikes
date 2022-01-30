import { Link } from "remix";
import { Nav } from "./Nav";

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Nav />
      <div className="remix-app__main">
        <div className="container remix-app__main-content">
          {children}
        </div>
      </div>
      <footer className="remix-app__footer">
        <div className="container remix-app__footer-content">
          <p>
            &copy;
            {new Date().getFullYear()}
            {" "}
            Guerilla Bikes
          </p>
        </div>
      </footer>
    </div>
  );
}
