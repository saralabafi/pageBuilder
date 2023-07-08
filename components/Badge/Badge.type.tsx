import { Properties } from 'csstype'


export interface IBadgeProps {
    badgeTitle: string
    link?: string
    bgColor?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
    txtColor?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
    txtSize?: 'xs' | ' sm ' | 'md' | 'lg' | 'xlg'
    customCSS?: string
    sx?: Properties<string | number, string & {}>
}