interface InputProps {
	label: string;
	type?: 'text' | 'email' | 'password';
	value: any;
	valueChanged: (newValue: any) => void;
	required?: boolean;
	doNotRenderWhen?: boolean;
}

export default function Input(props: InputProps) {
	return !props.doNotRenderWhen && (
		<div className={`
			flex flex-col mt-4
		`}>
			<label>{ props.label }</label>
			<input 
				type={ props.type ?? 'text' } 
				value={ props.value } 
				onChange={ (e) => props.valueChanged?.(e.target.value) }
				required={ props.required }
				className={`
					px-4 py-3 rounded-lg
					bg-gray-200 mt-2
					border 
					focus:border-blue-400 focus:outline-none focus:bg-white
				`} />
		</div>
	);
}