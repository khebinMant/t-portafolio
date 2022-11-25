
export const Inputs = ({props}) => {
    console.log(props)
    const {value, onChange, option, min, max} = props
    return (
        <>
            <input step="1"  defaultValue="150"  type="range" min={min} max={max} onChange={onChange} value={value} id="kgPerson"/>
                {
                    option === 'kg'
                    ?
                    <p style={{display:'inline'}}>{value} <b>{option}</b></p>
                    :
                    <p style={{display:'inline'}}>{value*.01} <b>{option}</b></p>
                }

        </>
    )
}
