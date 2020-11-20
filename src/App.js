import * as React from "react";
import {Admin, EditGuesser, Resource} from 'react-admin';
import dataProvider from './dataProvider'

import {DepartmentList} from './departmentList'
import {DepartmentShow} from './departmentShow'


const App = () => (
        <Admin  dataProvider = { dataProvider } >
          <Resource name="departments"  list={DepartmentList} edit={EditGuesser} show={DepartmentShow}/>
        </Admin>
);

export default App;
