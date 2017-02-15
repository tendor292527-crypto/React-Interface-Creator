import React from 'react'

const Section3 = (props) => {
  const {
    arrIndex, data, edit, onChange,
    onClickSave, onClickDelete,
  } = props

  if (!edit) {
    return (
      <div>
        <h1>{data.createdAt}</h1>
        <img alt="" src={data.linkImage1} />
        <img alt="" src={data.linkImage2} />
        <img alt="" src={data.linkImage3} />
        <div className="FormActions">
          <button type="button" onClick={e => onClickSave(arrIndex, e)}>Edit</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <label htmlFor="f1" className="FormGroup">
        <span>Created At</span>
        <input
          className="FormControl"
          name="createdAt"
          type="text"
          value={data.createdAt}
          onChange={e => onChange(arrIndex, e)}
        />
      </label>
      <label htmlFor="f2" className="FormGroup">
        <span>Link Image 1</span>
        <input
          className="FormControl"
          name="linkImage1"
          type="text"
          value={data.linkImage1}
          onChange={e => onChange(arrIndex, e)}
        />
      </label>
      <label htmlFor="f3" className="FormGroup">
        <span>Link Image 2</span>
        <input
          className="FormControl"
          name="linkImage2"
          type="text"
          value={data.linkImage2}
          onChange={e => onChange(arrIndex, e)}
        />
      </label>
      <label htmlFor="f4" className="FormGroup">
        <span>Link Image 3</span>
        <input
          className="FormControl"
          name="linkImage3"
          type="text"
          value={data.linkImage3}
          onChange={e => onChange(arrIndex, e)}
        />
      </label>
      <div className="FormActions">
        <button type="button" onClick={e => onClickSave(arrIndex, e)}>Save</button>
        <button type="button" onClick={e => onClickDelete(arrIndex, e)}>Delete</button>
      </div>
    </div>
  )
}

Section3.propTypes = {
  arrIndex: React.PropTypes.number.isRequired,
  data: React.PropTypes.shape({}).isRequired,
  edit: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired,
  onClickSave: React.PropTypes.func.isRequired,
}

export default Section3
