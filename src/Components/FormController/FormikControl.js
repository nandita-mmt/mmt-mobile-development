import Text from './Fields/Text';
import Email from './Fields/Email';
import NumberInput from './Fields/Number';
import Phone from './Fields/Phone';
import Radio from './Fields/Radio';
import NativeSelect from './Fields/NativeSelect';
import TextArea from './Fields/TextArea';
import Select from './Fields/Select';
import Password from './Fields/Password';
import File from './Fields/File';
import TextArray from './Fields/TextArray';

const FormikControl = props => {
	const { control, ...rest } = props;

	switch (control) {
		case 'text':
			return <Text {...rest} />;
		case 'email':
			return <Email {...rest} />;
		case 'phone':
			return <Phone {...rest} />;
		case 'number':
			return <NumberInput {...rest} />;
		case 'password':
			return <Password {...rest} />;
		case 'file':
			return <File {...rest} />;
		case 'textarea':
			return <TextArea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <Radio {...rest} />;
		case 'native-select':
			return <NativeSelect {...rest} />;
		case 'textarray':
			return <TextArray {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
