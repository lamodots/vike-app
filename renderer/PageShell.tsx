export { PageShell };

import React from "react";
import { Layout } from "../components/Layout";
import { Content } from "../components/Content";
import { Navbar } from "../components/NavBar";
import { Logo } from "../components/Logo";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./PageShell.css";

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Navbar>
            <Logo />
            <Link href="/">Welcome</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </Navbar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}
