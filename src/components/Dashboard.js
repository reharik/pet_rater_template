import React from "react";
import "../css/dashboard.css";
import { Table, Column } from "knoll";
import dashboardData from './../dashboardData';


const Dashboard = () => {
  return (
    <div className={"Dashboard"}>
      <Table data={dashboardData} className={"Dashboard__table"}>
        <Column
          className="Dashboard__column"
          header="Image"
          cell={row => <img height="50px" src={row.image} alt={row.name} />}
        />
        {/* You can also use the `cellKey` prop as a shorthand to get a property */}
        <Column className="Dashboard__column" header="Name" cellKey="name" />
        <Column className="Dashboard__column" header="# of Pros" cellKey="totalPros" />
        <Column className="Dashboard__column" header="# of Cons" cellKey="totalCons" />
        <Column className="Dashboard__column" header="% Pros" cell={(row) => `${row.percentPros} %`} />
        <Column className="Dashboard__column" header="% Cros" cell={(row) => `${row.percentCons} %`} />
        <Column className="Dashboard__column" header="Adoption Chances" cell={(row) => `${row.adoptionChances} %`} />
      </Table>
    </div>
  );
};

export { Dashboard };
