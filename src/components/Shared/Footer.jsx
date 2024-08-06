export const Footer = () => {
  return (
    <>
      <Footer>
        <div className="bg-[#F6F8FA] border-y border-slate-300">newsletter</div>
        <div className="bg-[#F6F8FA] border-y border-slate-300">
          organization
        </div>
        <div className="bg-white px-4">
          <div className=""> div 1 </div>
          <hr />
          <div className="py-4 flex justify-between">
            <div>
              {" "}
              <p className="text-xs py-2 px-4">© 2024 Prokhure Energy</p>
            </div>
            <div className="flex justify-between">
              {" "}
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};
