import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from './GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  card: {
    margin: '1em auto'
  },
  media: {
    height: 140,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

class Referance extends React.Component {
  constructor () {
    super() 
    this.state = {
      encargado: '',
      casaPropia: Boolean,
      lugarDeTrabajo: '',
      telefono: ''
    }
    this.handleChangeEncargado = this.handleChangeEncargado.bind(this)
    this.handleChangeCasaPropia = this.handleChangeCasaPropia.bind(this)
    this.handleChangeLugarDeTrabajo= this.handleChangeLugarDeTrabajo.bind(this)
    this.handleChangeTelefono = this.handleChangeTelefono.bind(this)
  }
  
  handleChangeEncargado(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({encargado:value});
  }
  
  handleChangeCasaPropia(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({casaPropia:value});
  }
  handleChangeLugarDeTrabajo(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({lugarDeTrabajo:value});
  }
  
  handleChangeTelefono(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({telefono:value});
  }

  
  render () {
    const {
      encargado,
      casaPropia,
      lugarDeTrabajo,
      telefono
    } = this.state
    return (
      <Card style={styles.card}>
        <CardContent>
          <Typography variant='h4'>Rerencia</Typography>
          <Grid container>
            <TextFieldPru value={encargado} label='Identidad' onChange={this.handleChangeEncargado} />
            <TextFieldPru value={casaPropia} label='nombre' onChange={this.handleChangeCasaPropia} />
            <TextFieldPru value={lugarDeTrabajo} label='apellido' onChange={this.handleChangeLugarDeTrabajo} />
            <TextFieldPru value={telefono} label='lugar de nacimiento'  onChange={this.handleChangeTelefono}/>

            <Button variant="contained" color="primary">Send</Button>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default Referance
