import React from "react";


const Pet = ({ name, animal, breed }) => {
    // return React.createElement("div", { id: "pet-root" }, [
    //   React.createElement("h2", {}, name),
    //   React.createElement("h2", {}, animal),
    //   React.createElement("h2", {}, breed),
    // ]);

return (
    <div>
        <h2>{name}</h2>
        <h3>{animal}</h3>
        <h3>{breed}</h3>
    </div>
)

  };

  export default Pet