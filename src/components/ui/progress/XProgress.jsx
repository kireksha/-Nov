import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import './style.css';
export function XProgress({
	children,
	className,
	value,
	buffer,
	color,
	label,
	stripe,
	animation,
	indeterminate,
	size,
	width,
	reverse,
	...props
}) {
	const attrs = useMemo(() => ({
		role: 'progressbar',
		'aria-valuemin': 0,
		'aria-valuemax': 100,
		'aria-valuenow': indeterminate === true ? void 0 : value,
	}));
	const trackAttrs = useMemo(
		() => ({
			style: { width: buffer && !indeterminate ? `${buffer}%` : '' },
		}),
		[buffer, indeterminate],
	);
	const valueAttrs = useMemo(
		() => ({
			style: { width: value && !indeterminate ? `${value}%` : '' },
		}),
		[value, indeterminate],
	);

	function progressBar() {
		return (
			<div
				{...props}
				{...attrs}
				className={classNames('x-progress-bar', className, {
					'x-progress-bar--stripe': !indeterminate && stripe,
					'x-progress-bar--animation': !indeterminate && animation,
					'x-progress-bar--indeterminate': indeterminate,
					'x-progress-bar--reverse': reverse,
					[`x-progress-bar--${color}`]: color,
				})}
			>
				<div {...trackAttrs} className="x-progress-bar__track"></div>
				<div {...valueAttrs} className="x-progress-bar__value"></div>
				{!indeterminate && children && (
					<div className="x-progress-bar__label">{children}</div>
				)}
				{!indeterminate && !children && label && (
					<div className="x-progress-bar__label">{value}%</div>
				)}
			</div>
		);
	}
	const MAGIC_RADIUS_CONSTANT = 20;
	const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;

	const normalizedValue = useMemo(
		() => Math.max(0, Math.min(100, parseFloat(value))),
		[],
	);
	const diameter = useMemo(() => (MAGIC_RADIUS_CONSTANT / (1 - width / size)) * 2, []);
	const strokeWidth = useMemo(() => (width / size) * diameter, []);
	const strokeDashOffset = useMemo(
		() => ((100 - normalizedValue) / 100) * CIRCUMFERENCE,
		[],
	);
	function progressCircle() {
		return (
			<div
				{...props}
				{...attrs}
				className={classNames('x-progress-circular', className)}
			>
				<svg
					style={
						{
							//transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`,
						}
					}
					xmlns="http://www.w3.org/2000/svg"
					viewBox={`0 0 ${diameter} ${diameter}`}
				>
					<circle
						className={classNames('x-progress-circular__underlay', {
							[`text-${color}`]: color,
						})}
						fill="transparent"
						cx="50%"
						cy="50%"
						r={MAGIC_RADIUS_CONSTANT}
						strokeWidth={strokeWidth}
						strokeDasharray={CIRCUMFERENCE}
						strokeDashoffset={0}
					/>

					<circle
						className="x-progress-circular__overlay"
						fill="transparent"
						cx="50%"
						cy="50%"
						r={MAGIC_RADIUS_CONSTANT}
						strokeWidth={strokeWidth}
						strokeDasharray={CIRCUMFERENCE}
						strokeDashoffset={strokeDashOffset}
					/>
				</svg>
				{!indeterminate && children && (
					<div className="x-progress-circular__label">{children}</div>
				)}
				{!indeterminate && !children && label && (
					<div className="x-progress-circular__label">{value}%</div>
				)}
			</div>
		);
	}

	return progressCircle();
}

XProgress.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	value: PropTypes.number,
	buffer: PropTypes.number,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'negative',
		'positive',
		'info',
	]),
	label: PropTypes.bool,
	stripe: PropTypes.bool,
	animation: PropTypes.bool,
	indeterminate: PropTypes.bool,
	reverse: PropTypes.bool,
};
