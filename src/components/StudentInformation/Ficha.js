import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from './GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


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
      numAccount: 0,
      RNE: 0,
      nombre: '',
      apellido: '',
      lugarDeNacimiento: '',
      edad: '',
      genero: '',
      nacionalidad: '',
      direccion: '',
      telefono: '',
      tipoSangre: ''
    }
    this.handleChangeNC = this.handleChangeNC.bind(this)
    this.handleChangeRNE = this.handleChangeRNE.bind(this)
    this.handleChangeNombre= this.handleChangeNombre.bind(this)
    this.handleChangeApellido = this.handleChangeApellido.bind(this)
    this.handleLugarDeNacimiento = this.handleLugarDeNacimiento.bind(this)
    this.handleChangeEdad = this.handleChangeEdad.bind(this)
    this.handleChangeGenero = this.handleChangeGenero.bind(this)
    this.handleChangeNacionalidad = this.handleChangeNacionalidad.bind(this)
    this.handleChangeDireccion= this.handleChangeNC.bind(this)
    this.handleChangeTelefono = this.handleChangeTelefono.bind(this)
    this.handleChangeTipoDeSangre = this.handleChangeTipoDeSangre.bind(this)
  }
  
  handleChangeTelefono(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({telefono:value});
  }
  handleChangeTipoDeSangre(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({tipoSangre:value});
  }
  
  handleChangeDireccion(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({direccion:value});
  }

  handleChangeNC (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({numAccount:value});
  }

  handleChangeRNE (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({RNE:value});
  }

  handleChangeNombre (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({nombre:value});
  }

  handleChangeApellido (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({apellido:value});
  }

  handleLugarDeNacimiento(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({lugarDeNacimiento:value});
  }

  handleChangeEdad (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({edad:value});
  }

  handleChangeGenero (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({genero:value});
  }

  handleChangeNacionalidad (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({nacionalidad:value});
  }

  render () {
    const {
      numAccount,
      RNE,
      nombre,
      apellido,
      lugarNacimiento,
      fechaNacimiento,
      edad,
      genero,
      nacionalidad,
      direccion,
      telefono,
      tipoSangre
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
            <TextFieldPru value={RNE} label='Identidad' />
            <TextFieldPru value={nombre} label='nombre' />
            <TextFieldPru value={apellido} label='apellido' />
            <TextFieldPru value={lugarNacimiento} label='lugar de nacimiento' />
            <TextFieldPru
              value={fechaNacimiento}
              type='date'
              label='fecha de nacimiento'
            />
            <TextFieldPru value={nacionalidad} label='nacionalidad' />
            <TextFieldPru value={direccion} label='direccion' />
            <TextFieldPru value={telefono} label='telefono' />
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default General
