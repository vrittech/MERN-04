import Section1 from "../assets/section-1.gif";
// import { styled } from "styled-components";

// import card from "./card.module.css";

// const Div1 = styled.div`
//   margin-left: 200px;
//   margin-right: 200px;
//   padding-top: 15px;
//   padding-bottom: 15px;
// `;

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const Div2 = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Span = styled.span`
//   color: white;
//   padding: 10px;
//   background: red;
//   border-radius: 4px;
// `;

// const H2 = styled.h2`
//   text-align: center;
// `;

// const Image = styled.img`
//   width: 100%;
// `;

// const P = styled.p`
//   text-align: center;
// `;

export const Card = () => {
  return (
    <div className="mx-50 large:mx-200 py-15">
      <section className="flex flex-col gap-2.5 large:gap-5 mb-5">
        <div className="flex justify-center">
          <span className="bg-danger rounded text-sm large:text-lg text-white p-2.5">
            Special tag
          </span>
        </div>

        <h2 className="text-center text-2xl large:text-5xl font-extrabold m-0 mobie:mx-20">
          Lorem ipsum dolor sit
        </h2>

        <img className="w-full" src={Section1} alt="Lorem ipsum dolor sit" />

        <p className="text-center m-0 large:mx-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
          doloribus itaque quae quas odio inventore culpa, nisi incidunt? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
          voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
          doloribus itaque quae quas odio inventore culpa, nisi incidunt?
        </p>
      </section>
    </div>

    // <div className={card.card}>
    //   <section className={card["card-section"]}>
    //     <div className={card.tag}>
    //       <span>Special tag</span>
    //     </div>

    //     <h2 className={card["text-center"]}>Lorem ipsum dolor sit</h2>

    //     <img
    //       src={Section1}
    //       alt="Lorem ipsum dolor sit"
    //       className={card["card-image"]}
    //     />

    //     <p className={card["text-center"]}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt? Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt?
    //     </p>
    //   </section>
    // </div>

    // <Div1>
    //   <Section>
    //     <Div2>
    //       <Span>Special tag</Span>
    //     </Div2>

    //     <H2 style={{ textAlign: "center" }}>Lorem ipsum dolor sit</H2>

    //     <Image
    //       src={Section1}
    //       alt="Lorem ipsum dolor sit"
    //       style={{ width: "100%" }}
    //     />

    //     <P>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt? Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt?
    //     </P>
    //   </Section>
    // </Div1>

    // <div
    //   style={{
    //     marginLeft: "200px",
    //     marginRight: "200px",
    //     paddingTop: "15px",
    //     paddingBottom: "15px",
    //   }}
    // >
    //   <section
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "20px",
    //       marginBottom: "20px",
    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "center" }}>
    //       <span
    //         style={{
    //           color: "white",
    //           padding: "10px",
    //           background: "red",
    //           borderRadius: "4px",
    //         }}
    //       >
    //         Special tag
    //       </span>
    //     </div>

    //     <h2 style={{ textAlign: "center" }}>Lorem ipsum dolor sit</h2>

    //     <img
    //       src={Section1}
    //       alt="Lorem ipsum dolor sit"
    //       style={{ width: "100%" }}
    //     />

    //     <p style={{ textAlign: "center" }}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt? Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex
    //       voluptates dolorem ea hic nesciunt fugit, at in eaque natus nostrum,
    //       doloribus itaque quae quas odio inventore culpa, nisi incidunt?
    //     </p>
    //   </section>
    // </div>
  );
};
