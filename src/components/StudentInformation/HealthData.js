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

class General extends React.Component {
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
  
  handleLugarDeNacimiento(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({encargado:value});
  }
  
  handleChangeTelefono(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({casaPropia:value});
  }
  handleChangeTipoDeSangre(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({lugarDeTrabajo:value});
  }
  
  handleChangeDireccion(event) {
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
          <Typography variant='h4'>Fichas</Typography>
          <Grid container>
            <TextFieldPru
              value={numAccount}
              label='numero de cuenta'
              onChange={this.handleChangeNC}
            />
            <TextFieldPru value={RNE} label='Identidad' onChange={this.handleChangeRNE} />
            <TextFieldPru value={nombre} label='nombre' onChange={this.handleChangeNombre} />
            <TextFieldPru value={apellido} label='apellido' onChange={this.handleChangeApellido} />
            <TextFieldPru value={lugarNacimiento} label='lugar de nacimiento'  onChange={this.handleLugarDeNacimiento}/>

            <Button variant="contained" color="primary">Send</Button>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default General
