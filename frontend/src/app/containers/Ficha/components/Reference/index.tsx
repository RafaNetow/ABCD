import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

class TextFieldPrue extends React.Component {
	render () {
		return (
			<Grid item xs={3}>
				<TextField required id="outlined-required" {...this.props} style={{ margin: '1em', width: '80%' }} margin="normal" variant="outlined" />
			</Grid>
		)
	}
}

export default TextFieldPrue   