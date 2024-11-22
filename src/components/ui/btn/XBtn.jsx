import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, memo, useMemo } from 'react';
import { XIcon } from '../icon';
import './style.scss';

const XBtnRoot = forwardRef(function XBtn(
	{
		children,
		className,
		active,
		icon,
		iconRight,
		color,
		size,
		LinkComponent,
		to,
		href,
		disabled,
		tabIndex = 0,
		target,
		...props
	},
	ref,
) {
	const TagProp = useMemo(
		() => (to || href ? LinkComponent : 'button'),
		[to, href, LinkComponent],
	);
	const attrs = {
		'aria-disabled': disabled,
		tabIndex: !disabled ? (tabIndex ?? 0) : -1,
	};
	if (TagProp === 'button') {
		attrs.type = type ?? 'button';
		attrs.disabled = disabled;
	} else if (TagProp === LinkComponent) {
		attrs.to = to;
		attrs.href = href || to;
		attrs.target = target;
	}

	const isIcon = useMemo(
		() =>
			(!!icon != !!iconRight && !children) ||
			(children?.type === XIcon && !icon && !iconRight),
		[children, icon, iconRight],
	);
	return (
		<button
			{...props}
			{...attrs}
			className={classNames(
				'x-btn',
				{
					'x-btn--flat': props.flat || props.link,
					'x-btn--text': props.text,
					'x-btn--tonal': props.tonal,
					'x-btn--plain': props.plain,
					'x-btn--outline': props.outline,
					'x-btn--block': props.block,
					'x-btn--square': props.square,
					'x-btn--round': props.round,
					'x-btn--rounded': props.rounded,
					'x-btn--dimmed': props.dimmed,
					'x-btn--link': props.link,
					'x-btn--icon': isIcon,
					'x-btn--active': active,
					[`x-btn--${color}`]: color,
					[`x-btn--${size}`]: size,
				},
				className,
			)}
			ref={ref}
		>
			<div className="x-btn-outline"></div>
			<div className="x-btn-backdor"></div>
			{icon && <XIcon className={!isIcon && '-ml-2 mr-2'}>{icon}</XIcon>}
			{children && <span className="x-btn-content">{children}</span>}
			{iconRight && <XIcon className={!isIcon && 'ml-2 -mr-2'}>{iconRight}</XIcon>}
		</button>
	);
});

XBtnRoot.defaultProps = {
	LinkComponent: 'a',
	target: '_self',
};
XBtnRoot.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string]),
	className: PropTypes.string,
	dimmed: PropTypes.bool,
	flat: PropTypes.bool,
	text: PropTypes.bool,
	tonal: PropTypes.bool,
	plain: PropTypes.bool,
	outline: PropTypes.bool,

	round: PropTypes.bool,
	block: PropTypes.bool,
	square: PropTypes.bool,
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	link: PropTypes.bool,

	icon: PropTypes.string,
	iconRight: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.PropTypes.string,
	onClick: PropTypes.func,

	value: PropTypes.any,
	LinkComponent: PropTypes.any,
	target: PropTypes.string,
	to: PropTypes.any,
	href: PropTypes.any,
};

export const XBtn = memo(XBtnRoot);
