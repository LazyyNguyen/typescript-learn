type RandomNumberType = {
    value: number
}

type PositionNumber = RandomNumberType & {
    isPosition:boolean,
    isNegative?:never,
    isZero?: never

}
type NegativeNumber = RandomNumberType & {
    isNegative:boolean,
    isPosition?:never,
    isZero?: never

}

type Zero = RandomNumberType & {
    isZero: boolean,
    isPosition?:never,
    isNegative?:never,

}

type RandomNumberProps = PositionNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
    isPosition,
    isNegative,
    isZero
}:RandomNumberProps)=>{
    return(
        <div>
            {value} {isPosition && 'position'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}