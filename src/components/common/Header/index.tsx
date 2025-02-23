"use client";

const Header = () => {
  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "visible",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              color: "#7c8aa8",
              fontSize: "4rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Omar Villadiego{" "}
          </h2>
          <h1
            style={{
              color: "#7c8aa2",
              fontSize: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Desarrollador Web
            <span>Node JS - Full Stack</span>
          </h1>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </section>
  );
};
export default Header;
