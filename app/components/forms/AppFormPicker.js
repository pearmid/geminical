import { useFormikContext } from 'formik';
import React from 'react';
import AppPicker from '../AppPicker';
import { ErrorMessage } from '.';

function AppFormPicker({items, name, width, numberOfColumns, PickerItemComponent, placeholder}) {
    const {errors, setFieldValue, touched, values} = useFormikContext()
    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                numberOfColumns={numberOfColumns}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;