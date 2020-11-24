import { Create, SimpleForm , TextInput  } from 'react-admin';

export const DepartmentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="_id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);