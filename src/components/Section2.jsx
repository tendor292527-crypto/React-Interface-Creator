import React from 'react'

const Section2 = (props, context) => {
  const {
    arrIndex, data, edit, onChange,
    onClickSave, onClickDelete,
  } = props

  if (!edit) {
    return (
      <div style={{ backgroundColor: data.backgroundColor }}>
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <a href={data.buttonLink} target={data.buttonTarget}>{data.buttonLabel}</a>
        <div className="FormActions">
          <button type="button" onClick={onClickSave.bind(null, arrIndex)}>Edit</button>
        </div>
      </div>
    )
  }

  const buttonTargetOptions = (
    <select className="FormControl" name="buttonTarget" id="Sec2-buttonTarget" value={data.buttonTarget} onChange={onChange.bind(null, arrIndex)}>
      <option value="_self">Self</option>
      <option value="_blank">Blank</option>
      <option value="_parent">Parent</option>
      <option value="_top">Top</option>
    </select>
  )

  return (
    <div>
      <label className="FormGroup" htmlFor="Sec2-title">
        <span>Title</span>
        <input className="FormControl" name="title" id="Sec2-title" type="text" value={data.title} onChange={onChange.bind(null, arrIndex)} />
      </label>
      <label className="FormGroup" htmlFor="Sec2-subTitle">
        <span>Sub Title</span>
        <input className="FormControl" name="subTitle" id="Sec2-subTitle" type="text" value={data.subTitle} onChange={onChange.bind(null, arrIndex)} />
      </label>
      <label className="FormGroup" htmlFor="Sec2-backgroundColor">
        <span>Background Color</span>
        <input className="FormControl" name="backgroundColor" id="Sec2-backgroundColor" type="text" value={data.backgroundColor} onChange={onChange.bind(null, arrIndex)} />
      </label>
      <label className="FormGroup" htmlFor="Sec2-buttonLink">
        <span>Button - Link</span>
        <input className="FormControl" name="buttonLink" id="Sec2-buttonLink" type="text" value={data.buttonLink} onChange={onChange.bind(null, arrIndex)} />
      </label>
      <label className="FormGroup" htmlFor="Sec2-buttonTarget">
        <span>Buton - Target</span>
        {buttonTargetOptions}
      </label>
      <label className="FormGroup" htmlFor="Sec2-buttonLabel">
        <span>Buton - Label</span>
        <input className="FormControl" name="buttonLabel" id="Sec2-buttonLabel" type="text" value={data.buttonLabel} onChange={onChange.bind(null, arrIndex)} />
      </label>
      <div className="FormActions">
        <button type="button" onClick={onClickSave.bind(null, arrIndex)}>Save</button>
        <button type="button" onClick={onClickDelete.bind(null, arrIndex)}>Delete</button>
      </div>
    </div>
  )
}

Section2.propTypes = {
  arrIndex: React.PropTypes.number,
  data: React.PropTypes.shape({}),
  edit: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onClickSave: React.PropTypes.func,
  onClickDelete: React.PropTypes.func,
}

export default Section2
