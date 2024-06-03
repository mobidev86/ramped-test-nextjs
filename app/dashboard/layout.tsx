import { Navbar } from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="h-full w-full">
        <Navbar />
        <div className="px-64">
            {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
  