import React, { Component, PropTypes } from 'react';

/**
 * Select components
 * props: defaultValue, children, name, className
 * components: none
 */
class Select extends Component  {

  	render () {
  		let { name, defaultValue, children, className } = this.props;
  		return (
  			<select className={className} name={ name } defaultValue={ defaultValue } ref={ name } onChange={e => this.props.onChange(e) }>
                <option value={-1}></option>
  				{children.map((item, index) => {
					return <option key={ index } value={item.id}>{ item.text }</option>
				})}
  			</select>
  		)
  	}
}

Select.defaultProps = {
	defaultValue: -1,
	children: [],
};

Select.propTypes = {
	defaultValue: PropTypes.number,
	children: PropTypes.array,
    name: PropTypes.string.isRequired
};

export default Select
