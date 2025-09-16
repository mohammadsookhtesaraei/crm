import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="header">
        <h2>project crm</h2>
        <Link href={"/add-customer"}>Add Customer</Link>
      </header>
      <main className="main">{children}</main>

      <footer className="footer">
        <a>crm project</a> next.js
      </footer>
    </>
  );
};

export default Layout;
