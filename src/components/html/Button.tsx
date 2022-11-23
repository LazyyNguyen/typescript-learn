type ButtonProps = {
    variant: 'primary'|'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>,'children'>
// tạo 1 type bao gồm tất cả trừ 1 vài field từ 1 type trước đó

export const CustomButton = ({variant,children,...rest}:ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}
