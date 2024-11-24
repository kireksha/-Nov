import { XSpinnerBase } from './XSpinnerBase';

export function XSpinner({ size = '1em', thickness = 5, color }) {
	return (
		<XSpinnerBase
			className="x-spinner--mat"
			size={size}
			color={color}
			viewBox="25 25 50 50"
		>
			<circle
				className="x-spinner__path"
				cx="50"
				cy="50"
				r="20"
				fill="none"
				stroke="currentColor"
				strokeWidth={thickness}
				strokeMiterlimit="10"
			></circle>
		</XSpinnerBase>
	);
}
