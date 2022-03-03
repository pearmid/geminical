import React from 'react';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField(props) {
    return (
        <>
                    <AppTextInput
                        //autoCapitalize="none"
                        //autoCorrect={false}
                        //icon="email"
                        //keyboardType="email-address"
                        onBlur={() => setFieldTouched("email") }
                        onChangeText={handleChange("email")}
                        //placeholder="Email"
                    ></AppTextInput>
                    <ErrorMessage error={errors.email} visible={touched.email} />
        </>
    );
}

export default AppFormField;