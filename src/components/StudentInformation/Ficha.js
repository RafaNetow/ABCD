import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from './GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HealthData from './HealthData'
import Reference from './Referance'
import { connect } from 'react-redux'
import {setIdentityAction} from '../../redux/actions/fichaActions'




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

class Ficha extends React.Component {
  constructor () {
    super() 
    this.state = {
      numAccount: 0,
      RNE: 0,
      nombre: '',
      apellido: '',
      lugarDeNacimiento: '',
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
    this.handleChangeFechaDeNacimiento = this.handleChangeFechaDeNacimiento.bind(this)
    this.handleChangeGenero = this.handleChangeGenero.bind(this)
    this.handleChangeNacionalidad = this.handleChangeNacionalidad.bind(this)
    this.handleChangeDireccion= this.handleChangeDireccion.bind(this)
    this.handleChangeTelefono = this.handleChangeTelefono.bind(this)
    this.handleChangeTipoDeSangre = this.handleChangeTipoDeSangre.bind(this)
  }
  
  handleLugarDeNacimiento(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({lugarDeNacimiento:value});
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


  handleChangeFechaDeNacimiento (event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({fechaNacimiento:value});
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
      genero,
      nacionalidad,
      direccion,
      telefono,
      tipoSangre
    } = this.state
    return (
      <Card style={styles.card}>
        <CardContent>
          <Typography variant='h4'>Ficha</Typography>
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
            <TextFieldPru
              value={fechaNacimiento}
              type='date'
              label='fecha de nacimiento'
              onChange={this.handleChangeFechaDeNacimiento}
            />
            <TextFieldPru value={nacionalidad} onChange={this.handleChangeNacionalidad} label='nacionalidad' />
            <TextFieldPru value={direccion} onChange={this.handleChangeDireccion} label='direccion' />
            <TextFieldPru value={telefono} onChange={this.handleChangeTelefono} label='telefono' />
            <TextFieldPru value={genero} onChange={this.handleChangeGenero} label='genero' />
            <TextFieldPru value={tipoSangre} onChange={this.handleChangeTipoDeSangre} label='tipoSangre' />
          </Grid>
        </CardContent>
        <HealthData/>
        <Reference/>
        <Button>Guardar</Button>
      </Card>
     
    )

  }
}
const mapStateToProps = (state, ownProps) => ({
 
})

const mapDispatchToProps = dispatch => {
  return {
    setIdentityAction
  }
}
export default connect()(Ficha)
