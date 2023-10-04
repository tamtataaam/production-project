import cls from './Sidebar.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const ref = useRef(null)
    console.log(ref)

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button ref={ref} type='button' onClick={onToggle}>{t('TOGGLE')}</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}

export default Sidebar
