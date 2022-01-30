import styles from "./tailwind.css";
import { LiveReload, Meta, MetaFunction, Outlet } from "remix";
import { Nav } from './Nav'
import { Layout } from "./Layout";
import { Document } from "./Document";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}