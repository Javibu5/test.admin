import {SimpleShowLayout, TextField, RichTextField, NumberField, Show } from 'react-admin'

export const DepartmentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="body" />
            <NumberField source="nb_views" />
        </SimpleShowLayout>
    </Show>
);
