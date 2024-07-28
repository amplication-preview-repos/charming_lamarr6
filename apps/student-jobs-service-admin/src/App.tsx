import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { EmployerList } from "./employer/EmployerList";
import { EmployerCreate } from "./employer/EmployerCreate";
import { EmployerEdit } from "./employer/EmployerEdit";
import { EmployerShow } from "./employer/EmployerShow";
import { InternshipList } from "./internship/InternshipList";
import { InternshipCreate } from "./internship/InternshipCreate";
import { InternshipEdit } from "./internship/InternshipEdit";
import { InternshipShow } from "./internship/InternshipShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StudentJobsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Employer"
          list={EmployerList}
          edit={EmployerEdit}
          create={EmployerCreate}
          show={EmployerShow}
        />
        <Resource
          name="Internship"
          list={InternshipList}
          edit={InternshipEdit}
          create={InternshipCreate}
          show={InternshipShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
