import cls from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type='button'
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button
