import {SimpleShowLayout, RichTextField, Show } from 'react-admin'

export const DepartmentShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <RichTextField source="name" />
        </SimpleShowLayout>
    </Show>
);
