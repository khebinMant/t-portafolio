import '../../styles/AgeCalPage.css'

export const Results = ({props}) => {
    const {years, months, days} = props
    return (
        <div className="results-age-content">
            <div>
                <p>{years || '-'}</p>
                <p>Years</p>
            </div>
            <div>
                <p>{months || '-'}</p>
                <p>Months</p>
            </div>
            <div>
                <p>{days || '-'}</p>
                <p>Days</p>
            </div>
        </div>
    )
}
