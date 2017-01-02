import React from 'react'

const Section1 = (props) => {
  const {
    arrIndex, data, edit, onChange,
    onClickSave, onClickDelete,
  } = props

  if (!edit) {
    return (
      <div>
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <img src={data.linkImage} role="presentation" />
        <div className="FormActions">
          <button type="button" onClick={e => onClickSave(arrIndex, e)}>Edit</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <label className="FormGroup" htmlFor="Sec1-title">
        <span>Title</span>
        <input className="FormControl" name="title" id="Sec1-title" type="text" value={data.title} onChange={e => onChange(arrIndex, e)} />
      </label>
      <label className="FormGroup" htmlFor="Sec1-subTitle">
        <span>Sub Title</span>
        <input className="FormControl" name="subTitle" id="Sec1-subTitle" type="text" value={data.subTitle} onChange={e => onChange(arrIndex, e)} />
      </label>
      <label className="FormGroup" htmlFor="Sec1-linkImage">
        <span>Link Image</span>
        <input className="FormControl" name="linkImage" id="Sec1-linkImage" type="text" value={data.linkImage} onChange={e => onChange(arrIndex, e)} />
      </label>
      <div className="FormActions">
        <button type="button" onClick={e => onClickSave(arrIndex, e)}>Save</button>
        <button type="button" onClick={e => onClickDelete(arrIndex, e)}>Delete</button>
      </div>
    </div>
  )
}

Section1.propTypes = {
  arrIndex: React.PropTypes.number,
  data: React.PropTypes.shape({}),
  edit: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onClickSave: React.PropTypes.func,
  onClickDelete: React.PropTypes.func,
}

export default Section1
