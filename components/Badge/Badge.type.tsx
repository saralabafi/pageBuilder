import { Properties } from 'csstype'


export interface IBadgeProps {
    badgeTitle: string
    link?: string
    backgroundColor?: 'bg-blue-100' | 'bg-gray-100' | 'bg-red-100' | 'bg-green-100' | 'bg-yellow-100' | 'bg-indigo-100' | 'bg-purple-100' | 'bg-pink-100'
    txtColor?: 'text-blue-800' | 'text-gray-800' | 'text-red-800' | 'text-green-800' | 'text-yellow-800' | 'text-indigo-800' | 'text-purple-800' | 'text-pink-800'
    txtSize?: 'text-xs' | 'text-sm ' | 'text-md' | 'text-lg' | 'text-xlg'
    customCSS?: string
    sx?: Properties<string | number, string & {}>
}