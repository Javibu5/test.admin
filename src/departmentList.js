import * as React from "react"
import { Datagrid, List , TextField} from "react-admin";



export const DepartmentList = props => (
    <List{...props}>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);