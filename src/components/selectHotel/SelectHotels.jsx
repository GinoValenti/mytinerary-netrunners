import "./selectHotel.css"
let SelectHotels = (props)=>{
    function onFilterValueChanged(event){
      
        props.filterValueSelected(event.target.value)
    }
    return (
        <div className="filter-area">
            <select onChange={onFilterValueChanged} className="select" name="isAvailable">
                <option value="all">All</option>
                <option value="higher">Higher</option>
                <option value="lower">Lower</option>
            </select>
        </div>
    )
}
export default SelectHotels