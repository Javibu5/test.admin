import * as React from "react";
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';

import authProvider from './authProvider';
import {DepartmentList} from './departmentList';
import {DepartmentCreate } from './departmentCreate';


const App = () => (
        <Admin authProvider= {authProvider} dataProvider = { dataProvider }  >
          <Resource name="departments"  list={DepartmentList} create= { DepartmentCreate }/>
        </Admin>
);

export default App;
